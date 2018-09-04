import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import {toggleTodo, removeTodo} from '../actions';
import {FilterTypes} from '../../constants';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => {
                    console.log(todos);
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />
                })
            }
        </ul>
    );
};

TodoList.PropTypes = {

    todos: PropTypes.array

};

const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            throw new Error('insupported filter');
    }
};

const mapStateToprops = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        onToggle: (id) => {
            dispatch(toggleTodo(id));
        },
        onToggle: (id) => {
            dispatch(removeTodo(id));
        }
    }
};

export default connect(mapStateToprops, mapDispatchToprops)(TodoList);
