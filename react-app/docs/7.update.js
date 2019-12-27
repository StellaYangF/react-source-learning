const isFunction = target => typeof target === 'function';

class Component {
  state = { number: 0, name: 'stella' };
  batchUpdate = false;
  updateQueue = [];
  callbackQueue = [];

  setState(updateState, callback) {
    if (this.batchUpdate) {
      this.updateQueue.push(updateState);
      this.callbackQueue.push(callback);
    } else {
      this.state = isFunction(updateState) ? updateState(this.state) : updateState;
    }
  }

  flushUpdate() {
   let state = this.state;
   for (let i =0; i< this.updateQueue.length; i++ ) {
      let updateState = this.updateQueue[i];
      let partialState = isFunction(updateState) ? updateState(state) : updateState;
      // 注意updateState()调用传参是当前state, 而不是this.state，可以拿到上一次传入的值
      state = { ...state, ...partialState };
    }
    this.state = state;
    this.callbackQueue.forEach(callback => callback());
    this.batchUpdate = false;
  }

  add() {
    this.batchUpdate = true;

    // this.setState({ number: this.state.number + 1 });
    // this.setState({ number: this.state.number + 1 });
    // this.setState({ number: this.state.number + 1 });
    // this.setState({ number: this.state.number + 1 });

    this.setState(prevState => ({ number: prevState.number + 1 }), () => console.log(this.state) );
    this.setState(prevState => ({ number: prevState.number + 1 }), () => console.log(this.state) );
    this.flushUpdate();
  }
}

const c = new Component();
c.add();