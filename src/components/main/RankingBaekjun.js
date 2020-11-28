import React from 'react'
import styles from'./RankingBaekjun.module.css'

const RankingBaekjun = () => {
    return (
        <div> 
            <div className ={styles.titleText}>EWHA RANKING | 백준</div>
        <div className = {styles.container}>
            <div className = {styles.insideContainerRow}>
                <div className = {styles.infoBoxNoBorder}>
                    <h3>이화여자대학교 등수</h3>
                </div>
                <div className = {styles.infoBoxNoBorder}>
                    <text className ={styles.textRank}>69</text>
                </div>
            </div>
            <div className = {styles.insideContainer}>
                <div className = {styles.infoBox}>
                    <text>인원</text>
                    <text className = {styles.textNumber}>210</text> 
                </div>
                <div className = {styles.infoBoxNoBorder}>
                    <text>맞은문제</text>
                    <text className = {styles.textNumber}>2100</text> 
                </div>
            </div>
            <div className = {styles.insideContainer}>
                <div className = {styles.infoBox}>
                    <text>제출</text>
                    <text className = {styles.textNumber}>210</text> 
                </div>
                <div className = {styles.infoBoxNoBorder}>
                    <text>정답비율</text> 
                    <text className = {styles.textNumber}>10%</text> 
                </div>
            </div>
        </div>
        </div>
    )
}

export default RankingBaekjun;