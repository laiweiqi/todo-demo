import {createStore, combineReducers} from 'redux';
import {reducer as TodoReducer} from './todos';
import {reducer as TodoFilter} from './filter';

//将各个模块的reducer合成为一个reducer函数
const reducer = combineReducers({
    todos: TodoReducer,
    filter: TodoFilter
});

export default createStore(reducer);