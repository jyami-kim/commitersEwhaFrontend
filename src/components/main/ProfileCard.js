import React from 'react'
import './ProfileCard.css'

const ProfileCard =() => {
    return(
        <div className = "profileCard-container">
            <div className = "main-subtitle-text">MY PROFILE</div>
            <div className ="profile-button-container">
                <button onClick ={getGithub} className = "git-button"> 
                   <div className ="button-text">Github 연동하기</div>
                </button>
            </div>
            <div className = "profile-text"> Github 프로필을 연동하기 위해 로그인을 부탁드립니다.</div>
        </div>
    )
}

const getGithub = () => {
    console.log("깃허브 연동");
}


export default ProfileCard
