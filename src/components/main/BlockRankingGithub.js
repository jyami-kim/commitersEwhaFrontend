import React from 'react'
import './BlockRankingGithub.css'
import PropTypes from 'prop-types'

//id로 색깔 

const BlockRankingGithub = (props) => {
  const {ranking, username, point} = props;

  return (
    <div className = "github-ranking-block">
      <div>{ranking}등</div>
      <div>프로필</div>
      <div>{username}</div>
      <div>{point}점</div>
    </div>
  )
}

BlockRankingGithub.defaultProps ={
  ranking : 1,
  username : "whayun",
  point : 0
}

//proptypes 에 이미지 추가해야함
BlockRankingGithub.propTypes ={
  ranking : PropTypes.number,
  username : PropTypes.string,
  point : PropTypes.number,
}

export default BlockRankingGithub
