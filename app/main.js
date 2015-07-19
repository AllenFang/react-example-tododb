import React from "react";
import TodoApp from "./components/todo-app";

let Todo = React.createFactory(TodoApp);

if (typeof window !== "undefined") {
  window.onload = function() {
    React.render(Todo(), document.getElementById("content"));
  };
}
