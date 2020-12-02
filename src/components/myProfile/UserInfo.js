import React from 'react'
import styles from './UserInfo.module.css'

const UserInfo = ({loading, user}) => {

    const intro = "안녕하세요, 개발을 공부중인 김민정입니다. 백엔드 자바.. 열심히 공부중입니다. 지금은 이화동산 커미터스 웹사이트를 사이드 프로젝트로 진행하고 있습니다. 이화 학생들이 학교에서 진행한 프로젝트를 컴퓨터공학과 사이트에 올리고, 학생들이 만든 프로젝트를 저희 사이트 를 통해 알리기도 하면서, 이화인 개발자들의 활동을 앞장서고 싶습니다."

    if(loading){
        <h2>loading</h2>
    }
    return (
        <div className = {styles.container}>
            <div className = {styles.rowBox}>
                <div>
                    <text>자기소개</text>
                    <text className = {styles.text}>{intro}</text>
                </div>
            </div>
            <div className = {styles.rowBox}>
                <div>
                    {console.log(user)}
                    <div>이름</div>
                    <div>이메일</div>
                </div>
            </div>
            
        </div>
    )
}

export default UserInfo;