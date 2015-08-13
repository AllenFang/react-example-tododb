import React from 'react';
import {Route} from 'react-router';

export default (
  <Route name='app' path='/' handler={require('./components/app')}>
    <Route name='login' path='/login' handler={require('./components/login')}/>
  </Route>
);
