import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super();

    this.state = {
      userArray: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').
      then(res => res.json())
      .then(users => {
        this.setState({ userArray: users })
      });

  }

  handleChange = event =>{
    this.setState({ searchField: event.target.value })
  }

  
  render() {
    const { userArray, searchField } = this.state;

    const filteredUserArray = userArray.filter(userList =>
      userList.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>React Basics</h1>
        <SearchBox placeholder={'Search Users'} handleChange={this.handleChange} />
        <CardList users={filteredUserArray} />
      </div>
    );
  }
}

export default App;
