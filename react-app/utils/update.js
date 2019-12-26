class Component {
  constructor() {
    this.state = { number: 0};
    this.batchUpdate = false; // 批量更新
    this.updateQueue = [];
  }
  setState(newState) {
    if (this.batchUpdate) {
      this.updateQueue.push(newState);
    }
  }
  flushUpdate() {
    this.updateQueue.forEach(newState => this.state = newState);
  }
  add() {
    this.batchUpdate = true; // 开启批量更新模式
    this.setState({ number: this.state.number + 1 }) 
    this.setState({ number: this.state.number + 1 }) 
    this.setState({ number: this.state.number + 1 }) 
    console.log(this.state.number);
    this.flushUpdate();
  }
}
let c = new Component();
c.add();
console.log(c.state.number)