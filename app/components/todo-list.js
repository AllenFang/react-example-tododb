import React from 'react';

class TodoList extends React.Component{
  render(){
    let todoList = this.props.todos.map(function(todo){
      return(<li className="list-group-item">{todo.name}</li>)
    });
    console.log(todoList);
    return (
      <ul className="list-group">
        {todoList}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todo: React.PropTypes.array
};

TodoList.defaultProps = {
  todo: []
}

export default TodoList;
