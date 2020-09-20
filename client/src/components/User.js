import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

import UserNode from './UserNode';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
                status: 0,
                id: uuidv4(),
        }
    }


    render() {
        console.log("id", this.state.id);
        return (
            <div>
                <UserNode id={this.state.id}/>
            </div>
        )
    }
}

export default User;