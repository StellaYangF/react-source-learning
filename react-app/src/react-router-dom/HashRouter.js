import React, { useState } from 'react';
import RouterContext from "./RouterContext.js";
/**
 * HashRouter只是一个容器，并没有DOM结构，它渲染的就是它的子组件
 * 它就是为了向下层组件传递 location
 */
export default class HashRouter extends React.Component {
    state = {
        location: {
            pathname: window.location.hash.slice(1),// #/user /user
        }
    }
    componentDidMount() {
        window.addEventListener('hashchange', event => {
            this.setState({
                ...this.state,
                location: {
                    ...this.state.location,
                    pathname: window.location.hash.slice(1) || '/',
                    state: this.locationState
                }
            });
        });
        window.location.hash = window.location.hash || '/';
    }
    render() {
        let that = this;
        let history = {
            location: this.state.location,
            push(to) {
                if (history.prompt) {
                    let target = typeof to === 'string' ? { pathname: to } : to;
                    let yes = window.confirm(history.prompt(target));
                    if (!yes) return;
                }
                if (typeof to === 'object') {//传的是一个对象 {pathname,state}
                    let { pathname, state } = to;
                    that.locationState = state;
                    window.location.hash = pathname;
                } else {//就是个字符串
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
            location: that.state.location,
            history
        }
        return (
            <RouterContext.Provider value={routerValue}>
                {that.props.children}
            </RouterContext.Provider>
        )
    }
}

// window.location
//    origin: "http://localhost:3000"
//    protocol: "http:"
//    host: "localhost:3000"
//    hostname: "localhost"
//    port: "3000"
//    pathname: "/"
//    search: ""
//    hash: "#/login"
//    href: "http://localhost:3000/#/login"

// props
// history:
//    length: 50
//    action: "PUSH"
//    location: {pathname: "/user/detail/1577763473321", state: {…}, search: "", hash: "", key: "brdeek"}
//    createHref: ƒ createHref(location)
//    push: ƒ push(path, state)
//    replace: ƒ replace(path, state)
//    go: ƒ go(n)
//    goBack: ƒ goBack()
//    goForward: ƒ goForward()
//    block: ƒ block(prompt)
//    listen: ƒ listen(listener)
//    __proto__: Object
// location:
//    pathname: "/user/detail/1577763473321"
//    state: {id: "1577763473321", username: "stella"}
//    search: ""
//    hash: ""
//    key: ""
//    __proto__: Object
// match:
//    path: "/user/detail/:id"
//    url: "/user/detail/1577763473321"
//    isExact: true
//    params: {id: "1577763473321"}
//    __proto__: Object
// staticContext: undefined