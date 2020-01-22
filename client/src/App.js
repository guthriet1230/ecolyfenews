import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux'
import * as actions from './store/actions'

import './sass/main.scss';
import './assets/fonts/Gilroy-ExtraBold.otf'

import Navigation from './components/Layout/Navigation'
import LandingPage from './pages/Landing';
import ProfilePage from './pages/Profile';
import LoginPage from './pages/Login';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={LandingPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}
export default connect(null, actions)(App);
