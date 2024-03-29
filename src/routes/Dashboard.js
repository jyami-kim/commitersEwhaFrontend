import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GithubLoginCard from '../components/dashboard/GithubLoginCard'
import GithubProfileCard from '../components/dashboard/GithubProfileCard'
import RankingGithub from '../components/dashboard/RankingGithub/RankingGithub'
import RankingBaekjun from '../components/dashboard/RankingBaekjun.js'
import CommunitySideProject from '../components/dashboard/community/CommunitySideProject.js'
import InfoTechRss from '../components/dashboard/info/InfoTechRss'
import InfoNotice from '../components/dashboard/info/InfoNotice'
import styles from './css/Dashboard.module.css'
import { getCurrentGithubInfo, getCurrentUser } from '../api/APIUtils';
import { getAllRssWithPage } from '../api/APIRss'
import { GOOGLE_AUTH_URL, ACCESS_TOKEN } from '../constants';
import LandingTextLogo from '../assets/images/signin_text@3x.png'
import LandingLogin from '../assets/images/button_google@3x.png'
import LandingLogo from '../assets/logo/logo_landing.gif'

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            click: null,
        };
    }

    componentDidMount() {
        let user = () => {
            getCurrentUser()
                .then(res => {
                    if (res.status == -200) {
                        this.props.saveAuth(true)
                        this.props.saveCurrentUser(res.response)
                    }
                    console.log(res);
                }).catch(error => {
                    console.log(error)
                });
        }
        let githubUser = () => {
            getCurrentGithubInfo()
                .then(res => {
                    console.log(res);
                    if (res.status == -200) {
                        this.props.saveGithubAuth(true)
                        this.props.saveGithubInfo(res.response)
                        console.log(this.props)
                    }
                }).catch(error => {
                    console.log(error)
                });
        }

        const fetchPosts = async () => {
            getAllRssWithPage().then(res => {
                this.props.saveRss(res.response)
            }).catch(error => {
                    console.log(error);
                })
        }


        if (localStorage.getItem(ACCESS_TOKEN)) {
            user();
            githubUser();
            if (!this.props.techRss) {
                fetchPosts();
            }
        }
    }


    render() {

        const nowDate = new Date();

        function getWeekOfMonth(date){
            var selectedDayOfMonth = date.getDate();
            var first = new Date(date.getFullYear()+'/'+(date.getMonth()+1) + '/01');
            var monthFirstDateDay = first.getDay();

            return Math.ceil((selectedDayOfMonth + monthFirstDateDay) /7);
        }

        if (!this.props.authenticated) {
            return (
                <div className={styles.landingBackground}>
                    <div className={styles.landingBox}><img width="50%" src={LandingLogo} alt="landing" /></div>
                    <div className={styles.rowBox}><img width="35%" src={LandingTextLogo} alt="landgin" /></div>
                    <p className={styles.textBox}>*이화인 메일(@ewhain.net)로 로그인 해주세요.</p>
                    <div className={styles.rowBox} style={{ cursor: 'pointer' }}><a className={styles.landingBox} href={GOOGLE_AUTH_URL}><img width="13%" src={LandingLogin} alt="landgin" /></a></div>
                </div>
            )
        }

        //리다이랙트 되면 logged, 아닐 경우 profilecard
        const setProfileCard = () => {
            if (this.props.githubAuth) {
                return <GithubProfileCard season={this.props.season} user={this.props.user} githubUser={this.props.githubInfo} />
            }
            return <GithubLoginCard />
        }

        function NewlineText(props) {
            const text = props.text;
            const newText = text.split('\n').map((str, index) => <span key={index} className="intro-message-text">{str}<br /></span>);
            return newText;
        }

        const INTRO_MESSAGE = `이화여자대학교 개발자를 위한 커밋 이화동산 커뮤니티입니다.\n꾸준한 커밋으로 ${this.props.season} 정원사 뱃지를 취득하세요!`;

        return (
            <div className="main-container">
                <Header seasonLogo={this.props.seasonLogo} />
                <div className={styles.mainBody}>
                    <Link to="/">
                        <img src={this.props.seasonImage} alt="always for ewha developers" className={styles.mainTextImage} />
                    </Link>
                    <div className={styles.introMessage}>
                        <NewlineText text={INTRO_MESSAGE} />
                    </div>
                    {setProfileCard()}
                    <RankingGithub 
                        quarter={this.props.season + " 정원사 랭킹 (" +this.props.seasonRange+"월)"} 
                        week={nowDate.getFullYear() + "년 " + (nowDate.getMonth()+1) + "월 " +  (getWeekOfMonth(nowDate)) + "주차 "} />
                    <RankingBaekjun />
                    {/* <CommunitySpace /> */}
                    <CommunitySideProject />
                    <InfoTechRss props={this.props} />
                    <InfoNotice />
                </div>
                <Footer className={styles.mainFooter}></Footer>
            </div>
        )
    }

}

export default Dashboard
