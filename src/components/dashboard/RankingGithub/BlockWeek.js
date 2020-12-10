import React from 'react'
import styles from './BlockWeek.module.css'


const BlockWeek = ({blocks,loading}) => {
  
    if(loading){
      console.log(loading);
      return <h2>loading...</h2>
    }
  
    return (
  
      <div className = {styles.container}>
        {blocks.map((block, i) => (
          <div key = {i} className = {styles.containerGray}>
            <div className = {styles.number}>
              <div className = {styles.text}>{i + 1}</div>
            </div>
            <div className = { styles.profile } style={{backgroundImage: "url(" + block.profile + ")"}} ></div>
            <div className = {styles.itemBox}>
              <div className = {styles.text}>{ block.authorId.length > 6 ? block.authorId.slice(0,5) : block.authorId }</div>
            <div className = {styles.pointText}>{block.score}점</div>
            </div>
            
          </div>
        ))}
      </div>
    )
  } 

export default BlockWeek;