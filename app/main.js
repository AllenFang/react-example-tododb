import './styles/index.scss';
import React from "react";
import Router from "react-router";
import route from "./router";

Router.run(route,  Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.getElementById('content'));
});
