import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import MyProfile from './routes/MyProfile'
import NotFound from './components/NotFound'
import Ranking from './routes/Ranking'
import SideProject from './routes/SideProject'
import Dashboard from './routes/Dashboard'
import Welcome from './routes/Welcome'
import TechRSS from './routes/TechRSS'
import Community from './routes/Community'
import OAuth2RedirectHandler from './auth/OAuth2RedirectHandler'
import React, { Component } from 'react';
import { getCurrentUser } from './api/APIUtils';
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
      loading: false,
      github: false,
      currentGithubUser : null
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
      .then(res => {
        console.log(res)
        this.setState({
          currentUser: res.response,
          authenticated: true,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        });
        console.log(error);
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
    console.log(localStorage.getItem(ACCESS_TOKEN))
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />
    }
    return (
      <div>
        <Switch>
          <PrivateRoute path="/Dashboard" component={Dashboard} onLogout={this.handleLogout} authenticated={this.state.authenticated} currentUser={this.state.currentUser} />
          <Route exact path="/" component={Welcome} authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
          <PrivateRoute path="/MyProfile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={MyProfile} />
          <PrivateRoute path="/Ranking" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Ranking} />
          <PrivateRoute path="/SideProject" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={SideProject} />
          <PrivateRoute path="/TechRSS" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={TechRSS} />
          <PrivateRoute path="/Community" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Community} />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} ></Route>
          <Route path="/error" component={NotFound}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
