import React, { useState, useEffect } from 'react';
import RouterContext from './RouterContext';

export default function (props) {
  let location = {
    pathname: window.location.pathname,
    state: null,
  }
  let [ currentSate, setCurrentSate] = useState({ location });
  useEffect(()=> {
    window.onpushstate = (state, pathname) => {
      setCurrentSate({
        location: {
          ...currentSate.location,
          pathname,
          state,
        }
      })
    }
    window.onpopstate = event => {
      setCurrentSate({
        location: {
          ...currentSate,
          pathname: window.location.pathname,
          state: event.state,
        }
      })
    }
  }, []);
  const globalHistory = window.history;
  let history = {
    location: currentSate.location,

    push(to) {
      if (history.prompt) {
        let target = typeof to === 'string' ? { pathname: to } : to;
        let yes = window.confirm(history.prompt(target));
        if (!yes)  return;
      }
      if (typeof to === 'object') { // { pathname, state }
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

  let routerValue = {
    location: currentSate.location,
    history,
  }
  return (
    <RouterContext.Provider value={ routerValue}>
       { props.children }
    </RouterContext.Provider>
  ) 
}