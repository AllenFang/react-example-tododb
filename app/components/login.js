import React from 'react';
import LoginAction from '../actions/login-action';
import LoginStore from '../stores/login-store';
import connectToStores from 'alt/utils/connectToStores';

@connectToStores
export default class Login extends React.Component{

  constructor(props){
    super(props);
  }

  // static propTypes = {
  //   error: React.PropTypes.string
  // }

  static getStores() {
    return [LoginStore];
  }

  static getPropsFromStores() {
    return LoginStore.getState();
  }

  handleLoginBtnClick(e){
    LoginAction.login(
      this.refs.username.getDOMNode().value,
      this.refs.password.getDOMNode().value);
  }

  render() {
    return(
      <div>
        <p>{this.props.error}</p>
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
