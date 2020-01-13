import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link , Redirect, Switch} from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-heading">
                <div className="navbar-brand">Brand</div>
            </div>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              {/* 
                exact 属性添加后 默认为true 无需赋值
                且在 Switch组件下，因为一匹配到就会直接返回所需的组件，跳出 for 循环，
                嵌套组件会覆盖匹配，如：/ 会覆盖 /user /profile
                解决：添加开启 exact 精确匹配
              */}
            <Switch>
              <Route path="/" component={ Home } exact/>
              {/* <Route path="/" component={ Home } exact/> */}
              <Route path="/user" component={ User } />
              <Route path="/profile" component={ Profile } />
              <Route path="/profile" component={Profile} />
              <Redirect to="/" from='/list' />
              <Redirect to="/user" from='/list' />
            </Switch>
          </div>
        </div>
      </div>
  </Router>
  ,document.getElementById('root')
)