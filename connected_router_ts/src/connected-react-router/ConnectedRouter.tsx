import React, { useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import { Router } from 'react-router';
import { History, Location } from 'history';
import { LOCATION_CHANGE, Action } from './';

interface Props {
  history: History;
  children: any;
}
export default function ConnectedRouter(props: Props) {
  const context = useContext(ReactReduxContext);
  useEffect(() => {
    return props.history.listen((location: Location, action: Action) => {
      context.store.dispatch({
        type: LOCATION_CHANGE,
        payload: {
          location,
          action,
        }
      })
    })
  },[]);
  return (
    <Router history={ props.history }>
      { props.children }
    </Router>
  )
}