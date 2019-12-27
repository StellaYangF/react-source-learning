class Component {
  constructor() {
    this.state = { number: 0 , name: 'stella'};
    this.batchUpdate = false; // 批量更新
    this.updateQueue = [];
    this.callbackQueue = [];
  }
  setState(partialState, callback) {
    if (this.batchUpdate) {
      this.updateQueue.push(partialState);
      callback && this.callbackQueue.push(callback);
    } else {
      this.state = typeof partialState === 'function' ?
        partialState(this.state) :
        partialState;
    }
  }
  flushUpdate() {
    // this.updateQueue.forEach(newState => this.state = newState);
    let state = this.state;
    for (let i = 0; i < this.updateQueue.length; i++) {
      let partialState = typeof this.updateQueue[i] === 'function' ? this.updateQueue[i](this.state) : this.updateQueue[i];
      state = { ...state, ...partialState };
    }
    this.state = state;
    this.callbackQueue.forEach(callback => callback());
    this.batchUpdate = false;
  }
  add() {
    this.batchUpdate = true; // 开启批量更新模式
    this.setState({ number: this.state.number + 3 });
    this.setState(prevState => ({ number: prevState.number + 1 }),() => console.log(1, this.state));
    // this.setState(prevState => ({ number: prevState.number + 2 }),() => console.log(2, this.state));
    // this.setState(prevState => ({ number: prevState.number + 3 }),() => console.log(3, this.state));

    // 回调
    // setTimeout(() => {
    //   this.setState({ number: this.state.number + 3 });
    //   console.log(this.state); // 9
    // })

    // console.log(this.state.number);
    this.flushUpdate();
  }
}
let c = new Component();
c.add();
console.log(c.state)