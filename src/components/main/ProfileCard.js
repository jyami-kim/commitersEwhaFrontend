import React from 'react'
import './ProfileCard.css'
import styles from '../../routes/css/Main.module.css'
import LoginGithub from 'react-login-github'

const ProfileCard =({getLogState}) => {
    const CLIENT_ID = "de41637d8bc3a1cdd9bd";

    const onSuccess = (response) => {
        console.log(response);
        getLogState(true);
        
    } 
    const onFailure = (response) =>{
        console.log(response);
        alert("fail!");
        getLogState(false);
    }
    const getGithub = () => {
        console.log("was clicked");
        getLogState(true);
        return(
            <LoginGithub clientId= {CLIENT_ID} onSuccess={onSuccess}
            onFailure={onFailure}/>
        )
    }    
    

    return(
        <div className = "profileCard-container">
            <div className = {styles.mainSubtitleText}>MY PROFILE</div>
            <div className ="profile-button-container">
                <button onClick ={getGithub} className = "git-button"> 
                   <div className ="button-text">Github 연동하기</div>
                </button>
            </div>
            <div className = "profile-text"> Github 프로필을 연동하기 위해 로그인을 부탁드립니다.</div>
        </div>
    )
}



export default ProfileCard
