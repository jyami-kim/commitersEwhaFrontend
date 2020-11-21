import React from 'react'
import './RankingGithub.css'
import BlockRankingGithub from './BlockRankingGithub'
const RankingGithub = () => {
    return (
        <div className = "ranking-github-container">
            <div className = "main-subtitle-text">EWHA RANKING | Github</div>
            <div className = "ranking-github-text">{title_season}</div>
            <div className = "ranking-github-blocks-container">
                <BlockRankingGithub />
                <BlockRankingGithub />
                <BlockRankingGithub />
            </div>
        </div>
    )
}

//나중에 계절 파라미터로 받을 것
const title_season = "가을 정원사 랭킹 (9월-11월)"

export default RankingGithub
