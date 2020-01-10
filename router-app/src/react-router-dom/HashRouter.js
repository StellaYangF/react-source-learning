import React, { useState, useEffect } from 'react';
import RouterContext from './RouterContext';

export default function (props) {
  let location = {
    pathname: window.location.hash.slice(1) || '/',
    state: null,
  }
  let [state, setState] = useState({ location });
  useEffect(()=> {
    window.addEventListener('hashchange', () => {
      setState({
        ...state,
        location: {
          ...state.location,
          pathname: window.location.hash.slice(1) || '/',
        }
      });
    });
    window.location.hash = window.location.hash || '#/';
  });
  let history = {
    location: state.location,

    push(to) {
      if (history.prompt) {
        let target = typeof to === 'string' ? { pathname: to } : to;
        let yes = window.confirm(history.prompt(target));
        if (!yes)  return;
      }
      if (typeof to === 'object') { // { pathname, state }
        let { pathname, state } = to;
        location.state = state;
        window.location.hash = pathname;
      } else {
        window.location.hash = to;
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
    location: state.location,
    history,
  }
  return (
    <RouterContext.Provider value={ routerValue}>
       { props.children }
    </RouterContext.Provider>
  ) 
}