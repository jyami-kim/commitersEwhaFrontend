import React, {useState} from 'react'
import './ProfileCard.css'
import styles from '../../routes/css/Main.module.css'
import ProfileCardLogged from './ProfileCardLogged'
import axios from 'axios'


const ProfileCard =() => {

    const CALLBACK_URI = 'http://localhost:3000/callback'
    const CLIENT_ID = "de41637d8bc3a1cdd9bd";

    const getGithub = () => {
        console.log("was clicked");
        //getLogState(true);
        //xe.preventDefault();
        window.location.href=`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}`;
        
        //fetchData();
        //fetchToken();
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
