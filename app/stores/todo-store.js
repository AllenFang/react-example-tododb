import dispatcher from '../dispatcher/dispatcher';
import * as Const from '../const/const';
import {EventEmitter} from 'events';

const CHANGE_EVENT = "change";
var _state = {
  todos: [],
  msg: ''
};

class TodoStore extends EventEmitter{

  getState(){
    return _state;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

	addChangeListener(cb) {
		this.on(CHANGE_EVENT, cb);
	}

	removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
	}
}

var store = new TodoStore();

dispatcher.register((action) => {
	switch(action.type){
		case Const.TODO_LOAD:
      _state.msg = "Todo loading...";
      store.emitChange();
			break;

    case Const.TODO_LOAD_SUCCESS:
      _state.todos = action.todos;
      _state.msg = "Load Todo list successful";
      store.emitChange();
			break;

    case Const.TODO_LOAD_FAIL:
      _state.todos = [];
      _state.msg = "Load Todo list fail";
      store.emitChange();
			break;

		default:
	}
});

export default store;
