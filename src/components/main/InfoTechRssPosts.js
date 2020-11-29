import React from 'react'
import styles from './InfoTechRssPosts.module.css'

const InfoTechRssPosts = ({posts, loading}) => {
    if(loading){
        return (<h2>loading</h2>)
    }
    return (
        <div className = {styles.container}>
            {posts.map(post => (
                <div key ={post.id} className = {styles.postCard}>
                    <div>회사이름</div>
                    <text>{post.title}</text>
                    <text>2020.10.21</text>
                </div>
            ))}
        </div>
    )
}

export default InfoTechRssPosts;