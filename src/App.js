import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component'
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-and-sign-up-page/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentuser: null
    }
  }

  unsubscribe = null

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      this.setState({ currentuser: user });
      console.log(this.state.currentuser);
      
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentuser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignUp} />
        </Switch>
      </div >
    );
  }
}
export default App;
