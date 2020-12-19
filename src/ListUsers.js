import React, {Component} from 'react';
import ListItem from './ListItem';

class ListUsers extends Component {
    render() {
        return (
            <ul>
            {this.props.users.map((user)=>
                <ListItem key={user.id} username={user.name} />
            )}
            </ul>
        )
    }
}

export default ListUsers
