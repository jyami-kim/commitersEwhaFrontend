import React from 'react'
import styles from './CommunitySideProjectPosts.module.css'

const CommunitySideProjectPosts = ({posts, loading}) => {

    const posts_top = posts.slice(0,2);
    const posts_bottom = posts.slice(2,4);
    

    if(loading){
        return <h2>loading</h2>
    }
    return (
        <div className = {styles.container}>
            <div className={styles.postContainer}>
                {posts_top.map(post => (
                    <div className = {styles.itemBox}>
                        <text>홍보</text>
                        <div key = {post.id} className ={styles.post}>
                            <div className = {styles.preview}></div>
                            <div className = {styles.infoBox}>
                                <text>{post.name}</text>
                                <text>{post.email}</text>
                                <div>comment like</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.postContainer}>
                {posts_bottom.map(post => (
                    <div className = {styles.itemBox}>
                        <text>홍보</text>
                        <div key = {post.id} className ={styles.post}>
                            <div className = {styles.preview}></div>
                            <div className = {styles.infoBox}>
                                <text>{post.name}</text>
                                <text>{post.email}</text>
                                <div>comment like</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommunitySideProjectPosts;