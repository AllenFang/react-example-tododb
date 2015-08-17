'use strict';

import React from 'react';
import {RouteHandler, Link} from 'react-router';
import LoginAction from '../actions/login-action';
import LoginStore from '../stores/login-store';
import Footer from './commons/footer';
// import {Link} from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // LoginAction.loadLocalUser();
  }
  render() {
    return (
      <div className="container-fluid">
        <Link to="todo">Todo</Link>
        <Link to="login">Login</Link>
        <RouteHandler />
        <Footer />
      </div>
    );
  }
}
