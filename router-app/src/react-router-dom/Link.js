import React, { useContext } from 'react';
import RouterContext from './RouterContext';
export default function (props) {
  let context = useContext(RouterContext);
  return (
    <a 
      { ...props } 
      onClick={ () => context.history.push(props.to) }
    >{ props.children }</a>
  )
}