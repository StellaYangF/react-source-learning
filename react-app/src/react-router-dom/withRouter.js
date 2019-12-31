import React from 'react';
import { Route } from '../react-router-dom';
export default function (OldComponent) {
    // props={title:"珠峰"}
    //routeProps={location,history,match}
    return props => (
        <Route render={
            routeProps => <OldComponent {...props} {...routeProps} />
        } />
    )
}