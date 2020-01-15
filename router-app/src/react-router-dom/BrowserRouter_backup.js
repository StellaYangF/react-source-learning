import RouterContext from "./RouterContext"
import React, { useEffect, useState } from "react"

export default function (props) {
  let location = {
    pathname: window.location.pathname,
    state: null,
  }
  let [ initialLocation, setInitialLocation ] = useState( location );

  useEffect(() => {
    window.onpushstate = (state, pathname) => {
      setInitialLocation({
        ...initialLocation,
        pathname,
        state,
      })
    }
    window.onpopstate = (event) => {
      setInitialLocation({
        ...initialLocation,
        pathname: window.location.pathname,
        state: event.state,
      })
    }
  },[]);

  const globalHistory = window.history;
  let history = {
    location: initialLocation,

    push(to) {
      if (history.prompt) {
        let target = typeof to === 'string' ? { pathname: to } : to;
        let yes = window.confirm(history.prompt(target));
        if (!yes)  return;
      }
      if (typeof to === 'object') {
        let { pathname, state } = to;
        globalHistory.pushState(state, null, pathname);
      } else {
        globalHistory.pushState(null, null, to);
      }
    },
  
    block(prompt) {
      history.prompt = prompt;
    },
    
    unblock() {
      history.prompt = null;
    }
  }

  const routerValue = {
    history,
    location: initialLocation,
  };

  return (
    <RouterContext.Provider value={ routerValue }>
      { props.children }
    </RouterContext.Provider>
  )
}