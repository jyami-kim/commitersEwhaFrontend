import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Main from './routes/Main'
import MyProfile from './routes/MyProfile'
import Ranking from './routes/Ranking'
import SideProject from './routes/SideProject'
import TechRSS from './routes/TechRSS'
import Community from './routes/Community'
import Auth2RedirectHandler from './auth/Auth2RedirectHandler'
import React, { Component } from 'react';
import { getCurrentUser } from './utils/APIUtils';
import { ACCESS_TOKEN } from './constants';
import './App.css';
import Welcome from './routes/Welcome';
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
    console.log("this.state.authenticated : " + this.state.authenticated)
    if (this.state.loading) {
      console.log("loading");
      return <LoadingIndicator />
    }

    console.log("this.state.authenticated : " + this.state.authenticated)
    return (
      <div>
        <Route exact path="/" component={Welcome} />
        <Switch>
          <PrivateRoute path="/dashboard" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Main} />
          <PrivateRoute path="/MyProfile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={MyProfile} />
          <PrivateRoute path="/Ranking" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Ranking} />
          <PrivateRoute path="/SideProject" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={SideProject} />
          <PrivateRoute path="/TechRSS" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={TechRSS} />
          <PrivateRoute path="/Community" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Community} />
          <Route path="/oauth2/redirect" component={Auth2RedirectHandler} />
        </Switch>
      </div>
    )
  }
}

export default App;
