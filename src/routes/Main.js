import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileCard from '../components/main/ProfileCard'
import ProfileCardLogged from '../components/main/ProfileCardLogged'
import RankingGithub from '../components/main/RankingGithub/RankingGithub'
import RankingBaekjun from '../components/main/RankingBaekjun.js'
import CommunitySpace from '../components/main/community/CommunitySpace.js'
import CommunitySideProject from '../components/main/community/CommunitySideProject.js'
import InfoTechRss from '../components/main/info/InfoTechRss'
import InfoNotice from '../components/main/info/InfoNotice'
import styles from './css/Main.module.css'
import mainText from '.././assets/images/main_text_winter@3x.png'
import {GOOGLE_AUTH_URL } from '../constants'
 


const Main = () => {
    const CLIENT_ID = "de41637d8bc3a1cdd9bd";

    const setProfileCard = () => {
        if(window.location.pathname == {GOOGLE_AUTH_URL}){
            return <ProfileCardLogged/>
        }
        return <ProfileCard />
    }
    const INTRO_MESSAGE = "이화여자대학교 개발자를 위한 커밋 이화동산 커뮤니티입니다.\n꾸준한 커밋으로 겨울 정원사 뱃지를 취득하세요!";

        return (
            <div className = "main-container">
                <Header></Header>
                <div className = {styles.mainBody}>
                    <Link to = "/">
                            <img src={mainText} alt="always for ewha developers" className = {styles.mainTextImage}/>
                    </Link>
                    <div className = {styles.introMessage}>
                            <NewlineText text = {INTRO_MESSAGE}/>
                    </div>
                        {setProfileCard()}
                        
                        <RankingGithub />
                        <RankingBaekjun />
                        <CommunitySpace />
                        <CommunitySideProject />
                        <InfoTechRss />
                        <InfoNotice />
                    </div>
                <Footer className={styles.mainFooter}></Footer>
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
