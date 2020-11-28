import React from 'react'
import styles from './Pagination.module.css'
import Button from 'react-bootstrap/Button';

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for( let i =1; i<= Math.ceil(totalPosts / postsPerPage); i++ ){
        pageNumbers.push(i);
    }

    return (
        <div className = {styles.container}>
            {pageNumbers.map(number => (
                <div key = {number} >
                    <a onClick = {() => paginate(number)} className ={styles.pageNumbers}>
                        {number}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Pagination;