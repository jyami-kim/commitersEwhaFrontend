import React from 'react'
import styles from './RankingGithub.module.css'
import BlockRankingGithub from './BlockRankingGithub'

const dummydata = [
    {
        "rank" : 1,
        "username" : "jane",
        "point" : 1000
    },
    {
        "rank": 2,
        "username": "Latisha",
        "point": 914
    },
    {
        "rank": 3,
        "username": "Elka",
        "point": 931
    },
    {
        "rank": 4,
        "username": "Perry",
        "point": 990
    },
    {
        "rank": 5,
        "username": "Elfreda",
        "point": 961
    }
]

//나중에 계절 파라미터로 받을 것
const SEASON_TITLE = "가을 정원사 랭킹 (9월-11월)"
const WEEK_TITLE = "10월 2주차 (2020.10.05 ~2020.10.11)"

const RankingGithub = () => {
    return (
        <div className = {styles.rankingGithubContainer}>
            <div className = {styles.subtitleText}>EWHA RANKING | Github
                <div className = {styles.rankingGithubText}>{SEASON_TITLE}</div>
            </div>
            <div className = {styles.blocksContainer}>
            {showBlock}
            </div>
            <div className = {styles.rankingGithubText}>{WEEK_TITLE}</div>
            <div className = {styles.blocksContainer}>
            {showBlock}
            </div>
        </div>
    )
}

const showBlock = dummydata.map((item, index) => {
    return(
        <BlockRankingGithub key = {index} 
        ranking = {item.rank} 
        username ={item.username}
        point = {item.point} />
    )
});

export default RankingGithub



