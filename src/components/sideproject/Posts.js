import React, { Component } from 'react'
import styles from './Posts.module.css'
import commentIcon from '../../assets/icon/heartcomment/icon_comment_green@3x.png'
import seekIcon from '../../assets/icon/heartcomment/icon_seek@3x.png'
import {Link} from 'react-router-dom'

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        console.log(this.state.posts);
    }
    render() {
        const { posts } = this.props
        if (this.props.loading) {
            return (<h2>loading..</h2>)
        }

        function dateTo(date) {
            var date_input = new Date(date);
            var day = date_input.getDate();
            var month = date_input.getMonth() + 1;
            var year = date_input.getFullYear();
            return year + "-" + month + "-" + day;
        }

        function getCategory(category) {
            if (category == 'JOB') {
                return '구인'
            } else {
                return '홍보'
            }
        }

        return (
            <div className={styles.container}>
                {posts && posts.map((postRow, i) => {
                    const component = postRow.map((post, i) => {
                        return (
                            <div key={post.postId} className={styles.post}>
                                <Link to= {"/SideProject/post/" + post.postId}>
                                    {console.log(post.image)}
                                {post.image ? <div className={styles.blackBox} style={{backgroundImage: "url(" + post.image + ")"}}></div> : <div className={styles.blackBox}></div> }
                                <div className={styles.info}>카테고리 {getCategory(post.projectPostCategory)} by {post.name} {dateTo(post.createdDate)}</div>
                                <div className={styles.postTitle}>{post.title}</div>
                                <div className={styles.iconBox}>
                                    <img src={commentIcon} alt="comment" className={styles.icon} />
                                    <div style={{color: 'black'}}>{post.hit}</div>
                                    <img src={seekIcon} alt="heart" style={{ marginLeft: '0.75rem' }} className={styles.icon} />
                                    <div style={{color: 'black'}}>{post.projectPostLikeSize}</div>
                                </div>
                                </Link>
                            </div>)
                    })
                    if (posts.length - 1 == i) { // 마지막
                        const len = posts.flatMap(x => x).length;
                        if (len % 3 == 1) {
                            return (
                                <div className={styles.rowBox}>
                                    {component}
                                    <div className={styles.post}></div>
                                    <div className={styles.post}></div>
                                </div>)
                        } else if (len % 3 == 2) {
                            return (
                                <div className={styles.rowBox}>
                                    {component}
                                    <div className={styles.post}></div>
                                </div>)
                        } else {
                            return (
                                <div className={styles.rowBox}>
                                    {component}
                                </div>)
                        }
                    } else {
                        return (
                            <div className={styles.rowBox}>
                                {component}
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

}
export default Posts;