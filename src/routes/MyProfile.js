import React, { Component } from 'react'
import Header from '../components/Header'
import styles from './css/MyProfile.module.css'
import github_logo from '../assets/icon/myProfile/icon_github@3x.png'
import page_website from '../assets/icon/myProfile/icon_website@3x.png'
import MyCommitInfo from '../components/myProfile/MyCommitInfo'
import MyCommitStat from '../components/myProfile/MyCommitStat'
import UserInfo from '../components/myProfile/UserInfo'
import { getCurrentGithubInfo, getCurrentUser } from '../api/APIUtils';
import { ACCESS_TOKEN } from '../constants'

class MyProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selection: 0
        }
    }

    componentDidMount() {
        let user = () => {
            getCurrentUser()
                .then(res => {
                    if (res.status === -200) {
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
                    if (res.status === -200) {
                        this.props.saveGithubAuth(true)
                        this.props.saveGithubInfo(res.response)
                        console.log(this.props)
                    }
                }).catch(error => {
                    console.log(error)
                });
        }

        if (!this.props.authenticated && !this.props.githubAuth && localStorage.getItem(ACCESS_TOKEN)) {
            user();
            githubUser();
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <Header seasonLogo={this.props.seasonLogo} sectionName = "MyProfile"></Header>
                <div className={styles.rowBox}>
                    <div className={styles.title}>MY PROFILE</div>
                    <div className={styles.editProfile}>프로필 수정하기</div>
                </div>
                <div className={styles.rowBox2}>
                    <div className={styles.nameBox}>
                        <div className={styles.name}>{this.props.user && this.props.user.name}</div>
                        <div className={styles.jobname}>{this.props.user && this.props.user.job ? this.props.user.job : '직군을 입력해주세요'}</div>
                    </div>
                    <div className={styles.profileCircle} style={{ backgroundImage: this.props.user && 'url(' + this.props.user.imageUrl + ')' }}></div>
                    <div className={styles.pageBox}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/">
                            <img src={page_website} alt="page logo" />
                        </a>
                        <div className={styles.logoname}>웹사이트</div>

                    </div>
                    <div className={styles.pageBox2}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/">
                            <img src={github_logo} alt="github logo" />
                        </a>
                        <div className={styles.logoname}>Github</div>

                    </div>
                </div>
                <div className={styles.nav}>
                    <div className={this.state.selection === 0 ? styles.navNow : styles.navDefault}
                        onClick={() => this.setState({ selection: 0 })}>기본 정보</div>
                    <div className={this.state.selection === 1 ? styles.navNow : styles.navDefault}
                        onClick={() => this.setState({ selection: 1 })}>나의 커밋 정보</div>
                    <div className={this.state.selection === 2 ? styles.navNow : styles.navDefault}
                        onClick={() => this.setState({ selection: 2 })}>통계</div>
                </div>
                <div className={styles.line}></div>
                {this.state.selection == 1 ? <MyCommitInfo props={this.props} /> :
                    this.state.selection == 2 ? <MyCommitStat props={this.props} /> :
                        <UserInfo props={this.props} />}

            </div>
        )
    }
}

export default MyProfile;