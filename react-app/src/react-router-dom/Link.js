import React from 'react';
import RouterContext from './RouterContext';
export default function Link(props) {
    return (
        <RouterContext.Consumer>
            {
                routerValue => (
                    <a {...props}
                        onClick={() => routerValue.history.push(props.to)}>
                        {props.children}
                    </a>
                )
            }
        </RouterContext.Consumer>
    )
}