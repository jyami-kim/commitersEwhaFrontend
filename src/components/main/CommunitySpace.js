import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './CommunitySpace.module.css'
import CommunitySpacePosts from './CommunitySpacePosts'

const CommunitySpace = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setloading] = useState(false);
    const [postsPerPage] = useState(6);

    //show recent posts. 실제 데이터받을떄 제일 최신꺼부터 보여주나?
    const indetOfFirstPost = 0; 
    const indexOfLastPost = indetOfFirstPost + postsPerPage; 
    const currentPost = posts.slice(indetOfFirstPost,indexOfLastPost)
    
    useEffect(() => {
        const fetchPosts = async () => {
            setloading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setloading(false);
        }

        fetchPosts();
    }, []); //componentdidmount
   
    return (
        <div className = {styles.container}>
            <div className = {styles.titleText}>EWHA COMMUNITY | Community Space</div>
            <CommunitySpacePosts posts = {currentPost} loading ={loading} />
        </div>
    )
}

export default CommunitySpace;