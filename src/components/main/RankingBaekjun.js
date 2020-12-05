import React, {useState, useEffect} from 'react'
import styles from'./RankingBaekjun.module.css'
import axios from 'axios'

const RankingBaekjun = () => {

    const [baekjun, setBaekjun] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const fetchBaekjun = async () => {
            setLoading(true);
            const res = await axios.get('http://49.50.162.81:8080/api/scrap/baekjoon/rank');
            setBaekjun(res.data.response);
            setLoading(false);
        }
    fetchBaekjun(baekjun);
    
    }, []);

    if(loading === true){
        return (
            <h2>loading..</h2>
        )
    }
    return (
     
        <div className = {styles.container}> 
            <div className ={styles.titleText}>EWHA RANKING | 백준</div>
        <div className = {styles.itemBox}>
            <div className = {styles.insideContainerRow}>
                    <div  className = {styles.subText}>이화여자대학교 등수</div>
                    <div className ={styles.textRank}>{baekjun.rank}</div>
            </div>
            <div className = {styles.insideContainer}>
                <div className = {styles.infoBox}>
                    <div className = {styles.subText}>인원</div>
                    <div className = {styles.textNumber}>{baekjun.totalNumber}</div> 
                </div>
                <div className = {styles.infoBoxNoBorder}>
                    <div className = {styles.subText}>맞은문제</div>
                    <div className = {styles.textNumber}>{baekjun.collectNumber}</div> 
                </div>
            </div>
            <div className = {styles.insideContainer}>
                <div className = {styles.infoBox}>
                    <div className = {styles.subText}>제출</div>
                    <div className = {styles.textNumber}>{baekjun.submitNumber}</div> 
                </div>
                <div className = {styles.infoBoxNoBorder}>
                    <div className = {styles.subText}>정답비율</div> 
                    <div className = {styles.textNumber}>{baekjun.rate}</div> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default RankingBaekjun;