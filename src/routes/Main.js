import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileCard from '../components/main/ProfileCard'
import ProfileCardLogged from '../components/main/ProfileCardLogged'
import RankingGithub from '../components/main/RankingGithub'
import RankingBaekjun from '../components/main/RankingBaekjun.js'
import CommunitySpace from '../components/main/CommunitySpace.js'
import CommunitySideProject from '../components/main/CommunitySideProject.js'
import InfoTechRss from '../components/main/InfoTechRss'
import InfoNotice from '../components/main/InfoNotice'
import styles from './css/Main.module.css'
import mainText from '.././assets/images/main_text_winter@3x.png'
import axios from 'axios'
 


const Main = () => {
    const CLIENT_ID = "de41637d8bc3a1cdd9bd";
    /* 
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState([]);
    const [tokendata, setData] =useState([]);
    const [user, setUser] = useState("");
    const CLIENT_SECRET = "6168825ba305ffaba05903c1ad9ad9f3d1e4229a";
    const CLIENT_ID = "de41637d8bc3a1cdd9bd";

    useEffect(() =>{
        const fetchData = async () =>{
            setLoading(true);
            const req = await axios.get('https://github.com/login/oauth/authorize',{
                CLIENT_ID
            });
            console.log("req is");
            console.log(req);
            setCode(req.code);
            console.log(code);
            const res = await axios.post('https://github.com/login/oauth/access_token',
                {
                    code,
                    CLIENT_ID, // SAFU application의 정보
                    CLIENT_SECRET, // SAFU application의 정보
                },
                {
                    headers: {
                        accept: 'application/json',
                      },
                }
            )
            const token = res.data.access_token;
            setData(tokendata);
            setLoading(false);
            console.log(tokendata);
        }
        const fetchUser = async() =>{
            const res = await axios.get('https://api.github.com/user',
            {
                headers: {
                  Authorization: `token ${tokendata}`,
                },
            });
            setUser(res.data)
            
        }
        fetchData();
        //fetchUser();
        console.log(tokendata);
        console.log("user is"+ user);
    },[])*/

    const setProfileCard = () => {
        if(window.location.pathname == "/callback"){
            return <ProfileCardLogged CLIENT_ID = {CLIENT_ID} />
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
