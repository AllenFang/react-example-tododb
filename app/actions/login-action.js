import promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import alt from '../alt';


class LoginActions {
  constructor(){
    this.generateActions('loadLocalUser');
  }

  async login(username, password){
    try{
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'post',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      let result = await response.json();
      this.dispatch({ok: true, user: result});
    } catch(e){
      this.dispatch({ok: true, error: e});
    }
  }
}

export default alt.createActions(LoginActions);
