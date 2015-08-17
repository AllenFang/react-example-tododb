'use strict';
import monk from 'monk';

var db = monk('localhost:27017/demodb');
var collection = db.get('user');


export var login = function *(next){
  yield next;
  const err = {message: "Login error with wrong username and password."};
  const body = this.request.body;
  try{
    const result = yield collection.findOne({
      username: body.username,
      password: body.password
    });

    if(result){
      this.status = 201;
      this.body = result;
    } else {
      throw err;
    }
  } catch(e){
    this.status = 401;
    this.body = e;
  }
}
