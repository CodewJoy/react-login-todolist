import React, { Component } from "react";
import AuthUserContext from "../../utils/Context.js";

const UserInfo = () => (
    <>
        <AuthUserContext.Consumer>
            {userData => (
                <UserInfoBase userData={userData} />
            )}
        </AuthUserContext.Consumer>
    </>
);

class UserInfoBase extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = () => {
        event.preventDefault();
        this.updateUser();
    }
    handleChange = (e) => {
        let target = e.target;
        // if (target.value)
        // justify timezone is number and between number -12~14
        this.props.userData.updateUserData({ timezone: target.value });
    }
    updateUser = () => {
        // console.log(this.props.userData.sessionToken);
        // console.log(this.props.userData.timezone);
        const headers = {
            'X-Parse-Application-Id': 'vqYuKPOkLQLYHhk4QTGsGKFwATT4mBIGREI2m8eD',
            'X-Parse-REST-API-Key': '',
            'X-Parse-Session-Token': this.props.userData.sessionToken,
            'Content-Type': 'application/json',
        }
        const url = new URL(`https://watch-master-staging.herokuapp.com/api/users/${this.props.userData.objectId}`);
        const formData = new FormData();
        formData.append('timezone', this.props.userData.timezone);
        // console.log(formData);
        // console.log(JSON.stringify(formData));
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(formData),
            mode: 'cors',
            headers
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                alert(JSON.stringify(response));
            })
    }
    render() {
        return (
            <div>
                {this.props.userData.timezone ? (
                    <ul>
                        <li>Username: {this.props.userData.username}</li>
                        <li>
                            Timezone:
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" onChange={this.handleChange}
                                    value={this.props.userData.timezone}
                                />
                                <button type="submit">
                                    Submit Edited Timezone
                                </button>
                            </form>
                        </li>
                        <li>Code: {this.props.userData.code}</li>
                    </ul>
                ) : null}
            </div>
        )
    }
}

export default UserInfo; 