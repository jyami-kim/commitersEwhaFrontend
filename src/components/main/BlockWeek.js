import React from 'react'
import styles from './BlockWeek.module.css'


const BlockWeek = ({blocks,loading}) => {
  
    if(loading){
      console.log(loading);
      return <h2>loading...</h2>
    }
  
    return (
  
      <div className = {styles.container}>
        {blocks.map(block => (
          <div key = {block.id} className = {styles.containerGray}>
            <div className = {styles.number}>
              <div className = {styles.text}>{block.id}</div>
            </div>
            <div className = {styles.profile} ></div>
            <div className = {styles.itemBox}>
              <div className = {styles.text}>{ block.title.length > 6 ? block.title.slice(0,5) : block.title }</div>
              <div className = {styles.pointText}>230점</div>
            </div>
            
          </div>
        ))}
      </div>
    )
  } 

export default BlockWeek;