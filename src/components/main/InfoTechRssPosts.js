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
                    <div className ={styles.company}>회사이름</div>
                    <div className ={styles.textTitle}>{post.title.length > 30 ? post.title.slice(0,30) : post.title}</div>
                    <div className ={styles.date}>2020.10.21</div>
                </div>
            ))}
        </div>
    )
}



export default InfoTechRssPosts;