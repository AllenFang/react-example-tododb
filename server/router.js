'use strict';
import fs from 'fs';
import path from 'path';
import React from 'react';
import TodoApp from "../app/components/todo-app";

export default function *(){
  let assets;
  // if (process.env.NODE_ENV === 'development') {
    assets = fs.readFileSync(path.resolve(__dirname, './webpack-stats.json'));
    assets = JSON.parse(assets);


  let AppComponent = React.createFactory(TodoApp);
  let markup = React.renderToString(AppComponent());
  assets['markup'] = markup;
  // }
  // else {
  //   assets = require('./webpack-stats.json');
  // }
  this.render('index', assets);
}
