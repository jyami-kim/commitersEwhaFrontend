import React from 'react'
import styles from'./RankingBaekjun.module.css'

const RankingBaekjun = () => {
    return (
        <div className = {styles.container}> 
            <div className ={styles.titleText}>EWHA RANKING | 백준</div>
        <div className = {styles.itemBox}>
            <div className = {styles.insideContainerRow}>
                    <div  className = {styles.subText}>이화여자대학교 등수</div>
                    <div className ={styles.textRank}>69</div>
            </div>
            <div className = {styles.insideContainer}>
                <div className = {styles.infoBox}>
                    <div className = {styles.subText}>인원</div>
                    <div className = {styles.textNumber}>210</div> 
                </div>
                <div className = {styles.infoBoxNoBorder}>
                    <div className = {styles.subText}>맞은문제</div>
                    <div className = {styles.textNumber}>2100</div> 
                </div>
            </div>
            <div className = {styles.insideContainer}>
                <div className = {styles.infoBox}>
                    <div className = {styles.subText}>제출</div>
                    <div className = {styles.textNumber}>210</div> 
                </div>
                <div className = {styles.infoBoxNoBorder}>
                    <div className = {styles.subText}>정답비율</div> 
                    <div className = {styles.textNumber}>10%</div> 
                </div>
            </div>
        </div>
        </div>
    )
}

export default RankingBaekjun;