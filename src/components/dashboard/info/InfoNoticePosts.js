import React from 'react'
import styles from './InfoPosts.module.css'

const InfoNoticePosts = ({ posts, loading }) => {
    if (loading) {
        return <h2>loading..</h2>
    }

    return (
        <div className={styles.containerNotice}>
            <div className={styles.itemContainer}>
                {posts.slice(0, 4)
                    .map(post => (
                        <div key={post.id} className={styles.postbox}>
                            <a href={post.link} target="_blank" rel="noreferrer" >
                                <div className={styles.date}>{post.date}</div>
                                <div className={styles.postTitle}>{post.title}</div>
                            </a>
                        </div>
                    ))}
            </div>
            <div className={styles.itemContainer}>
                {posts.slice(4, 8)
                    .map(post => (
                        <div key={post.id} className={styles.postbox}>
                            <a href={post.link} target="_blank" rel="noreferrer" >
                                <div className={styles.date}>2020.10.01</div>
                                <div className={styles.postTitle}>{post.title}</div>
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default InfoNoticePosts;