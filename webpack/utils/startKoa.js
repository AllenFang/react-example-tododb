'use strict'
import fs from 'fs';
import cp from 'child_process';
import path from 'path';
import debug from 'debug';
import browserSync from 'browser-sync';
import watch from 'node-watch';

import assign from 'react/lib/Object.assign';

let server;
let started;
let serverReload;
const KOA_FILE_PATH = path.resolve(__dirname, '../../server/index');

let startServer = () => {
  const env = assign({NODE_ENV: 'development'}, process.env);
  // start the server procress
  server = cp.fork(KOA_FILE_PATH, {env});
  console.log("message");
  server.once('message', (message) => {
    console.log("onstart");
    if (message.match(/^online$/)) {
      if (serverReload) {
        console.log("browserSync.reload()");
        serverReload = false;
        browserSync.reload();
      }
      if (!started) {
        started = true;
        // Start browserSync
        console.log("browserSync");
        browserSync({
          port: 8080,
          proxy: 'http://localhost:3000'
        });
        // Start watcher on server files
        // and reload browser on change
        watch(
          path.join(__dirname, '../../server'),
          (file) => {
            if (!file.match('webpack-stats.json')) {
              debug('dev')('restarting koa application');
              serverReload = true;
              server.kill('SIGTERM');
              return startServer();
            }
          }
        );
      }
    }
  });
}

process.on('exit', () => server.kill('SIGTERM'));

export default function () {
  console.log("GOGO");
  if (!server) {
    console.log("GOGO1");
    return startServer();
  }
};
