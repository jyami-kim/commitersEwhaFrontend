import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CommunitySideProjectPosts from './CommunitySideProjectPosts'
import styles from '../MainComponents.module.css'
import arrow from '../../../assets/icon/myProfile/arrow@3x.png'
import {getDashboardProjectPost} from '../../../api/ApiPost';

const CommunitySideProject = () => {
    const [posts , setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = getDashboardProjectPost().then(res => {
                console.log(res.response);
                setPosts(res.response.content);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
        }
        fetchPosts();
    },[]);
    return (
       <div className = {styles.container}>
            <div className = {styles.titleText}>EWHA COMMUNITY | Side Project
                <Link to = "/SideProject" className={styles.link}>
                    <div className = {styles.goText}>MORE</div>
                    <img src={arrow} alt="arrow" className ={styles.arrow}/>
                </Link>
            </div>
            {/* <CommunitySideProjectPosts posts = {posts} loading ={loading} /> */}
        </div>
    )
}

export default CommunitySideProject;