const NAME = "todo";

var Todo = class Todo {

  constructor(db){
    this.collection = db.collection(NAME);
  }

  find(criteria, cb){
    this.collection.find(criteria).toArray(cb);
  }

  insert(todo, cb){
    this.collection.insert(todo, {strict: true}, cb);
  }

  update(query, update, option, cb){
    this.collection.update(query, update, option, cb);
  }

  remove(query, cb){
    this.collection.remove(query, cb);
  }

  static getName(){
    return NAME;
  }

}
export default Todo;
