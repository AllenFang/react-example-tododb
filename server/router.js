'use strict';
import fs from 'fs';
import path from 'path';
import React from 'react';
import Router from 'react-router';
import route from '../app/router';

export default function *(){
  let assets;
  // if (process.env.NODE_ENV === 'development') {
    assets = fs.readFileSync(path.resolve(__dirname, './webpack-stats.json'));
    assets = JSON.parse(assets);


  var getHandler = function(routes, url) {
    return new Promise(function(resolve) {
      Router.run(routes, url, function (Handler) {
        resolve(Handler);
      });
    });
  };

  const handler = yield getHandler(route, this.request.url);
  const markup = React.renderToString(React.createElement(handler));

  assets['markup'] = markup;
  this.render('index', assets);
}
