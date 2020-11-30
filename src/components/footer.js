import React from 'react'
import styles from './Footer.module.css'
import logo from '../assets/logo/logo_winter@3x.png'

//로고 흰색 뽑아달라하기
const Footer = () => {
    return(
        <div className ={styles.container}>
            <div className ={styles.itemBoxLarge}>
                <img src={logo} alt="logo white" className = "logo"/>
                <div>Always for Ewha Developers</div>
                <div className = {styles.copyright}>Copyright © 2020 이화동산 커미터스. All Rights Reserved.</div>
            </div>
            <div className ={styles.itemBox}>
                <div className = { styles.title}>SITE</div>
                <div>이화랭킹</div>
                <div>커뮤니티</div>
                <div>사이드 프로젝트</div>
                <div>테크 RSS</div>
                <div>마이프로필</div>
                
            </div>
            <div className ={styles.itemBox}>
                <div className = { styles.title}>CONTACT</div>
                <div>Developed by</div>
                <div>mor222293@gmail.com</div>
                <div>eunjilee55@gmail.com</div>

                <div>Designed by</div>
                <div>ksohyun17@ewhain.net</div>
            </div>
        </div>
    )
}

export default Footer
