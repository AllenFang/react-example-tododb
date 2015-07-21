import dispatcher from '../dispatcher/dispatcher'
import WebApi from '../utils/web-api';
import * as Const from '../const/const';
export default {

  getTodoList(){
    dispatcher.dispatch({
      type: Const.TODO_LOAD
    });

    WebApi.listAllTodo((data) => {
      dispatcher.dispatch({
        type: Const.TODO_LOAD_SUCCESS,
        todos: data
      });
    }, (err) => {
      dispatcher.dispatch({
        type: Const.TODO_LOAD_FAIL
      });
    });
  }
}
