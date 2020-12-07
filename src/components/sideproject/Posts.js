import React from 'react'
import styles from './Posts.module.css'

const Posts = ({posts, loading}) => {
    
    if(loading){
        return(<h2>loading..</h2>)
    }

    let postsRows = [];
    for(let i =0; i<5; i++){
        postsRows.push(posts.slice(3*i, 3*(i+1)));
    }

    return (
        <div className = {styles.container}>
            <div className = {styles.rowBox}>
                 {postsRows[0].map(post => (
                        <div key = {post.id}className ={styles.post}>
                            <div className = {styles.blackBox}></div>
                            <div className = {styles.info}>카테고리 홍보 by 글쓴이 2020.10.21</div>
                 <div className = {styles.postTitle}>{post.title}</div>
                    </div>
                    ))
                }
            </div>
            <div className = {styles.rowBox}>
                 {postsRows[1].map(post => (
                        <div key = {post.id}className ={styles.post}>
                            <div className = {styles.greenBox}></div>
                            <div className = {styles.info}>카테고리 홍보 by 글쓴이 2020.10.21</div>
                        <div className = {styles.postTitle}>{post.title}</div>
                    </div>
                    ))
                }
            </div>
            <div className = {styles.rowBox}>
                 {postsRows[2].map(post => (
                        <div key = {post.id}className ={styles.post}>
                            <div className = {styles.blackBox}></div>
                            <div className = {styles.info}>카테고리 홍보 by 글쓴이 2020.10.21</div>
                        <div className = {styles.postTitle}>{post.title}</div>
                    </div>
                    ))
                }
            </div>
            <div className = {styles.rowBox}>
                 {postsRows[3].map(post => (
                        <div key = {post.id}className ={styles.post}>
                            <div className = {styles.greenBox}></div>
                            <div className = {styles.info}>카테고리 홍보 by 글쓴이 2020.10.21</div>
                        <div className = {styles.postTitle}>{post.title}</div>
                    </div>
                    ))
                }
            </div>
            <div className = {styles.rowBox}>
                 {postsRows[4].map(post => (
                        <div key = {post.id}className ={styles.post}>
                            <div className = {styles.blackBox}></div>
                            <div className = {styles.info}>카테고리 홍보 by 글쓴이 2020.10.21</div>
                        <div className = {styles.postTitle}>{post.title}</div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Posts;