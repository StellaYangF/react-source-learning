class Component {
  state = { number: 0, name: 'stella' };
  batchUpdate = false;
  updateQueue = [];
  callbackQueue = [];

  setState(updateState) {
    if (this.batchUpdate) {
      this.updateQueue.push(updateState);
    }
  }
  flushUpdate() {
   let state = this.state;
   for (let i =0; i< this.updateQueue.length; i++ ) {
     state = this.updateQueue[i];
    }
    this.state = state;
  }
  add() {
    this.batchUpdate = true;
    this.setState({ number: this.state.number + 1 });
    this.setState({ number: this.state.number + 1 });
    this.setState({ number: this.state.number + 1 });
    this.setState({ number: this.state.number + 1 });
    this.flushUpdate();
  }
}

const c = new Component();
c.add();
console.log(c.state);