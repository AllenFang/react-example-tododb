import path from 'path';
import webpack from 'webpack';


import writeBundle from './utils/writeBundle';
import startKoa from './utils/startKoa';


const PUBLIC_PATH = `http://localhost:3001/assets/`
const WEBPACK_DEV_SERVER_PORT = parseInt(process.env.PORT) + 1 || 3001;

export default {
  server:{
    port: WEBPACK_DEV_SERVER_PORT,
    options:{
      publicPath: PUBLIC_PATH,
      hot: true,
      stats: {
        assets: true,
        colors: true,
        version: false,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false
      }
    }
  },
  webpack:{
    entry:[
      `webpack-dev-server/client?http://localhost:${WEBPACK_DEV_SERVER_PORT}`,
      'webpack/hot/only-dev-server',
      './app/main.js'
    ],

    publicPath: PUBLIC_PATH,

    output:{
      path: path.join(__dirname, '../dist'),
      filename: '[name]-[hash].js',
      chunkFilename: '[name]-[hash].js',
      publicPath: PUBLIC_PATH
    },

    module: {
      loaders: [
        { test: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/}
      ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      function(){
        this.plugin('done', writeBundle);
        this.plugin('done', startKoa);
      }
    ],

    resolve: {
      extensions: ['', '.js', '.jsx'],
      // root: [path.join(__dirname, "public", "javascripts")],
      modulesDirectories: ['node_modules']
    }
  }
}
