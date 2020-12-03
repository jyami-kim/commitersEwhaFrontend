import React from 'react'
import styles from './InfoPosts.module.css'

const InfoJobPosts = ({posts, loading}) => {
    if (loading){
        return <h2>loading..</h2>
    }
  
    return (
            <div className={styles.containerJob}>
                {posts.slice(0,3)
                .map(post =>(
                    <div key = {post.id} className = {styles.postboxJob}>
                        <div className = {styles.date}>2020.10.01</div>
                        <div className ={styles.postTitle}>{post.title}</div>
                    </div>
                ))}
            </div>
    )
}

export default InfoJobPosts;