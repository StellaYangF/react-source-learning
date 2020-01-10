export default function() {
  const globalHistory = window.history;
  let listeners = [];

  const setState = nextState => {
    Object.assign(history, nextState);
    history.length = globalHistory.length;
    listeners.forEach(listener => listener());
  }

  const push = (path, state) => {
    const action = 'PUSH';
    const location = { state, path };
    globalHistory.pushState(state, null, path);
    setState({ action, location });
  }

  const listen = listener => listeners.push(listener);

  const replace = (path, state) => {
    const action = 'REPLACE';
    const location = { state, path };
    globalHistory.replaceState(state, null, path);
    setState({ action, location });
  }

  const go = n => globalHistory.go(n);

  const goBack = () => globalHistory.go(-1);

  const goForward = () => globalHistory.go(1);
  
  const createHref = location => `${location.protocol}${location.host}${location.path}${location.search}${location.hash}`;

  let isBlocked = false;
  const block = (prompt = false) => isBlocked = prompt;

  let history = {
    length: globalHistory.length,
    action: 'POP',
    location: globalHistory.location,
    push,
    replace,
    listen,
    go,
    goBack,
    goForward,
    createHref,
    block,
  }
  return history;
}