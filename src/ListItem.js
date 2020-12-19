import React, {Component} from 'react';

class ListItem extends Component {
    render() {
        const username = this.props.username;
        return (
            <li>{username}</li>
        )
    }
}

export default ListItem
