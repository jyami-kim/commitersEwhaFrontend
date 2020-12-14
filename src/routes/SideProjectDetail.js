import React, { Component } from 'react'
import Header from '../components/Header'
import styles from './css/SideProjectDetail.module.css'
import { getCurrentUser } from '../api/APIUtils';
import { ACCESS_TOKEN } from '../constants'
import { getPostDetail, deletePost } from '../api/ApiPost'
import { getHtml } from '../api/APIGithub'
import AppStoreLogo from '../assets/images/bt_app_store@3x.png'
import WebSiteLogo from '../assets/images/bt_webiste.png'
import GoogleStoreLogo from '../assets/images/bt_google_play.png'
import GithubLogo from '../assets/images/bt_github.png'
import YouTube from 'react-youtube'

import ReactMarkdown from 'react-markdown'

class SideProjectDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            post: null,
            readme: null
        }
        this.delete = this.delete.bind(this)
    }

    componentDidMount() {
        let user = () => {
            getCurrentUser()
                .then(res => {
                    if (res.status === -200) {
                        this.props.saveAuth(true)
                        this.props.saveCurrentUser(res.response)
                    } else {
                        this.props.history.push("/")
                    }
                }).catch(error => {
                    console.log(error)
                });
        }
        if (!this.props.authenticated && localStorage.getItem(ACCESS_TOKEN)) {
            user();
        }

        let readme = () => {
            getHtml(this.state.post.githubLink)
                .then(html => {
                    this.setState({
                        readme: html.data
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }

        let post = () => {
            this.setState({
                loading: true
            })
            getPostDetail(this.props.match.params.postId)
                .then(res => {
                    console.log(res)
                    if (res.status == -200) {
                        this.setState({
                            post: res.response,
                            loading: false,
                        })
                        if (res.response.githubLink) {
                            readme();
                        }
                    }
                })
        }
        post();

    }

    delete() {
        deletePost(this.state.post.postId)
            .then(res => {
                console.log(res)
                if (res.status == -200) {
                    this.props.history.push("/SideProject");
                }
            })
    }


    render() {

        const opts = {
            height: '195',
            width: '321',
            playerVars: {
                autoplay: 1,
            },
        };

        function getCategory(category) {
            if (category == 'JOB') {
                return '구인'
            }
            return '홍보'
        }

        function dateTo(date) {
            var date_input = new Date(date);
            var day = date_input.getDate();
            var month = date_input.getMonth() + 1;
            var year = date_input.getFullYear();
            return year + "-" + month + "-" + day;
        }

        return (
            <div className={styles.container}>
                <Header seasonLogo={this.props.seasonLogo} sectionName="SideProject"></Header>

                <div className={styles.rowBox} style={{ marginTop: '2rem' }}>
                    <div style={{ flex: 2 }} className={styles.columnBox}>
                        <h2 className={styles.title}>{this.state.post && this.state.post.title}</h2>
                        <div className={styles.item}>
                            <p className={styles.itemName}>프로젝트 소개글</p>
                            <div className={styles.line}></div>
                            <p className={[styles.itemDetail, styles.readmeBox].join(" ")} style={{ height: '15rem' }}>{this.state.post && this.state.post.introducing}</p>
                        </div>
                        <div className={styles.item}>
                            <p className={styles.itemName}>README</p>
                            <div className={styles.line}></div>
                            <div className={[styles.itemDetail, styles.readmeBox].join(" ")}>
                                {this.state.readme && <ReactMarkdown>{this.state.readme}</ReactMarkdown>}
                            </div>
                        </div>
                        <div onClick={this.delete} className={styles.delete}>삭제</div>
                    </div>
                    <div style={{ flex: 1, marginTop: '5rem' }} className={styles.columnBox, styles.side}>
                        <div className={styles.lineSmall}></div>
                        <div style={{ minHeight: '5rem' }}>
                            <p className={styles.sideTitle}>사이드 프로젝트 | {this.state.post && getCategory(this.state.post.projectPostCategory)}</p>
                            <div className={styles.badgeBox}>
                                {this.state.post && <div className={styles.hash}>{this.state.post.hashTags}</div>}
                            </div>
                        </div>
                        <div className={styles.lineSmall}></div>
                        <div className={[styles.rowBox, styles.userInfo].join(" ")}>
                            <p className={styles.sideTitle} style={{ flex: 4 }}>
                                {this.state.post && this.state.post.userName}<br />
                                {this.state.post && dateTo(this.state.post.createdDate)}
                            </p>
                            {this.state.post ? 
                                <div className={styles.userProfile} style={{ backgroundImage: "url(" + this.state.post.userProfileUrl + ")" }}></div>:
                                <div className={styles.userProfile}></div>
                            }
                            
                        </div>
                        <div className={styles.lineSmall}></div>
                        <div className={styles.badgeBox}>
                            {this.state.post && this.state.post.devStacks && this.state.post.devStacks.split("#")
                                .filter(entry => entry.trim() != '').map((obj, i) => {
                                    return <div id={i} className={styles.tag}>{obj}</div>
                                })}
                        </div>
                        <p className={styles.sideTitle2}>Gtihub / 실제 배포 링크</p>
                        <div className={styles.lineSmall}></div>
                        {this.state.post && this.state.post.githubLink && <a href={this.state.post.githubLink}><img className={styles.linkButton} src={GithubLogo}></img></a>}
                        {this.state.post && this.state.post.deployLinkWeb && <a href={this.state.post.deployLinkWeb}><img className={styles.linkButton} src={WebSiteLogo}></img></a>}
                        {this.state.post && this.state.post.deployLinkIOS && <a href={this.state.post.deployLinkIOS}><img className={styles.linkButton} src={AppStoreLogo}></img></a>}
                        {this.state.post && this.state.post.deployLinkAndroid && <a href={this.state.post.deployLinkAndroid}><img className={styles.linkButton} src={GoogleStoreLogo}></img></a>}
                        {this.state.post && this.state.post.deployLinkOther && <a href={this.state.post.deployLinkOther}><img className={styles.linkButton} src={WebSiteLogo}></img></a>}

                        <p className={styles.sideTitle2}>Youtube 시연영상</p>
                        <div className={styles.lineSmall}></div>

                        {this.state.post && this.state.post.youtubeLink && <YouTube videoId={this.state.post.youtubeLink} className={styles.youtube} opts={opts} onReady={this._onReady} />}
                    </div>

                </div>

            </div>
        )
    }

}


export default SideProjectDetail