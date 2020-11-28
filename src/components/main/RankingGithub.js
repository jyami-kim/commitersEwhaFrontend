import React, {useState, useEffect} from 'react'
import styles from './RankingGithub.module.css'
import BlockWeather from './BlockWeather'
import BlockWeek from './BlockWeek'
import axios from 'axios';
import Pagination from '../Pagination'



//나중에 계절 파라미터로 받을 것
const SEASON_TITLE = "가을 정원사 랭킹 (9월-11월)"
const WEEK_TITLE = "10월 2주차 (2020.10.05 ~2020.10.11)"

const RankingGithub = () => {

    const [blocks, setBlocks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentLine, setCurrentLine] = useState(1)
    const [blocksPerLine] = useState(6);

    useEffect(() => {
        const fetchBlocks = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setBlocks(res.data);
        setLoading(false);
        }
    
    fetchBlocks(blocks);
    }, []);
    
    //get currentpost
    const indexOfLastBlock = currentLine * blocksPerLine ;
    const indexOfFirstBlock = indexOfLastBlock - blocksPerLine;
    const currentBlocks = blocks.slice(indexOfFirstBlock, indexOfLastBlock);

    //paginate
    const paginate = (lineNumber) => setCurrentLine(lineNumber)

    return (
        <div className = {styles.rankingGithubContainer}>
            <div className = {styles.subtitleText}>EWHA RANKING | Github
                <div className = {styles.rankingGithubText}>{SEASON_TITLE}</div>
            </div>
            <div className = {styles.blocksContainer}>
                <BlockWeather blocks = {currentBlocks} loading = {loading}/>
            </div>
            <div className ={styles.paginationContainer}>
                <Pagination postsPerPage ={blocksPerLine} totalPosts ={blocks.length} style ={styles.number} paginate ={paginate}/>
            </div>

             <div>{/* 여기서부터 week*/}</div>

            <div className = {styles.rankingGithubText}>{WEEK_TITLE}</div>
              <div className = {styles.blocksContainer}>
                <BlockWeek blocks = {currentBlocks} loading = {loading}/>
            </div>
        </div>
    )
}



export default RankingGithub



