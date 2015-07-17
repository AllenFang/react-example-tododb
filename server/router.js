'use strict';
import fs from 'fs';
import path from 'path';
import React from 'react';
import Demo from "../app/components/demo";

export default function *(){
  let assets;
  // if (process.env.NODE_ENV === 'development') {
    console.log(path.resolve(__dirname, './webpack-stats.json'))
    assets = fs.readFileSync(path.resolve(__dirname, './webpack-stats.json'));
    assets = JSON.parse(assets);
  console.log(assets);


  let DemoComponent = React.createFactory(Demo);
  let markup = React.renderToString(DemoComponent());
  assets['markup'] = markup;
  // }
  // else {
  //   assets = require('./webpack-stats.json');
  // }
  this.render('index', assets);
}
