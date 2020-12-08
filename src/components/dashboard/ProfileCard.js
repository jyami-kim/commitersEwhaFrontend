import React, {useState} from 'react'
import './ProfileCard.css'
import styles from '../../routes/css/Dashboard.module.css'
import ProfileCardLogged from './ProfileCardLogged'
import axios from 'axios'
import { GOOGLE_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants'


const ProfileCard =() => {


    const getGithub = () => {
        console.log("was clicked");
        window.location.href = {GOOGLE_AUTH_URL}
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
