import React, { Component } from 'react';
import Cardlist from "./components/cardlist";
import Top from "./components/Top";

class App extends Component {
    constructor() {
        super()
        this.state = {
            peoples: [],
            searchField: ''
        }
    }
    handleChange =(e) =>{
        this.setState({ searchField: e.target.value })
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({ peoples: users})});
    }
    render() {
        const {peoples,searchField} = this.state;
        const filteredPeoples = peoples.filter(people =>
            people.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
                <section>
                    <Top
                        searchChange='Search users'
                        handelChange={this.handleChange}
                    />
                    <Cardlist peoples={filteredPeoples} />
                </section>
        );
    }
}

export default App;