import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import NotFound from './components/NotFound'
import './App.css';
import DashboardContainer from './store/DashboardContainer';
import OAuth2RedirectHandlerContainer from './store/OAuth2RedirectHandlerContainer';
import MyProfileEditContainer from './store/MyProfileEditContainer';
import MyProfileContainer from './store/MyProfileContainer';
import RankingContainer from './store/RankingContainer'
import TechRssContainer from './store/TechRSSContainer'
import SideProjectContainer from './store/SideProjectContainer';
import SideProjectCreateContainer from './store/SideProjectCreateContainer';
import SideProjectDetailContainer from './store/SideProjectDetailContainer';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={DashboardContainer}></Route>
          <Route exact path="/MyProfile/edit" component={MyProfileEditContainer}></Route>
          <Route exact path="/MyProfile" component={MyProfileContainer} ></Route>
          <Route exact path="/Ranking" component={RankingContainer} ></Route>
          <Route exact path="/SideProject/post/:postId" component={SideProjectDetailContainer}></Route>
          <Route exact path="/SideProject/form" component={SideProjectCreateContainer} ></Route>
          <Route exact path="/SideProject" component={SideProjectContainer} ></Route>
          <Route exact path="/TechRSS" component={TechRssContainer} ></Route>
          {/* <Route path="/Community" component={Community} ></Route> */}
          <Route exact path="/oauth2/redirect" component={OAuth2RedirectHandlerContainer} ></Route>
          {/* <Route path="/notification" component={Notification}></Route> */}
          <Route exact path="/error" component={NotFound}></Route>
          
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
