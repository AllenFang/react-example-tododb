import React from 'react';
import TodoList from './todo-list.js';
import TodoAction from '../actions/todo-action';
import todoStore from '../stores/todo-store';
import MessageDisplay from './message-display';

export default class TodoApp extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      msg: ''
    };
  }

  componentDidMount(){
    // todoStore.addChangeListener(this._onChange.bind(this));
    // TodoAction.getTodoList();
  }

  componentWillUnmount() {
    // todoStore.removeChangeListener(this._onChange.bind(this));
	}

  render(){
    return(
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <div className="panel panel-default">
            <div className="panel-body">
              <MessageDisplay msg={this.state.msg}/>
              <TodoList todos={this.state.todos}></TodoList>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChange(){
		this.setState(todoStore.getState());
	}
}
