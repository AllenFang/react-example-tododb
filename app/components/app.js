'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import Footer from './commons/footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <RouteHandler />
        <Footer />
      </div>
    );
  }
}
