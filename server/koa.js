'use strict';

import path from 'path';
import koa from 'koa';
import jade from 'koa-jade';
import mount from 'koa-mount';
import favicon from 'koa-favicon';
import logger from 'koa-logger';
import helmet from 'koa-helmet'
import route from 'koa-route';
import cors from 'koa-cors';
import bodyParser from 'koa-body-parser';

import irouter from './router';
import * as todoRoute from './todo-rest';
import * as userRoute from './user-rest';

const env = process.env.NODE_ENV || 'development';
const app = koa();

app.use(logger());
app.use(bodyParser());
app.use(helmet.defaults());
if(env === 'development'){
  app.use(cors());
}
if (env === 'development') {
  var webpackConfig: Object = require('./../webpack/dev-config');
  console.log(`http://localhost:${webpackConfig.server.port}`);
  app.use(mount('/assets', require('koa-proxy')({ host: `http://localhost:${webpackConfig.server.port}` })));
}
else {
  app.use(mount('/assets', staticCache(path.join(__dirname, '../dist'), cacheOpts)));
}
app.use(favicon(path.join(__dirname, '../app/images/favicon.ico')));
app.use(jade.middleware({
  viewPath: path.join(__dirname, '/views')
}));

app.use(route.post('/auth/login', userRoute.login));
app.use(route.get('/api/todo', todoRoute.listAllTodo));
app.use(irouter);

var port = process.env.PORT || 3000;
app.listen(port);

if (process.send) {
  process.send('online');
}
