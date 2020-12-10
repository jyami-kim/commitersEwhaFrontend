import React, { Component } from 'react'
import './ProfileCard.css'
import styles from '../../routes/css/Dashboard.module.css'
import { GITHUB_AUTH_URL } from '../../constants';

export class GithubLoginCard extends Component {

    render() {
        return (
            <div className="profileCard-container">
                <div className={styles.mainSubtitleText}>MY PROFILE</div>
                <div className="profile-button-container">
                    <a href={GITHUB_AUTH_URL}>
                        <div type="button" className="git-button">

                            <div className="button-text">Github 연동하기</div>
                        </div>
                    </a>
                </div>
                <div className="profile-text"> Github 프로필을 연동하기 위해 로그인을 부탁드립니다.</div>
            </div>
        )
    }
}



export default GithubLoginCard
