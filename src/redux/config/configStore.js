import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// 1. rootReducer를 만들 것이고, --> reducer들을 합칠 거야
// modules 밑에 있는 여러 파일들이 반환하는 값
// 현재 : todos, counter, users

const rootReducer = combineReducers({
    todos,
});
// 2. 이걸 이용해서 store 만들 것이다 (main)
const store = createStore(rootReducer);

// 3. export 해서 다른 파일에서 import 할 수 있도록 한다.
export default store;
