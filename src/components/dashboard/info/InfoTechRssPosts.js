import React from 'react'
import styles from './InfoTechRssPosts.module.css'

const InfoTechRssPosts = ({posts, loading}) => {
    
    if(loading){
        return (<h2>loading</h2>)
    }
    return (
        <div className = {styles.container}>
            {posts.map(post => (
                <div key ={post.id} className = {styles.postCard}>
                    <a href={post.link} target="_blank" rel="noreferrer" >
                    <div style = {{backgroundColor : post.color}} className ={styles.company}>{post.company}</div>
                    <div className ={styles.textTitle}>{post.title.length > 70 ? post.title.slice(0,30) : post.title}</div>
                    <div style = {{color : post.color}} className ={styles.date}>{post.date}</div>
                    </a>
                </div>
            ))}
        </div>
    )
}





export default InfoTechRssPosts;