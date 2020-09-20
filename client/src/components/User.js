import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            status: String,
            id: uuidv4(),
        }
    }
    

    render() {
        return (
            <div></div>
        )
    }
}

export default User;