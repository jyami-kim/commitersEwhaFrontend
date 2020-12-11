import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GithubLoginCard from '../components/dashboard/GithubLoginCard'
import GithubProfileCard from '../components/dashboard/GithubProfileCard'
import RankingGithub from '../components/dashboard/RankingGithub/RankingGithub'
import RankingBaekjun from '../components/dashboard/RankingBaekjun.js'
import CommunitySpace from '../components/dashboard/community/CommunitySpace.js'
import CommunitySideProject from '../components/dashboard/community/CommunitySideProject.js'
import InfoTechRss from '../components/dashboard/info/InfoTechRss'
import InfoNotice from '../components/dashboard/info/InfoNotice'
import styles from './css/Dashboard.module.css'
import { getCurrentGithubInfo } from '../api/APIUtils';


import './css/Welcome.css'
import { GOOGLE_AUTH_URL, ACCESS_TOKEN } from '../constants';
import LoginLogo from '../assets/images/main_text_winter@3x.png'
import { connect } from 'react-redux';
import { receiveValue } from '../actions';
import { getCurrentUser } from '../api/APIUtils'
import { getEwhaJobInfo } from '../api/APIScrap'

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            // githubAuth: false,
            // currentGithubUser: false,
            page: 0,
            click: null
        };
    }


    componentDidMount() {
        console.log(this.props)
        console.log(this.props.seasonImage)
        this.props.saveSeaon();
        // this.loadGithubUserInfoInUser();
        let user = () => {
            getCurrentUser()
                .then(res => {
                    this.props.saveAuth(true)
                    this.props.saveUser(res.response)
                    console.log(this.props)
                }).catch(error => {
                    console.log(error)
                });
        }
        let githubUser = () => {
            // this.setState({
            //     loading: true
            // });

            getCurrentGithubInfo()
                .then(res => {
                    this.props.saveAuth(true)
                    this.props.saveAuth(res.response)
                    console.log(this.props)
                }).catch(error => {
                    console.log(error)
                });
        }
        if(localStorage.getItem(ACCESS_TOKEN)){
            user();
            // githubUser();
        }
        
        
    }


    render() {
        if (!this.props.authenticated) {
            return (
                <div>
                    <h2>Welcome</h2>
                    <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                        <img src={LoginLogo} alt="Login" /></a>
                        {this.props.season}
                </div>
            )
        }

        //리다이랙트 되면 logged, 아닐 경우 profilecard
        // const setProfileCard = () => {
        //     if (this.state.githubAuth) {
        //         return <GithubProfileCard user={this.props.currentUser} githubUser={this.state.currentGithubUser} />
        //     }
        //     return <GithubLoginCard />
        // }

        function NewlineText(props) {
            const text = props.text;
            const newText = text.split('\n').map((str, index) => <span key={index} className="intro-message-text">{str}<br /></span>);
            return newText;
        }

        const INTRO_MESSAGE = `이화여자대학교 개발자를 위한 커밋 이화동산 커뮤니티입니다.\n꾸준한 커밋으로 ${this.state.season} 정원사 뱃지를 취득하세요!`;

        return (
            <div className="main-container">
                {/* <a onClick={this.props.onLogout}>Logout</a> */}
                <Header season={this.state.season}></Header>
                <div className={styles.mainBody}>
                    <Link to="/">
                        <img src={this.state.seasonImage} alt="always for ewha developers" className={styles.mainTextImage} />
                    </Link>
                    <div className={styles.introMessage}>
                        <NewlineText text={INTRO_MESSAGE} />
                    </div>
                    {/* {setProfileCard()} */}
                    <RankingGithub />
                    <RankingBaekjun />
                    <CommunitySpace />
                    <CommunitySideProject />
                    <InfoTechRss />
                    <InfoNotice />
                </div>
                <Footer className={styles.mainFooter}></Footer>
            </div>
        )
    }

}

export default Dashboard
