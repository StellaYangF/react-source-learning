import React from 'react';
import { Route } from './';

export default function(OldComponent) {
  return props => (
    <Route 
      render={ routeProps => <OldComponent { ...props } { ...routeProps } /> }
    />
  )
}