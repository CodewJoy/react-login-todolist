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
    handleChange = (e) => {
        let target = e.target;
        this.setState({ [target.name]: target.value });
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
                                    Edit Timezone
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