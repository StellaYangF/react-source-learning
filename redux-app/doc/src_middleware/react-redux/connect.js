import React, { useContext, useState, useEffect } from 'react';
import { bindActionCreators } from '../redux';
import ReactReduxContext from './context';

export default function (mapStateToProps, mapDispatchToProps) {
  return function(OldComponent) {
    return function(props) {
      let context = useContext(ReactReduxContext);
      let [ state, setState ] = useState(mapStateToProps(context.store.getState()));
      let [ boundActions ] = useState(() => bindActionCreators(mapDispatchToProps, context.store.dispatch));
      useEffect(()=> {
        return context.store.subscribe(() => {
          setState(mapStateToProps(context.store.getState()));
        });
      }, []);
      return <OldComponent {...state} {...boundActions} />
    }
  }
}