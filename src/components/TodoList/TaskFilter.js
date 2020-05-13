import React, { Component } from "react";

class TaskFilter extends Component {
    constructor(props) {
        super(props);
    }
    changeToAll = () => {
        this.props.statusChosen('all')
    }

    changeToActive = () => {
        this.props.statusChosen('active')
    }

    changeToCompleted = () => {
        this.props.statusChosen('isCompleted')
    }

    render() {
        return (
            <div>
                <button onClick={this.changeToAll}>All</button>
                <button onClick={this.changeToActive}>Active</button>
                <button onClick={this.changeToCompleted}>Completed</button>
            </div>
        )
    }
}

export default TaskFilter;