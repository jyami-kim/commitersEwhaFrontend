import React, { Component } from 'react';
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
import { getCurrentUser } from './api/APIUtils';
import { ACCESS_TOKEN } from './constants';
import './App.css';
import PrivateRoute from './common/PrivateRoute';
import LoadingIndicator from './routes/LoadingIndicator';
import DashboardContainer from './store/DashboardContainer';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     authenticated: false,
  //     currentUser: null,
  //     loading: false,
  //     github: false,
  //     currentGithubUser: null
  //   }

  //   this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
  //   this.handleLogout = this.handleLogout.bind(this);
  // }

  componentDidMount() {
    console.log(localStorage.getItem(ACCESS_TOKEN))
    // this.props.saveSeaon();
    // console.log(this.props);
    // this.loadCurrentlyLoggedInUser();
    
  }

  // loadCurrentlyLoggedInUser() {
  //   this.setState({
  //     loading: true
  //   });

  //   getCurrentUser()
  //     .then(res => {
  //       this.setState({
  //         currentUser: res.response,
  //         authenticated: true,
  //         loading: false
  //       });
  //     }).catch(error => {
  //       this.setState({
  //         loading: false
  //       });
  //     });
  // }

  // handleLogout() {
  //   localStorage.removeItem(ACCESS_TOKEN);
  //   this.setState({
  //     authenticated: false,
  //     currentUser: null
  //   });
  //   console.log("You're safely logged out!");
  // }  

  render() {

    // if (this.state.loading) {
    //   return <LoadingIndicator />
    // }
    
    return (
      <div>
        
        <Switch>
        <DashboardContainer></DashboardContainer>
          {/* <Route exact path="/" component={Dashboard}  ></Route> */}
          <Route path="/MyProfile" component={MyProfile} ></Route>
          <Route path="/Ranking" component={Ranking} ></Route>
          <Route path="/SideProject" component={SideProject} ></Route>
          <Route path="/TechRSS" component={TechRSS} ></Route>
          <Route path="/Community" component={Community} ></Route>
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} ></Route>
          <Route path="/error" component={NotFound}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
