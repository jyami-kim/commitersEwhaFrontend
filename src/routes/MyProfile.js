import React, { useState, useEffect, Component } from 'react'
import Header from '../components/Header'
import styles from './css/MyProfile.module.css'
import UserInfo from '../components/myProfile/UserInfo'
import github_logo from '../assets/icon/myProfile/icon_github@3x.png'
import page_website from '../assets/icon/myProfile/icon_website@3x.png'
import { getCurrentUser } from "../api/APIUtils"
import LoadingIndicator from './LoadingIndicator';
import MyCommitInfo from '../components/myProfile/MyCommitInfo'
import MyCommitStat from '../components/myProfile/MyCommitStat'

class MyProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            loading: false,
            selection: 0
        }
        this.loadingUser = this.loadingUser.bind(this);
    }

    loadingUser() {
        this.setState({
            loading: true
        });
        getCurrentUser()
            .then(res => {
                console.log(res.response);

                this.setState({
                    user: res.response,
                    loading: false
                });
            }).catch(error => {
                this.setState({
                    loading: false
                });
            });
    }

    componentDidMount() {
        this.loadingUser();
    }

    render() {

        if (this.state.loading) {
            console.log("loading");
            return <LoadingIndicator />
        }

        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.rowBox}>
                    <div className={styles.title}>MY PROFILE</div>
                    <div className={styles.editProfile}>프로필 수정하기</div>
                </div>
                <div className={styles.rowBox2}>
                    <div className={styles.nameBox}>
                        <div className={styles.name}>{this.state.user && this.state.user.name}</div>
                        <div className={styles.jobname}>{this.state.user ? this.state.user.job : '직군을 입력해주세요'}</div>
                    </div>
                    <div className={styles.profileCircle} style={{ backgroundImage: this.state.user && 'url(' + this.state.user.imageUrl + ')' }}></div>
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
                {this.state.selection == 1 ? <MyCommitInfo /> :
                    this.state.selection == 2 ? <MyCommitStat /> :
                        <UserInfo loading={this.state.loading} user={this.state.user} />}

            </div>
        )
    }

}

export default MyProfile;