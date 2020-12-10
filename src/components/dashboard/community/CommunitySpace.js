import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from '../MainComponents.module.css'
import CommunitySpacePosts from './CommunitySpacePosts'
import arrow from '../../../assets/icon/myProfile/arrow@3x.png'
import {getDashboardPost} from '../../../api/ApiPost';

const CommunitySpace = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [postsPerPage] = useState(6);

    //show recent posts. 실제 데이터받을떄 제일 최신꺼부터 보여주나?
    // const indetOfFirstPost = 0; 
    // const indexOfLastPost = indetOfFirstPost + postsPerPage; 
    // const currentPost = posts.slice(indetOfFirstPost,indexOfLastPost)
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = getDashboardPost().then(res => {
                console.log(res.response);
                setPosts(res.response.content);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
        }
        fetchPosts();
    }, []); //componentdidmount
   
    return (
        <div className = {styles.container}>
            <div className = {styles.titleText}>EWHA COMMUNITY | Community Space
                <Link to = "/Community" className={styles.link}>
                    <div className = {styles.goText}>MORE</div>
                    <img src={arrow} alt="arrow" className ={styles.arrow}/>
                </Link>
            </div>
            {/* <CommunitySpacePosts posts = {posts} loading ={loading} /> */}
        </div>
    )
}

export default CommunitySpace;