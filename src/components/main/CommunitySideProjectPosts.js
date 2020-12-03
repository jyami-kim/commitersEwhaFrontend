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
                        <div className = {styles.subtitle}>홍보</div>
                        <div key = {post.id} className ={styles.post}>
                            <div className = {styles.preview}></div>
                            <div className = {styles.infoBox}>
                                <div className ={styles.postName}>{post.name}</div>
                                <div className ={styles.postDetail}>{post.email} / 2020.10.11</div>
                                <div className ={styles.rowBox}>comment like</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.postContainerBottom}>
                {posts_bottom.map(post => (
                    <div className = {styles.itemBox}>
                        <div className = {styles.subtitle}>홍보</div>
                        <div key = {post.id} className ={styles.post}>
                            <div className = {styles.preview}></div>
                            <div className = {styles.infoBox}>
                                <div className ={styles.postName}>{post.name}</div>
                                <div className ={styles.postDetail}>{post.email} / 2020.10.11</div>
                                <div className ={styles.rowBox}>comment like</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommunitySideProjectPosts;