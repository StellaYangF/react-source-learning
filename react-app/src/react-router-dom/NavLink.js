import React from 'react';
import './NavLink.css';
import { Route, Redirect, Link } from '../react-router-dom';
export default function (props) {
    let { to, exact, children } = props;
    //let activeStyle = { backgroundColor: 'green', color: 'red' };
    return (
        <Route
            path={to}
            exact={exact}
            children={
                routerProps => (
                    <Link
                        className={routerProps.match ? 'active' : ''}
                        to={to}>{children}</Link>
                )
            }
        />
    )
}