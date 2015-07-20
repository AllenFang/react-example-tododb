import promise from 'es6-promise';
import fetch from 'isomorphic-fetch';

promise.polyfill();

let json = (response) => {
  return response.json();
}

export default {
  listAllTodo(success, error){
    let f = fetch('http://localhost:3000/todo');
    f.then(json).then(success).catch(error);
  }
}
