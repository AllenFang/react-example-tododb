'use strict';
import monk from 'monk';

var db = monk('localhost:27017/demodb');
var collection = db.get('todo');


export var listAllTodo = function *(next){
  var result = yield collection.find({});
  this.body = result;
}
