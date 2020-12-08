import React, {useState, useEffect} from 'react'
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
import {GOOGLE_AUTH_URL } from '../constants'

import winterText from '../assets/images/main_text_winter@3x.png'
import fallText from '../assets/images/main_text_fall@3x.png'
import summerText from '../assets/images/main_text_summer@3x.png'
import springText from '../assets/images/main_text_fall@3x.png'

const Main = (props) => {

    const [season, setSeason] = useState('');

    useEffect(() =>{
        const fetchSeason = async () =>{
            const today = await new Date();
            let month = today.getMonth()+1;
            if(month = 12 || month <= 2){
                setSeason("겨울");
            }else if (month >= 3 && month <=5){
                setSeason("봄");
            }else if(month >=6 && month <=8){
                setSeason("여름");
            }else{
                setSeason("가을");
            }
        }
        fetchSeason();
    },[]);

    //리다이랙트 되면 logged, 아닐 경우 profilecard
    const setProfileCard = () => {
        if(window.location.pathname == {GOOGLE_AUTH_URL}){
            return <ProfileCardLogged/>
        }
        return <ProfileCard />
    }

    const INTRO_MESSAGE = `이화여자대학교 개발자를 위한 커밋 이화동산 커뮤니티입니다.\n꾸준한 커밋으로 ${season} 정원사 뱃지를 취득하세요!`;

        return (
            <div className = "main-container">
                <Header season = {season}></Header>
                <div className = {styles.mainBody}>
                    <Link to = "/">
                            <img src={setImage(season)} alt="always for ewha developers" className = {styles.mainTextImage}/>
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
    const newText = text.split('\n').map((str, index) =><span key = {index} className ="intro-message-text">{str}<br/></span>);
    return newText;
  }

const setImage =(season) => {
    let image  = winterText;
    if(season === "가을") {image = fallText}
    else if (season === "여름"){image = summerText}
    else if(season === "봄"){image = springText}
 
  return image   
}

export default Main
