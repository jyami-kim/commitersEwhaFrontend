import React, {useState, useEffect} from 'react'
import axios from 'axios'
import InfoTechRssPosts from './InfoTechRssPosts'
import styles from '../MainComponents.module.css'
import {Link} from 'react-router-dom'
import arrow from '../../../assets/icon/myProfile/arrow@3x.png'
import {getAllRssWithPage } from '../../../api/APIRss'

const InfoTechRss = ({props}) => {
    
    console.log(props)
    return (
       <div className = {styles.container}>
            <div className = {styles.titleText}>EWHA INFO | Tech Rss
            <Link to = "/TechRss" className={styles.link}>
                    <div className = {styles.goText}>MORE</div>
                    <img src={arrow} alt="arrow" className ={styles.arrow}/>
                </Link>
            </div>
            <InfoTechRssPosts props = {props} />
        </div>
    )
}

export default InfoTechRss;