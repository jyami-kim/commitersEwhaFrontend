import React, {useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/Header'
import styles from './css/SideProject.module.css'
import Posts from '../components/sideproject/Posts' 
import Pagination from '../components/community/Pagination' 
import Inputs from '../components/community/Inputs.js'

const sectionName = "전체";

const SideProject = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);

    //get current Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        console.log(pageNumber)
        return pageNumber;
    };

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts().catch(err => console.error(err));
    }, []);

    return (
        <div className = {styles.container}>
            <Header sectionName = "SideProject"></Header>
            <div className ={styles.titleBox}>
                <h2 className = {styles.subtitle}>Ewha Community</h2>
                <div className = {styles.title}>
                    <div>사이드 프로젝트</div>
                    <Inputs/>
                </div>
                
                <div className ={styles.nav}>
                    <div className = {sectionName === "전체" ? styles.navNow : styles.navDefault}>전체</div>
                    <div className = {sectionName === "홍보" ? styles.navNow : styles.navDefault}>홍보</div>
                    <div className = {sectionName === "구인" ? styles.navNow : styles.navDefault}>구인</div>
                   
                </div>
            </div>
            <div className ={styles.postBox}>
                <Posts loading = {loading} posts ={currentPosts}/>
            </div>
            <Pagination postsPerPage = {postsPerPage} totalPosts = {posts.length} paginate = {paginate}/>
        </div>
    )
}

export default SideProject