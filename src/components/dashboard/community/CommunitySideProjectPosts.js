import React from 'react'
import styles from './CommunitySideProjectPosts.module.css'
import commentIcon from '../../../assets/icon/heartcomment/icon_comment_green@3x.png'
import seekIcon from '../../../assets/icon/heartcomment/icon_seek@3x.png'
import { Link } from "react-router-dom";

const CommunitySideProjectPosts = ({ posts, loading }) => {


    if (loading) {
        return <h2>loading</h2>
    }



    function dateTo(date) {
        var date_input = new Date(date);
        var day = date_input.getDate();
        var month = date_input.getMonth() + 1;
        var year = date_input.getFullYear();
        return year + "-" + month + "-" + day;
    }

    return (
        <div className={styles.container}>
            {posts && posts.map((postRow, i) => {
                const component = postRow.map((post, i) => {
                    return (
                        <div className={styles.itemBox}>
                            <Link to= {"/SideProject/post/" + post.postId} >
                            <div className={styles.subtitle}>{post.projectPostCategory === 'JOB' ? '구인' : '홍보'}</div>
                            <div key={post.id} className={styles.post}>
                                {post.image ? <div className={styles.preview} 
                                style={{backgroundImage: "url(" + post.image + ")"}}></div> : <div className={styles.preview}></div>}
                                <div className={styles.infoBox}>
                                    <div className={styles.postName}>{post.title}</div>
                                    <div className={styles.postDetail}>{post.userName} / {dateTo(post.createdDate)}</div>
                                    <div className={styles.rowBox}>
                                        <img src={commentIcon} alt="comment" className={styles.icon} />
                                        <div>{post.projectPostLikeSize}</div>
                                        <img src={seekIcon} alt="heart" style={{ marginLeft: '0.75rem' }} className={styles.icon} />
                                        <div>{post.hit}</div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>)
                })
                return (
                    <div className={styles.postContainer}>
                        {component}
                    </div>
                )
            })}
        </div>
    )
}

export default CommunitySideProjectPosts;