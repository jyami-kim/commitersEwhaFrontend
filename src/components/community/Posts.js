import React from 'react'
import styles from './Posts.module.css'

const Posts = ({loading, posts}) => {
    
    //slice if letters are more than 200 and add '...'
    const getSliced = (letters) =>{
        
        const sliced = letters.slice(0,200) + "...";
        return sliced;
    }

    if(loading){
        return(<h2>loading..</h2>)
    }
    return (
        <div className = {styles.container}>
            {posts.map(post => (
                <div key = {post.id} className ={styles.postBox}>
                    <div className = {styles.infoText}>카테고리 취업 by 글쓴이 at 2020.10.06</div>
                    <div className ={styles.titleText}>{post.title}</div>
                    <div className = {styles.bodyText}>{ post.body.length > 200 ? 
                        getSliced(post.body): post.body }
                    </div>
                    <div className ={styles.itemBox}>comment like</div>
                </div>
            ))}
        </div>
    )
}

export default Posts;