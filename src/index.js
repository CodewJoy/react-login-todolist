import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home/Home.js";
import Profile from "./components/Profile/Profile.js";
import TodoList from "./components/TodoList/TodoList.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/todolist">TodoList</Link>
                        </li>
                    </ul>
                </div>

                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/todolist">
                        <TodoList />
                    </Route>
                </ Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
