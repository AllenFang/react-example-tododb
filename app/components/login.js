import React from 'react';

export default class Login extends React.Component{

  handleLoginBtnClick(e){
    console.log(e);
  }

  render() {
    return(
      <div>
        <button type="button" className="btn btn-default" onclick={(e) => this.handleLoginBtnClick(e)}>Login</button>
      </div>
    );
  }
};
