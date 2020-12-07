import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './routes/Main'
import MyProfile from './routes/MyProfile'
import Ranking from './routes/Ranking'
import SideProject from './routes/SideProject'
import TechRSS from './routes/TechRSS'
import Community from './routes/Community'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path = "/" exact = {true} component ={Main}/>
        <Route path = "/oauth2/redirect" component ={Main}/>
        <Route path = "/MyProfile" component ={MyProfile}/>
        <Route path = "/Ranking" component ={Ranking}/>
        <Route path = "/SideProject" component ={SideProject}/>
        <Route path = "/TechRSS" component ={TechRSS}/> 
        <Route path = "/Community" component ={Community}/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
