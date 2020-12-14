import React from 'react'
import styles from './Footer.module.css'
import logo from '../assets/logo/white_logo@3x.png'

//로고 흰색 뽑아달라하기
const Footer = () => {
    return(
        <div className ={styles.container}>
            <div className ={styles.itemBoxLarge}>
                <img src={logo} alt="logo white" className = "logo"/>
                <div className = {styles.text}>Always for Ewha Developers</div>
                <div className = {styles.copyright}>Copyright © 2020 이화동산 커미터스. All Rights Reserved.</div>
            </div>
            <div className ={styles.itemBox}>
                <div className = { styles.title}>SITE</div>
                <div className = {styles.text}>이화랭킹</div>
                <div className = {styles.text}>커뮤니티</div>
                <div className = {styles.text}>사이드 프로젝트</div>
                <div className = {styles.text}>테크 RSS</div>
                <div className = {styles.text}>마이프로필</div>
                
            </div>
            <div className ={styles.itemBox}>
                <div className = { styles.title}>CONTACT</div>
                <div className = {styles.textSmall}>Developed by</div>
                <div className = {styles.text}>mor222293@gmail.com</div>
                <div className = {styles.text}>eunjilee55@gmail.com</div>

                <div className = {styles.textSmall}>Designed by</div>
                <div className = {styles.text}>ksohyun17@ewhain.net</div>
            </div>
        </div>
    )
}

export default Footer
