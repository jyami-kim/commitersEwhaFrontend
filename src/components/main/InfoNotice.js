import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styles from './MainComponents.module.css'
import InfoNoticePosts from './InfoNoticePosts'
import InfoJobPosts from './InfoJobPosts'

const InfoNotice = () => {

    //noticePost (공지사항)과 인턴 & 취업 두가지가 있음
    const [posts, setPosts] =useState([]);
    const [loading, setLoading] = useState(false);
    const [postsPerPage] = useState(8);

    const currentPosts = posts.slice(0, postsPerPage);

    //intern & jobs
    const [posts_job, setPostsJob] =useState([]);
    const [loading_job, setLoadingJob] = useState(false);
    const [postsPerPageJob] = useState(3);

    const currentPostsJob = posts_job.slice(0, postsPerPageJob);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }

        const fetchPostsJob = async () => {
            setLoadingJob(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPostsJob(res.data);
            setLoadingJob(false);
        }
        fetchPosts();
        fetchPostsJob();
        //console.log(posts);
    },[]);



    return (
        <div className = {styles.container}>
            <div className = {styles.titleText}>EWHA INFO | 공지사항</div>
            
            <div className ={styles.containerRow}>
                <div className = {styles.postBox}>
                    <div className = {styles.subtitle}>컴퓨터공학과 공지사항</div>
                    <InfoNoticePosts posts = {currentPosts} loading = {loading}/>
                </div>
               
                <div className = {styles.postBox2}>
                    <div className = {styles.subtitle}>인턴&취업</div>
                    <InfoJobPosts posts = {currentPostsJob} loading = {loading_job}/>
                    <div className = {styles.cafeButton}>
                        <div className ={styles.cafeText}>이화 퀸프 카페</div>
                        <div className = {styles.goCafeText}>WEBSITE로 바로가기</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoNotice;