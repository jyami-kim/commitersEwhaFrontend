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
import winterText from '../assets/images/main_text_winter@3x.png'
import fallText from '../assets/images/main_text_fall@3x.png'
import summerText from '../assets/images/main_text_summer@3x.png'
import springText from '../assets/images/main_text_fall@3x.png'

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            season: '가을',
            seasonImage: fallText,
            loading: false,
            githubAuth: false,
            currentGithubUser: false,
            page: 0,
            click: null
        };
        this.fetchSeason = this.fetchSeason.bind(this);
        this.loadGithubUserInfoInUser = this.loadGithubUserInfoInUser.bind(this);
    }

    fetchSeason() {
        let month = new Date().getMonth() + 1;
        if (month = 12 || month <= 2) {
            this.setState({
                season: '겨울',
                seasonImage: winterText
            })
        } else if (month >= 3 && month <= 5) {
            this.setState({
                season: '봄',
                seasonImage: springText
            })
        } else if (month >= 6 && month <= 8) {
            this.setState({
                season: '여름',
                seasonImage: summerText
            })
        }
    }

    componentDidMount() {
        this.loadGithubUserInfoInUser();
        this.fetchSeason();
    }

    loadGithubUserInfoInUser() {
        this.setState({
            loading: true
        });

        getCurrentGithubInfo()
            .then(res => {
                console.log(res.response)
                this.setState({
                    currentGithubUser: res.response,
                    githubAuth: true,
                    loading: false
                });
            }).catch(error => {
                this.setState({
                    loading: false
                });
            });
    }

    render() {
        //리다이랙트 되면 logged, 아닐 경우 profilecard
        const setProfileCard = () => {
            if (this.state.githubAuth) {
                return <GithubProfileCard user={this.props.currentUser} githubUser={this.state.currentGithubUser} />
            }
            return <GithubLoginCard />

        }

        function NewlineText(props) {
            const text = props.text;
            const newText = text.split('\n').map((str, index) => <span key={index} className="intro-message-text">{str}<br /></span>);
            return newText;
        }

        const INTRO_MESSAGE = `이화여자대학교 개발자를 위한 커밋 이화동산 커뮤니티입니다.\n꾸준한 커밋으로 ${this.state.season} 정원사 뱃지를 취득하세요!`;

        return (
            <div className="main-container">
                <a onClick={this.props.onLogout}>Logout</a>
                <Header season={this.state.season}></Header>
                <div className={styles.mainBody}>
                    <Link to="/">
                        <img src={this.state.seasonImage} alt="always for ewha developers" className={styles.mainTextImage} />
                    </Link>
                    <div className={styles.introMessage}>
                        <NewlineText text={INTRO_MESSAGE} />
                    </div>
                    {setProfileCard()}
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
