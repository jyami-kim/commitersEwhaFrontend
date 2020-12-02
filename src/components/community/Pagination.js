import React, {useState} from 'react'
import styles from './Pagination.module.css'


export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    const [pageNow, setPageNow] = useState(1);
    
    for( let i =1; i<= Math.ceil(totalPosts / postsPerPage); i++ ){
        pageNumbers.push(i);
    }
 
    return (
        <div className = {styles.container}>
            {pageNumbers.map(number => (
                <div key = {number} >
                    <a onClick = {() => setPageNow(paginate(number))} 
                    className ={ number === pageNow ? styles.pageNow : styles.pageNumber}>
                        {number}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Pagination;