import React, {Component} from 'react';

class ListUsers extends Component {
    render() {
        const users = this.props.users;
        return {users.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
    }
}

export default ListUsers
