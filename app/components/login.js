import React from 'react';
import LoginAction from '../actions/login-action';


export default class Login extends React.Component{

  constructor(props){
    super(props);
  }

  handleLoginBtnClick(e){
    LoginAction.login(
      this.refs.username.getDOMNode().value,
      this.refs.password.getDOMNode().value);
  }

  render() {
    return(
      <div>
        User Name : <input ref="username" type="text"></input><br/>
        Password: <input ref="password" type="text"></input><br/>
        <button type="button" className="btn btn-default"
                onClick={(e) => this.handleLoginBtnClick(e)}>
            Login
        </button>
      </div>
    );
  }
};
