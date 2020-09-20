import React, { Component } from 'react';

class UserNode extends Component {
    // Should take in:
    constructor(props) {
        super(props);
        this.state = {
                label: "",
                x: 0,
                y: 0,
                id: this.props.id,
                color: "rgb(0, 0, 0)",
                size: 0,
        }
    }

    componentDidMount() {
        this.callAPI()
            .then(res => this.setState({
                label: res.label,
                x: res.x,
                y: res.y,
                color: res.color,
                size: res.size,
            }))
    }

    callAPI = async () => {
        const response = await fetch('http://localhost:5000/');
        const body = await response.json();
        return body;
    }

    render() {
        return (
            <div>
                <h2>{this.state.label}</h2>
                <p>id:<span style={{color: this.state.color}}> {this.state.id} </span></p>
            </div>
        )
    }
}

export default UserNode;