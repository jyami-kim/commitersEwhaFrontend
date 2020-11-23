import React from 'react'
import styles from'./BlockRankingGithub.module.css'
import PropTypes from 'prop-types'

const BlockRankingGithub = (props) => {

  const {ranking, username, point} = props;
  const blockclass = ranking < 4 ? styles.containerYellow : styles.containerGray;

  return (
    <div className = {blockclass}>
      <div >{ranking}등</div>
      <div className = {styles.profile} >프로필</div>
      <div className = {styles.usernameText}>{username}</div>
      <div className = {styles.pointText}>{point}점</div>
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
