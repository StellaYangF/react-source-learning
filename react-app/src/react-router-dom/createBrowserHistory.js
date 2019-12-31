function createBrowserHistory(props = {}) {
  const globalHistory = window.history;
  let listeners = [];
  function createHref(location) {
    let { path, hash, search } = location;
    return path + search + hash;
  }

  function setState(nextState) {
    Object.assign(history, nextState);
    history.length = globalHistory.length;
    listeners.forEach(listener => listener());
  }

  function push(path, state) {
    const action = 'PUSH';
    const location = { state, path };
    globalHistory.pushState(state, null, path);
    setState({ action, location });
  }

  function replace(path, state) {
    const action = 'REPLACE';
    const location = { state, path };
    globalHistory.replaceState(state, null, path);
    setState({ action, location });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    globalHistory.go(-1);
  }

  function goForward() {
    globalHistory.go(1);
  }

  let isBlocked = false;
  function block(prompt = false) {
    isBlocked = prompt;
  }

  function listen(listener) {
    listeners.push(listener);
  }

  const history = {
    length: globalHistory.length,
    action: 'POP',
    location: { pathname: window.location.pathname, state: globalHistory.state },
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  }

  return history;
}
let myHistory = createBrowserHistory();
console.log(myHistory);