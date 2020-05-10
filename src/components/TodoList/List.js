import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = (event) => {
        this.props.completeStatus(event.target.id)
    }
    clicktoClose = (event) => {
        this.props.closeTodo(event.target.id);
    }
    render() {
        let todos = this.props.todos;
        let newTodo = []
        if (this.props.status === 'isCompleted') {
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].isCompleted === true) {
                    newTodo.push(todos[i])
                }
            }
        } else if (this.props.status === 'active') {
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].isCompleted === false) {
                    newTodo.push(todos[i])
                }
            }
        } else {
            newTodo = todos
        }
        return (
            <div>
                {newTodo.map(newTodo => (
                    <label className="to-do-item" key={newTodo.id}>
                        <input
                            type="checkbox"
                            checked={newTodo.isCompleted}
                            id={newTodo.id}
                            onChange={this.handleClick}
                        />
                        <span>{newTodo.content}</span>
                        {/* <span className="checkmark"></span> */}
                        <div onClick={this.clicktoClose} id={newTodo.id}>X</div>
                    </label>
                ))}
            </div>
        );
    }
}

export default List;