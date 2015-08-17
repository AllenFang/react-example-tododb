import React from 'react';
import {Route, DefaultRoute} from 'react-router';
export default (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/todo-app')}/>
    <Route name='login' handler={require('./components/login')}/>
    <Route name='todo' handler={require('./components/todo-app')}/>
  </Route>
);
