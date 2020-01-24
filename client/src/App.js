import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux'
import * as actions from './store/actions'

import './sass/main.scss';
import './assets/fonts/Gilroy-ExtraBold.otf'

import Navigation from './components/Layout/Navigation'
import LandingPage from './pages/Landing';

import FeaturedPage from './pages/Featured';
import TipsPage from './pages/Tips';
import AboutPage from './pages/About';

import ProfilePage from './pages/Profile';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignupPage'

class App extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={LandingPage} />

        <Route path="/featured" component={FeaturedPage} />
        <Route path="/tips" component={TipsPage} />
        <Route path="/about" component={AboutPage} />

        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </div>
    );
  }
}
export default connect(null, actions)(App);
