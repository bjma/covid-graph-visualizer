import React, { Component } from 'react';

import UserNode from './components/UserNode';
import User from './components/User';
import Graph from 'react-sigma-graph';

class App extends Component {
    state = {
        nodes: []
    }

    componentDidMount() {
        this.callAPI()
            .then(res => this.setState({
                nodes : res
            }));
    }

    callAPI = async () => {
        const response = await fetch('http://localhost:5000/graphRoute');
        const body = await response.json();
        return body;
    }

    /**
     * Creates a list of edges; since an edge is just a source node and a target node,
     * then we can simply use our database (which stores user friends lists) to construct
     * a list of edges
     */
    makeEdges = (nodes) => {
        let edges = [];
        return edges;
    }

    

    render() {
        let _data = {
            nodes: this.state.nodes,
            edges: this.makeEdges(this.state.nodes),
        }
        console.log(this.state);
        return (
            <div className="App">
                <Graph data={_data} categoryColors={{0:"rgb(198, 196, 192)", 1:"rgb(0, 255, 0)", 2:"rgb(255, 0, 0)", 3:"rgb(226, 117, 30)"}} />
                <User />
            </div>
        )
    }
}

export default App;