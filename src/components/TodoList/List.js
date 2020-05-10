import React, { Component } from "react";
import styled from 'styled-components';

const Label = styled.label`
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    align-items: center;
`;
const Span = styled.span`
    padding: 0 20px;
`;


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
                    <Label key={newTodo.id}>
                        <input
                            type="checkbox"
                            checked={newTodo.isCompleted}
                            id={newTodo.id}
                            onChange={this.handleClick}
                        />
                        <Span>{newTodo.content}</Span>
                        {/* <span className="checkmark"></span> */}

                        <button onClick={this.clicktoClose} id={newTodo.id}>
                            Delete
                        </button>

                    </Label>
                ))}
            </div>
        );
    }
}

export default List;