import React from 'react'
import styles from './BlockWeek.module.css'


const BlockWeek = ({blocks,loading}) => {

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
  
      <div className = {styles.container}>
        {blocks.map(block => (
          <div key = {block.id} className = {styles.containerGray}>
            <div>{block.id}</div>
            <div className = {styles.profile} >프로필</div>
            <div className = {styles.usernameText}>{ block.title.length > 6 ? block.title.slice(0,5) : block.title }</div>
            <div className = {styles.pointText}>{block.userID}점수</div>
          </div>
        ))}
      </div>
    )
  } 

export default BlockWeek;