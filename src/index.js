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
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`;
const Li = styled.li`
    list-style: none;
    padding: 0 40px 0 0;
`;

const Container = styled.div`
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width:50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    margin: 30px;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Container>
                    <Ul>
                        <Li>
                            <Link to="/">Home</Link>
                        </Li>
                        <Li>
                            <Link to="/profile">Profile</Link>
                        </Li>
                        <Li>
                            <Link to="/todolist">TodoList</Link>
                        </Li>
                    </Ul>
                    {/* <hr /> */}
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
                </ Container>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
