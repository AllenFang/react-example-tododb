import React from 'react';
import TodoList from './todo-list.js';
import TodoAction from '../actions/todo-action';
import todoStore from '../stores/todo-store';

export default class TodoApp extends React.Component{

  componentDidMount(){
    todoStore.addChangeListener(this._onChange.bind(this));
    TodoAction.getTodoList();
  }

  componentWillUnmount() {
    todoStore.removeChangeListener(this._onChange.bind(this));
	}

  render(){
    return(
      <TodoList></TodoList>
    );
  }

  _onChange(){
		this.setState(todoStore.getState());
	}
}
