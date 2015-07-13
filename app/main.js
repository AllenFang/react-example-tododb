import React from "react";
import Demo from "./components/demo";

let DemoComponent = React.createFactory(Demo);

if (typeof window !== "undefined") {
  window.onload = function() {
    React.render(DemoComponent(), document.getElementById("content"));
  };
}
