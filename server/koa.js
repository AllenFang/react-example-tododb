'use strict';

import path from 'path';
import koa from 'koa';
import jade from 'koa-jade';
import favicon from 'koa-favicon';
import logger from 'koa-logger';
import bodyParser from 'koa-body-parser';

import router from './router';

const env = process.env.NODE_ENV || 'development';
const app = koa();

app.use(logger());
app.use(favicon(path.join(__dirname, '../app/images/favicon.ico')));
app.use(bodyParser());
app.use(jade.middleware({
  viewPath: path.join(__dirname, '/views')
}));


app.use(router);

var port = process.env.PORT || 3000;
app.listen(port);
