import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class User extends Component {
    render() {
        return (
            <div>
                User: {this.props.name}
                <br/>
                Age: {this.props.age}
                <br/>
                Major: {this.props.major}
                <br />
                <Link to={`/feed/${this.props.id}`}>to user profile</Link>
            </div>
        )
    }
}

export default User;