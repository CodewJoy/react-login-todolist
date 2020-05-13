import React, { Component } from "react";
import List from "./List.js";
import TaskFilter from "./TaskFilter.js";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todoText: "",
            status: 'all',
            todosSelect: []
        }
    }
    handleChange = (event) => {
        this.setState({
            todoText: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { todos, todoText } = this.state;
        if (todoText.length === 0) {
            return
        }
        this.setState({
            todos: [...todos, {
                isCompleted: false,
                id: Date.now(),
                content: todoText
            }],
            todoText: "",
        }, () => console.log(this.state))
    }
    completeStatus = (id) => {
        const { todos } = this.state;
        for (let i = 0; i < todos.length; i++) {
            if (id === String(todos[i].id)) {
                this.setState((prevState) => {
                    const checkedTodos = prevState.todos[i]
                    checkedTodos.isCompleted = checkedTodos.isCompleted === true ? false : true
                    return { todos: prevState.todos }
                })
            }
        }
    }
    closeTodo = (id) => {
        const { todos } = this.state;
        for (let i = 0; i < todos.length; i++) {
            if (id === String(todos[i].id)) {
                this.setState((prevState) => {
                    const closeTodos = prevState.todos
                    return closeTodos.splice(i, 1)
                })
            }
        }
    }
    statusChosen = (statusChosen) => {
        const { status } = this.state;
        if (statusChosen === 'active') {
            this.setState({ status: 'active' }, () => {
                console.log(status)
            })
        } else if (statusChosen === 'isCompleted') {
            this.setState({ status: 'isCompleted' }, () => {
                console.log(status)
            })
        } else {
            this.setState({ status: 'all' }, () => {
                console.log(status)
            })
        }
    }
    render() {
        const { todoText, todos, status } = this.state;
        return (
            <div className="main">
                <h1> todolist </h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={todoText}
                        onChange={this.handleChange}
                        placeholder="Key in your tasks..."
                    />
                </form>
                <hr />
                <List
                    todos={todos}
                    status={status}
                    completeStatus={this.completeStatus}
                    closeTodo={this.closeTodo}
                />
                <TaskFilter
                    statusChosen={this.statusChosen}
                />
            </div>
        )
    }
}

export default TodoList;

