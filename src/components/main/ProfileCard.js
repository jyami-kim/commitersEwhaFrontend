import React, {useState} from 'react'
import './ProfileCard.css'
import styles from '../../routes/css/Main.module.css'
import ProfileCardLogged from './ProfileCardLogged'
import axios from 'axios'


const ProfileCard =() => {

    const CALLBACK_URI = 'http://localhost:3000/callback'

    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState([]);
    const [tokendata, setData] =useState([]);
    const [user, setUser] = useState("");
    const CLIENT_SECRET = "6168825ba305ffaba05903c1ad9ad9f3d1e4229a";
    const CLIENT_ID = "de41637d8bc3a1cdd9bd";

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
            console.log("inside fetchdata");
            console.log(tokendata);

        }
        /*
        const fetchUser = async() =>{
            const res = await axios.get('https://api.github.com/user',
            {
                headers: {
                  Authorization: `token ${tokendata}`,
                },
            });
            setUser(res.data)
        }*/

    const getGithub = (e) => {
        console.log("was clicked");
        //getLogState(true);
        e.preventDefault();
        window.location.href=`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}`;
        
        fetchData();
    }    
    
    return(
        <div className = "profileCard-container">
            <div className = {styles.mainSubtitleText}>MY PROFILE</div>
            <div className ="profile-button-container">
                <button type = "button" onClick ={getGithub} className = "git-button"> 
                   <div className ="button-text">Github 연동하기</div>
                </button>
            </div>
            <div className = "profile-text"> Github 프로필을 연동하기 위해 로그인을 부탁드립니다.</div>
        </div>
    )
}



export default ProfileCard
