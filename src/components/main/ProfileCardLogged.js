import React from 'react'
import './ProfileCard.css'

const ProfileCardLogged = () => {
    return (
        <div className = "profileCard-container">
            <div className = "profile-title-logged">MY PROFILE</div>
            <div className = "username-profile">Jyami</div>
            <div className = "info-detail-profile">Backend Developer</div>
            <div className = "profile-rowContainer"> 
                <div>
                    <div>EWHA RANKING 12등/1020점</div>
                    <div className = "profile-rowContainer-with-border">
                        <div className = "profile-box-with-border">
                            <div>총 커밋</div>
                            <div>210</div>
                        </div>
                        <div className = "profile-box-no-border">
                            <div>연속 커밋</div>
                            <div>23</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>커밋동산</div>
                    <div>273 contributions last year</div>
                    <div className = "profile-graybox"></div>
                </div>
                
            </div>
        </div>
    )
}

export default ProfileCardLogged
