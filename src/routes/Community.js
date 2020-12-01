import React from 'react'
import Header from '../components/Header'
import styles from './css/Community.module.css'

const Community = () => {
    return (
        <div className = "main-container">
            <Header pageName = "Community"></Header>
            <div className ={styles.titleBox}>
                <h1>Community</h1>
                <text className = {styles.title}>커뮤니티</text>
                <div>검색어를 입력해주세요</div>
                <div className ={styles.nav}>
                    <div>전체</div>
                    <div>잡담</div>
                    <div>취업</div>
                    <div>홍보</div>
                    <div>후기</div>
                </div>
            </div>
            <div className ={styles.postBox}>
                <div>Posts</div>
            </div>
        </div>
    )
}


export default Community
