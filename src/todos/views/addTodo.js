import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addTodo} from '../actions';

class AddTodo extends Component {

    constructor(props, context) {

        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);

        this.refInput = this.refInput.bind(this);

    }

    refInput(node) {
        this.input = node;
    }
    onSubmit(ev) {
        ev.preventDefault();//取消表单被提交时的默认页面跳转

        const input = this.input;
        if(!input.value.trim()){
            return ;
        }
        console.log(input.value);
        this.props.onAdd(input.value);
        input.value = '';
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput} />
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>

            </div>
        )
    }

}

AddTodo.PropTypes = {

    onAdd: PropTypes.func.isRequired

};

const mapDispatchToProps = (dispatch) => {

    return {

        onAdd: (text) => {

            dispatch(addTodo(text));

        }

    }

};

export default connect(null, mapDispatchToProps)(AddTodo);
