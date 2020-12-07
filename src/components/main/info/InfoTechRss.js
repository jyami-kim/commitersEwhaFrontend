import React, {useState, useEffect} from 'react'
import axios from 'axios'
import InfoTechRssPosts from './InfoTechRssPosts'
import styles from '../MainComponents.module.css'
import {Link} from 'react-router-dom'
import arrow from '../../../assets/icon/myProfile/arrow@3x.png'

const InfoTechRss = () => {
    const [posts , setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [currentPage, setCurrentPage] = useState(1);
    //const [postPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://49.50.162.81:8080/api/rss');
            setPosts(res.data.response.rssFeedContents);
            setLoading(false);

        }
        fetchPosts();
    },[]);
    return (
       <div className = {styles.container}>
            <div className = {styles.titleText}>EWHA INFO | Tech Rss
            <Link to = "/TechRss" className={styles.link}>
                    <div className = {styles.goText}>MORE</div>
                    <img src={arrow} alt="arrow" className ={styles.arrow}/>
                </Link>
            </div>
            <InfoTechRssPosts posts = {posts} loading ={loading} />
        </div>
    )
}

export default InfoTechRss;