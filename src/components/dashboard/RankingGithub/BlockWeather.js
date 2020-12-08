import React from 'react'
import styles from'./BlockWeather.module.css'
import PropTypes from 'prop-types'


const BlockWeather = ({blocks,loading}) => {

  const slicename = (name) => {
    if (name.length >= 6) {
      name.slice(0,5);
      return name;
    }
  }

  if(loading){
    console.log(loading);
    return <h2>loading...</h2>
  }

  return (
      <div className ={styles.scroll}>
      {blocks.map(block => (
        <div key = {block.id} className = {block.id < 4 ? styles.containerYellow : styles.containerGray}>
          <div className = {styles.rank}>{block.id}등</div>
          <div className = {styles.profile} ></div>
          <div className = {styles.usernameText}>{ block.title.length > 6 ? block.title.slice(0,5) : block.title }</div>
          <div className = {styles.pointText}>{block.userID}1000점</div>
        </div>
      ))}
      </div>
  )
} 



/**
const BlockRankingGithub = (props) => {
  const {ranking, username, point, posts, loading} = props;
  const blockclass = ranking < 4 ? styles.containerYellow : styles.containerGray;

  if(loading){
    return <h2>loading...</h2>
  }

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
} */

export default BlockWeather
