import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import NotFound from './components/NotFound'
import Ranking from './routes/Ranking'
import SideProject from './routes/SideProject'
import TechRSS from './routes/TechRSS'
import Community from './routes/Community'
import './App.css';
import DashboardContainer from './store/DashboardContainer';
import OAuth2RedirectHandlerContainer from './store/OAuth2RedirectHandlerContainer';
import MyProfileEditContainer from './store/MyProfileEditContainer';
import MyProfileContainer from './store/MyProfileContainer';
import RankingContainer from './store/RankingContainer'
import TechRssContainer from './store/TechRSSContainer'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={DashboardContainer}></Route>
          <Route path="/MyProfile/edit" component={MyProfileEditContainer}></Route>
          <Route path="/MyProfile" component={MyProfileContainer} ></Route>
          <Route path="/Ranking" component={RankingContainer} ></Route>
          <Route path="/SideProject" component={SideProject} ></Route>
          <Route path="/TechRSS" component={TechRssContainer} ></Route>
          <Route path="/Community" component={Community} ></Route>
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandlerContainer} ></Route>
          {/* <Route path="/notification" component={Notification}></Route> */}
          <Route path="/error" component={NotFound}></Route>
          
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
