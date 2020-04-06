import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userArray: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').
      then(res => res.json())
      .then(users => {
        this.setState({ userArray: users })
      });

  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.userArray.map(userName => (
            <h1 key={userName.id}>{userName.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
