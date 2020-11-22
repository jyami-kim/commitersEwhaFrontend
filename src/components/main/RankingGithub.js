import React from 'react'
import './RankingGithub.css'
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

const RankingGithub = () => {
    return (
        <div className = "ranking-github-container">
            <div className = "main-subtitle-text">EWHA RANKING | Github</div>
            <div className = "ranking-github-text">{SEASON_TITLE}</div>
            <div className = "ranking-github-blocks-container">
            {showBlock}
            </div>
        </div>
    )
}
/*
const showlock = () => {
    console.log(typeof(dummydata));
    console.log(dummydata);
    console.log("key" + Object.keys(dummydata));
    const num = 0;
    for (let i =0; i < Object.keys(dummydata).length; i++){
        let item = dummydata[i]
        console.log(item);
    }
    return num;
}*/

const showBlock = dummydata.map((item, index) => {
    return(
        <BlockRankingGithub key = {index} 
        ranking = {item.rank} 
        username ={item.username}
        point = {item.point} />
    )
});

export default RankingGithub



