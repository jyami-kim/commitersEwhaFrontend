import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import MyProfile from './routes/MyProfile'
import Ranking from './routes/Ranking'
import SideProject from './routes/SideProject'
import Main from './routes/Main'
import TechRSS from './routes/TechRSS'
import Community from './routes/Community'
import OAuth2RedirectHandler from './auth/OAuth2RedirectHandler'
import React, { Component } from 'react';
import { getCurrentUser } from './utils/APIUtils';
import { ACCESS_TOKEN } from './constants';
import './App.css';
import PrivateRoute from './common/PrivateRoute';
import LoadingIndicator from './routes/LoadingIndicator';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
      .then(response => {
        console.log(response)
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    console.log("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />
    }
    return (
      <div>
        <Switch>
          <Main authenticated={this.state.authenticated}/>
          <PrivateRoute path="/MyProfile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={MyProfile} />
          <PrivateRoute path="/Ranking" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Ranking} />
          <PrivateRoute path="/SideProject" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={SideProject} />
          <PrivateRoute path="/TechRSS" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={TechRSS} />
          <PrivateRoute path="/Community" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Community} />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
        </Switch>
      </div>
    )
  }
}

export default App;
