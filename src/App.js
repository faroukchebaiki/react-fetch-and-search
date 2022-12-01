import React, { Component } from 'react';
import Cardlist from "./components/cardlist";
import Top from "./components/Top";

class App extends Component {
    constructor() {
        super()
        this.state = {
            peoples: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({ peoples: users})});
    }
    render() {
        return (
                <section>
                    <Top searchChange={this.onSearchChange} />
                    <Cardlist peoples={this.state.peoples} />
                </section>
        );
    }
}

export default App;