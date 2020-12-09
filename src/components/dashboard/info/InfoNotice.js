import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from '../MainComponents.module.css'
import InfoNoticePosts from './InfoNoticePosts'
import InfoJobPosts from './InfoJobPosts'
import arrow from '../../../assets/icon/myProfile/arrow@3x.png'
import { getEwhaNotificationInfo, getEwhaJobInfo } from '../../../api/APIScrap'

const InfoNotice = () => {

    //noticePost (공지사항)과 인턴 & 취업 두가지가 있음
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [postsPerPage] = useState(8);

    const currentPosts = posts.slice(0, postsPerPage);

    //intern & jobs
    const [posts_job, setPostsJob] = useState([]);
    const [loading_job, setLoadingJob] = useState(false);
    const [postsPerPageJob] = useState(3);

    const currentPostsJob = posts_job.slice(0, postsPerPageJob);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            getEwhaNotificationInfo()
                .then(res => {
                    setPosts(res.response.jobList);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                })
        }

        const fetchPostsJob = async () => {
            setLoadingJob(true);
            getEwhaJobInfo()
                .then(res => {
                    setPostsJob(res.response.jobList);
                    setLoadingJob(false);
                })
                .catch(error => {
                    console.log(error);
                })
        }

        fetchPosts();
        fetchPostsJob();
    }, []);



    return (
        <div className={styles.container}>
            <div className={styles.titleText}>EWHA INFO | 공지사항</div>

            <div className={styles.containerRow}>
                <div className={styles.postBox}>
                    <div className={styles.subtitle}>컴퓨터공학과 공지사항
                        <a href="http://cse.ewha.ac.kr/" className={styles.link2}>
                            <div className={styles.goText}>WEBSITE로 바로가기</div>
                            <img src={arrow} alt="arrow" className={styles.arrow} />
                        </a>
                    </div>
                    <InfoNoticePosts posts={currentPosts} loading={loading} />
                </div>

                <div className={styles.postBox2}>
                    <div className={styles.subtitle}>인턴&취업
                     <a href="http://cse.ewha.ac.kr/" className={styles.link}>
                            <div className={styles.goText}>WEBSITE로 바로가기</div>
                            <img src={arrow} alt="arrow" className={styles.arrow} />
                        </a>
                    </div>
                    <InfoJobPosts posts={currentPostsJob} loading={loading_job} />
                    <a href="https://cafe.naver.com/ewhaqueenp/" target="_blank" className={styles.cafeButton}>
                        <div className={styles.cafeText}>이화 퀸프 카페</div>
                        <div rel="noreferrer" className={styles.goText} >WEBSITE로 바로가기</div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default InfoNotice;