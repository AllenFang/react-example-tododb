import alt from '../alt';
import router from '../utils/router';
import LoginAction from '../actions/login-action';

const USER_STORAGE_KEY = 'tododbuser';

class LoginStore {
  constructor(){
    this.bindActions(LoginAction);
    this.user  = null;
    this.error = null;
  }

  storeUser(user) {
    this.user = user;
    this.error = null;
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  }

  onLogin(data){
    if(data.ok){
      if(data.user.message){
        this.error = data.user.message;
      } else {
        this.storeUser(data.user);
        router.transitionTo('todo');
      }
    } else{
      router.transitionTo('login');
    }
  }
}

export default alt.createStore(LoginStore);
