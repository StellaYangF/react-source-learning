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
  return (
    <RouterContext.Provider value={state}>
       { props.children }
    </RouterContext.Provider>
  )
}