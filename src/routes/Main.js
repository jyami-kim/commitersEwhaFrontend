import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileCard from '../components/main/ProfileCard'
import RankingGithub from '../components/main/RankingGithub'
import './css/Main.css'
import mainText from '.././assets/images/main_text_winter@3x.png'
import logo from '../assets/logo/logo_winter@3x.png'

const Main = () => {
    
    const INTRO_MESSAGE = "이화여자대학교 개발자를 위한 커밋 이화동산 커뮤니티입니다.\n꾸준한 커밋으로 겨울 정원사 뱃지를 취득하세요!";

        return (
            <div>
                <Header className="main-header"></Header>
            <div className = "main-container">
               <img src={logo} alt="logo winter" className = "logo"/>
               <div className = "main-body">
                   <Link to = "/">
                        <img src={mainText} alt="always for ewha developers" className = "main-text-image"/>
                   </Link>
                   <div className = "intro-message">
                        <NewlineText text = {INTRO_MESSAGE}/>
                   </div>
                   <ProfileCard />
                   <RankingGithub />
                </div>
               <Footer className="main-footer"></Footer>
            </div>
            </div>
        )
}


function NewlineText(props) {
    const text = props.text;
    //const styles = {lineHeight: "1.71", marginLeft: "9.5em" }
    const newText = text.split('\n').map((str, index) =><span key = {index} className ="intro-message-text">{str}<br/></span>);
    return newText;
  }

export default Main
