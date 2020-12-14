import React, { Component } from 'react'
import Header from '../components/Header'
import styles from './css/SideProject.module.css'
import { Link } from 'react-router-dom'
import { getCurrentUser } from '../api/APIUtils';
import Posts from '../components/sideproject/Posts' 
import Pagination from '../components/community/Pagination' 
import { ACCESS_TOKEN } from '../constants'
import Inputs from '../components/community/Inputs.js'
import { getDashboardPosts } from '../api/ApiPost'

class SideProject extends Component {
    constructor(props) {
        super(props)

        const paramPage = this.getUrlParameter('page')
        const paramSize = this.getUrlParameter('size')
        const paramCategory = this.getUrlParameter('category')
        var resultCategory = ''

        switch (paramCategory) {
            case 'JOB':
                resultCategory = 'JOB'
                break;
            case 'ADVERTISING':
                resultCategory = 'ADVERTISING'
                break;
            default:
                resultCategory = ''
        }

        this.state = {
            posts: null,
            loading: false,
            page: paramPage !== '' ? paramPage : 1,
            totalPages: 15,
            size: paramSize !== '' ? paramSize : 15,
            category: resultCategory,
        }
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

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
        this.fetchPosts(this.state.page, this.state.size, this.state.category)
    }

    fetchPosts = (page, size, category) => {
        this.setState({
            loading: true
        })
        getDashboardPosts(page, size, category)
            .then(res => {
                console.log(res)
                if (res.status == -200) {
                    console.log(res.response.content)
                    const content = res.response.content
                    let postsMap =[]
                    let i =0;
                    for(; i<content.length; i=i+3){
                        postsMap.push(content.slice(i,i+3));
                    }
                    this.setState({
                        posts: postsMap,
                        loading: false,
                        totalPages: res.response.totalPages
                    })
                }
            })
    }

    render() {
        return (
            <div className={styles.container}>
                <Header seasonLogo={this.props.seasonLogo} sectionName="SideProject"></Header>
                <div className={styles.titleBox}>
                    <h2 className={styles.subtitle}>Ewha Community</h2>
                    <div className={styles.title}>
                        <div>사이드 프로젝트</div>
                        <Inputs />
                    </div>

                    <div className={styles.nav}>
                        <Link to="/SideProject" style={{ flex: 1 }}
                            onClick={() => {
                                this.setState({ category: '' })
                                this.fetchPosts(1, 15, '')
                            }}>
                            <div className={this.state.category !== "JOB" && this.state.category !== "ADVERTISING" ? styles.navNow : styles.navDefault}>전체</div>
                        </Link>
                        <Link to="/SideProject?category=ADVERTISING" style={{ flex: 1 }}
                            onClick={() => {
                                this.setState({ category: 'ADVERTISING' })
                                this.fetchPosts(1, 15, 'ADVERTISING')
                            }}>
                            <div className={this.state.category === "ADVERTISING" ? styles.navNow : styles.navDefault
                            }>홍보</div>
                        </Link>
                        <Link to="/SideProject?category=JOB" style={{ flex: 1 }}
                            onClick={() => {
                                this.setState({ category: 'JOB' })
                                this.fetchPosts(1, 15, 'JOB')
                            }}>
                            <div className={this.state.category === "JOB" ? styles.navNow : styles.navDefault}>구인</div>
                        </Link>
                        <div style={{ flex: 8 }}></div>
                        <Link to="/SideProject/form"><div className={styles.create} style={{ flex: 1 }}>
                            게시물 생성  
                        </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.postBox}>
                    <Posts loading={this.state.loading} posts={this.state.posts} />
                </div>
                <Pagination postsPerPage={this.state.size} totalPosts={this.state.totalPages} paginate={this.state.page} />
            </div>
        )
    }

}


export default SideProject