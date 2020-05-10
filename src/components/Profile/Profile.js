import React, { Component } from "react";
import { headers } from "../../utils/API.js";
import AuthUserContext from "../../utils/Context.js";
import UserInfo from "./UserInfo.js";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.updateUserData = (updateObject) => {
            this.setState(updateObject);
        };
        this.state = { 
            username: "test2@qq.com",
            password: "test1234qq",
            updateUserData: this.updateUserData 
        };
    }
    handleSubmit = () => {
        const { username, password } = this.state;
        event.preventDefault();
        this.loginWithPassword(username, password);
    }
    handleChange = (e) => {
        let target = e.target;
        this.setState({ [target.name]: target.value });
    }
    loginWithPassword = (username, password) => {
        if (username.length === 0 || password.length === 0) {
            alert('Invalid username/password.');
        } else {
            const url = new URL('https://watch-master-staging.herokuapp.com/api/login')
            var params = { 'username': username, 'password': password }
            url.search = new URLSearchParams(params).toString();
            fetch(url, {
                method: 'GET',
                headers
            })
            .then(response => response.json()) // 輸出成 json
            .then(response => {
                this.updateUserData(response);
            })
        }
    }
    render() {
        const { username, password } = this.state;
        return (
            <AuthUserContext.Provider value={this.state}>
                <div className="main">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Login</button>
                    </form>
                    <UserInfo />
                </div>
            </AuthUserContext.Provider>
        )
    }
}

export default Profile;