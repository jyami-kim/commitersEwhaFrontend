import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommunitySideProjectPosts from './CommunitySideProjectPosts'
import styles from './MainComponents.module.css'

const CommunitySideProject = () => {
    const [posts , setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setPosts(res.data);
            setLoading(false);

        }
        fetchPosts();
    },[]);
    return (
       <div className = {styles.container}>
            <div className = {styles.titleText}>EWHA COMMUNITY | Side Project
                <div className = {styles.goText}>MORE</div>
            </div>
            <CommunitySideProjectPosts posts = {posts} loading ={loading} />
        </div>
    )
}

export default CommunitySideProject;