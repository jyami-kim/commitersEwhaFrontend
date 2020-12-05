import React, {useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/Header'
import styles from './css/Community.module.css'
import Posts from '../components/community/Posts' 
import Pagination from '../components/community/Pagination' 
import Inputs from '../components/community/Inputs.js'



const Community = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(16);

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
    
    const sectionName = "전체";

    return (
        <div className = {styles.container}>
            <Header sectionName = "Community"></Header>
            <div className ={styles.titleBox}>
                <h2 className = {styles.subtitle}>Community</h2>
                <div className = {styles.title}>
                    <div>커뮤니티</div>
                    <Inputs/>
                </div>
                
                <div className ={styles.nav}>
                    <div className = {sectionName === "전체" ? styles.navNow : styles.navDefault}>전체</div>
                    <div className = {sectionName === "잡담" ? styles.navNow : styles.navDefault}>잡담</div>
                    <div className = {sectionName === "취업" ? styles.navNow : styles.navDefault}>취업</div>
                    <div className = {sectionName === "홍보" ? styles.navNow : styles.navDefault}>홍보</div>
                    <div className = {sectionName === "후기" ? styles.navNow : styles.navDefault}>후기</div>
                </div>
            </div>
            <div className ={styles.postBox}>
                <Posts loading = {loading} posts ={currentPosts}/>
            </div>
            <Pagination postsPerPage = {postsPerPage} totalPosts = {posts.length} paginate = {paginate}/>
        </div>
    )
}


export default Community
