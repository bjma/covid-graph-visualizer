import React, { Component } from 'react';

class UserNode extends Component {
    // Should take in:
    constructor(props) {
        super(props);
        this.state = {
            label: "",
            x: 0,
            y: 0,
            id: uuidv4(),
            color: rgb(0, 0, 0),
            size: 0,
        }
    }

    componentDidMount() {
        
    }

    callAPI = async () => {
        const response = await fetch('http://localhost:5000/');
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default UserNode;