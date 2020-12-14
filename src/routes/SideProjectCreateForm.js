import React, { Component } from 'react'
import Header from '../components/Header'
import styles from './css/SideProjectCreateForm.module.css'
import { Redirect } from 'react-router-dom'
import { getHtml } from '../api/APIGithub'
import { saveProjectPost } from '../api/ApiPost'
import YouTube from 'react-youtube'
import ReactMarkdown from 'react-markdown'

class SideProjectCreateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payload: {
                title: '',
                introducing: '',
                githubLink: '',
                deployLinkIOS: '',
                deployLinkAndroid: '',
                deployLinkWeb: '',
                deployLinkOther: '',
                projectPostCategory: 'JOB',
                hashTags: '',
                devStacks: '',
                image: '',
                youtubeLink: ''
            },
            readMe: null,
            image: null,
            youtube: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkYoutube = this.checkYoutube.bind(this)
        this.checkReadMe = this.checkReadMe.bind(this);
        this.checkImageUrl = this.checkImageUrl.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;
        this.setState({
            payload: {
                ...this.state.payload,
                [inputName]: inputValue
            }
        });
        console.log(this.state)
    }

    handleCheckChange(e) {
        const { checked } = e.target
        this.setState({
            payload: {
                projectPostCategory: checked && e.target.name
            }
        });
    }

    checkYoutube(){
        this.setState({
            youtube: this.state.payload.youtubeLink
        })
    }
    checkReadMe(){
        getHtml(this.state.payload.githubLink)
            .then(html => {
                this.setState({
                    readme: html.data
                })
            })
            .catch(err => {
                this.setState({
                    readme: "##### README를 불러올 수 없습니다.  \n\n ##### 1. master 브랜치를 default 브랜치로 설정해주세요 \n\n ##### 2.Master 브랜치에 README.md 파일이 있는지 확인해주세요"
                })
            })
    }
    checkImageUrl(){
        this.setState({
            image: this.state.payload.image
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const createPostRequest = Object.assign({}, this.state.payload);
        console.log(createPostRequest);
        saveProjectPost(createPostRequest)
            .then(res => {
                if (res.status === -200) {
                    console.log(res.response)
                    this.props.history.push("/SideProject");
                }
            }).catch(error => {
                console.log(error);
            });
    }

    render() {

        const opts = {
            height: '130',
            width: '214',
            playerVars: {
                autoplay: 1,
            },
        };

        if (!this.props.authenticated) {
            return <Redirect to="/SideProject" />
        }
        return (
            <div className={styles.container}>
                <Header seasonLogo={this.props.seasonLogo} sectionName="SideProject"></Header>
                <form onSubmit={this.handleSubmit}>
                    <div className={styles.rowBox}>
                        <h2 className={styles.subtitle} style={{ flex: 2 }}>EWHA SIDE PROJECT</h2>
                        <div style={{ flex: 10 }} />
                        <input type="submit" value="작성완료" className={styles.create} style={{ flex: 1 }} />
                    </div>
                    <div>

                        <div className={styles.columnBox}>
                            <input type="text"
                                className={[styles.input, styles.largeInput, styles.inputTitle].join(" ")}
                                name="title" value={this.state.payload.title}
                                placeholder="제목을 입력하세요" onChange={this.handleInputChange} />
                            <div className={styles.line}></div>
                        </div>

                        <div className={styles.columnBox}>
                            <p className={styles.inputItem}>프로젝트 소개글 <span className={styles.smallHighlight}>*필수</span></p>
                            <div className={styles.line}></div>
                            <textarea type="text"
                                className={[styles.input, styles.largeInput].join(" ")}
                                name="introducing" value={this.state.payload.introducing}
                                placeholder="프로젝트에 대해 간단하게 설명해주세요" onChange={this.handleInputChange} />

                        </div>
                        <div className={styles.columnBox}>
                            <p className={styles.inputItem}>사용 기술 스택 소개글 <span className={styles.smallHighlight}>*필수</span></p>
                            <div className={styles.line}></div>
                            <input type="text"
                                className={[styles.input, styles.largeInput].join(" ")}
                                name="devStacks" value={this.state.payload.devStacks}
                                placeholder="사용한 기술 스택을 #으로 구분하여 입력해주세요" onChange={this.handleInputChange} />
                        </div>
                        <div className={styles.columnBox}>
                            <p className={styles.inputItem}>Github <span className={styles.smallHighlight}>*필수 / Master 브랜치의 README가 자동으로 연동됩니다.</span></p>
                            <div className={styles.line}></div>
                            <div className={styles.rowBox}>
                                <input type="text"
                                    style={{ flex: 5 }}
                                    className={[styles.input, styles.middleInput].join(" ")}
                                    name="githubLink" value={this.state.payload.githubLink}
                                    placeholder="연동할 github Link를 입력해주세요 (https://github.com)" onChange={this.handleInputChange} />
                                <div className={styles.button} onClick={this.checkReadMe} style={{ flex: 1 }}>github README 확인</div>
                            </div>
                            <div className={styles.readme}>
                                {this.state.readme && <ReactMarkdown>{this.state.readme}</ReactMarkdown>}
                            </div>
                        </div>
                        <div className={styles.columnBox}>
                            <p className={styles.inputItem}>실제 배포 링크 <span className={styles.smallHighlight}>*필수/중복 가능</span></p>
                            <div className={styles.line}></div>
                            <div className={styles.linkBox}>
                                <p className={styles.linkTitle}>IOS</p>
                                <input type="text"
                                    className={styles.input}
                                    name="deployLinkIOS" value={this.state.payload.deployLinkIOS}
                                    placeholder="링크를 입력해주세요" onChange={this.handleInputChange} />
                            </div>
                            <div className={styles.linkBox}>
                                <p className={styles.linkTitle}>Android</p>
                                <input type="text"
                                    className={styles.input}
                                    name="deployLinkAndroid" value={this.state.payload.deployLinkAndroid}
                                    placeholder="링크를 입력해주세요" onChange={this.handleInputChange} />
                            </div>

                            <div className={styles.linkBox}>
                                <p className={styles.linkTitle}>Web</p>
                                <input type="text"
                                    className={styles.input}
                                    name="deployLinkWeb" value={this.state.payload.deployLinkWeb}
                                    placeholder="링크를 입력해주세요" onChange={this.handleInputChange} />
                            </div>
                            <div className={styles.linkBox}>
                                <p className={styles.linkTitle}>기타링크</p>
                                <input type="text"
                                    className={styles.input}
                                    name="deployLinkOther" value={this.state.deployLinkOther}
                                    placeholder="링크를 입력해주세요" onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className={styles.rowBox}>
                            <div style={{ flex: 1 }}>
                                <p className={styles.inputItem}>프로젝트 대표 사진 <span className={styles.smallHighlight}>*필수</span></p>
                                <div className={styles.line}></div>
                                <div className={styles.rowBox}>
                                    <input type="text"
                                        style={{ flex: 3 }}
                                        className={styles.input}
                                        name="image" value={this.state.payload.image}
                                        placeholder="대표사진 URL을 입력해주세요" onChange={this.handleInputChange} />
                                    <div className={styles.smallButton} onClick={this.checkImageUrl} style={{ flex: 1 }}>사진 확인</div>
                                </div>
                                {this.state.image ? 
                                <div className={styles.image} style={{backgroundImage:'url('+ this.state.image + ")"}}></div> 
                                :<div className={styles.image}></div>}
                            </div>
                            <div style={{ flex: 1 }}>
                                <p className={styles.inputItem}>YOUTUBE 시연영상 <span className={styles.smallHighlight}>*필수</span></p>
                                <div className={styles.line}></div>
                                <div className={styles.rowBox}>
                                    <input type="text"
                                        style={{ flex: 3 }}
                                        className={styles.input}
                                        name="youtubeLink" value={this.state.payload.youtubeLink}
                                        placeholder="유튜브 영상의 ID를 입력해주세요" onChange={this.handleInputChange} />
                                    <div className={styles.smallButton} onClick={this.checkYoutube} style={{ flex: 1 }}>유튜브 확인</div>

                                </div>
                                {this.state.youtube ? <YouTube videoId={this.state.youtube} className={styles.image} opts={opts} onReady={this._onReady}/> :<div className={styles.image}></div>}
                            </div>

                        </div>
                        <div className={styles.columnBox}>
                            <p className={styles.inputItem}>해시태그</p>
                            <div className={styles.line}></div>
                            <input type="text"
                                className={[styles.input, styles.largeInput].join(" ")}
                                name="hashTags" value={this.state.payload.hashTags}
                                placeholder="해시태그를 #로 구분하여 입력해주세요 (#백엔드 #카카오)" onChange={this.handleInputChange} />
                        </div>

                    </div>
                </form>
            </div >
        )
    }

}


export default SideProjectCreateForm