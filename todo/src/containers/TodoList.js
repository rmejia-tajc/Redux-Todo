import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo } from '../actions';


class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = event => {
        this.setState({ newTodo: event.target.value});
    }

    addTodo = event => {
        event.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
        this.setState({ newTodo: ''});
    }


    render() {
        return (
            <>
                <h1>Todo List</h1>

                <div>
                    {this.props.todos.map((todo, index) => (
                        <h4 key={index}>
                            {todo.task}
                        </h4>
                    ))}
                </div>

                <input
                    type='text'
                    value={this.state.newTodo}
                    placeholder='New Task'
                    onChange={this.handleChanges}
                />

                <button onClick={this.addTodo}>Add Task</button>

            </>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps, { addNewTodo })(TodoList);