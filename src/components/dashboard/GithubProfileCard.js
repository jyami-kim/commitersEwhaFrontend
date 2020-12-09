import React, { Component } from 'react'
import './ProfileCard.css'

export class GithubProfileCard extends Component {
    render() {
        return (
            <div className="profileCard-container">
                <div className="profile-title-logged">MY PROFILE</div>
                <div className="username-profile">Jyami</div>
                <div className="info-detail-profile">Backend Developer</div>
                <div className="profile-rowContainer">
                    <div className="itembox-profile">
                        <div className="subtitle-profile">EWHA RANKING 12등/1020점</div>
                        <div className="profile-rowContainer-with-border">
                            <div className="profile-box-with-border">
                                <div className="commit-profile">총 커밋</div>
                                <div className="number-profile">210</div>
                            </div>
                            <div className="profile-box-no-border">
                                <div className="commit-profile">연속 커밋</div>
                                <div className="number-profile">23</div>
                            </div>
                        </div>
                    </div>

                    <div className="itembox2-profile">
                        <div className="subtitle-profile">커밋동산</div>
                        <div className="contribution-profile">273 contributions last year</div>
                        <div className="profile-graybox"></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default GithubProfileCard
