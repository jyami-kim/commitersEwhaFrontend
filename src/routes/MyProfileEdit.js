import React, { Component } from 'react'
import Header from '../components/Header'
import styles from './css/MyProfile.module.css'
import editStyles from './css/MyProfileEdit.module.css'
import subStyles from '../components/myProfile/UserInfo.module.css'
import github_logo from '../assets/icon/myProfile/icon_github@3x.png'
import page_website from '../assets/icon/myProfile/icon_website@3x.png'
import { updateUserInfo, getCurrentUser } from '../api/APIUtils';
import { Redirect } from 'react-router-dom'

class MyProfileEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: this.props.user.description,
            major: this.props.user.major,
            entranceYear: this.props.user.entranceYear,
            isGraduate: this.props.user.graduate,
            job: this.props.user.job,
            company: this.props.user.company,
            devStacks: this.props.user.devStackList,
            wantJob1: this.props.user.wantJob1,
            wantJob2: this.props.user.wantJob2,
            wantJob3: this.props.user.wantJob3,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleCheckChange(e) {
        const { checked } = e.target
        this.setState({
            isGraduate: checked
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const updateUserRequest = Object.assign({}, this.state);
        console.log(updateUserRequest);
        updateUserInfo(updateUserRequest)
            .then(res => {
                if (res.status === -200) {
                    console.log(res.response)
                    this.props.saveCurrentUser(res.response)
                    this.props.history.push("/MyProfile");
                }
            }).catch(error => {
                console.log(error);
            });
    }

    render() {

        const { user } = this.props;


        if (!this.props.authenticated) {
            return <Redirect to="/MyProfile" />
        }

        return (
            <div className={styles.container}>
                <Header seasonLogo={this.props.seasonLogo} sectionName="MyProfile"></Header>
                <form onSubmit={this.handleSubmit}>
                    <div className={styles.rowBox}>
                        <div className={[styles.title, styles.titleMargin].join(" ")}>MY PROFILE EDIT</div>
                    </div>
                    <div className={styles.rowBox2}>

                        <div style={{ flex: 3 }}>
                            <div className={styles.name}>{user && user.name}</div>
                            <input type="text"
                                className={[editStyles.input, editStyles.inputTextDefault, editStyles.inputLeft].join(" ")}
                                name="job" value={this.state.job}
                                placeholder="직군을 입력해주세요" onChange={this.handleInputChange} />
                        </div>

                        <div style={{ flex: 1 }}>
                            <div className={editStyles.profileCircle} style={{ backgroundImage: user && 'url(' + user.imageUrl + ')' }}></div>
                        </div>
                        <div style={{ flex: 4 }}>
                            <div className={subStyles.infoBox}>
                                <input type="submit" className={editStyles.editProfile} value="저장하기" />
                            </div>
                            <div className={subStyles.infoBox}>
                                <img src={page_website} alt="page logo" />
                                <div className={subStyles.infoTitle}>github</div>

                                <input type="text"
                                    className={editStyles.input}
                                    name="github" value={this.state.github}
                                    placeholder="github 링크를 입력하세요" onChange={this.handleInputChange} />
                            </div>
                            <div className={subStyles.line}></div>
                            <div className={subStyles.infoBox}>
                                <img src={page_website} alt="page logo" />
                                <div className={subStyles.infoTitle}>웹사이트</div>
                                <input type="text"
                                    className={editStyles.input}
                                    name="site" value={this.state.site}
                                    placeholder="웹사이트 링크를 입력하세요" onChange={this.handleInputChange} />
                            </div>

                        </div>
                    </div>
                    <div className={styles.nav}>
                        <div className={styles.navNow}>기본 정보</div>
                        <div className={styles.navDefault}>나의 커밋 정보 정보</div>
                        <div className={styles.navDefault}>통계</div>
                    </div>
                    <div className={subStyles.line}></div>
                    <div className={subStyles.container}>
                        <div className={subStyles.rowBox}>
                            <div className={subStyles.item1}>
                                <div className={subStyles.subtitle}>자기소개</div>
                                <input type="text"
                                    className={[editStyles.input, editStyles.inputText].join(" ")}
                                    name="description" value={this.state.description}
                                    placeholder="자기소개를 입력해주세요" onChange={this.handleInputChange} />

                                <div className={subStyles.subtitle}>스택</div>
                                <div className={subStyles.infoBox}>
                                    <input type="text"
                                        className={[editStyles.input, editStyles.inputTextDefault].join(" ")}
                                        name="devStacks" value={this.state.devStacks}
                                        placeholder="#으로 기술스택을 나열해주세요" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className={subStyles.item2}>
                                <div className={subStyles.subtitle}>Profile</div>
                                <div className={subStyles.infoBox}>
                                    <div className={subStyles.infoTitle}>이름</div>
                                    <div className={subStyles.info}>{user && user.name}</div>
                                </div>
                                <div className={subStyles.line}></div>
                                <div className={subStyles.infoBox}>
                                    <div className={subStyles.infoTitle}>이메일</div>
                                    <div className={subStyles.info}>{user && user.email}</div>
                                </div>
                                <div className={subStyles.line}></div>
                                <div className={subStyles.infoBox}>
                                    <div className={subStyles.infoTitle}>전공</div>
                                    <div className={subStyles.info}>{user && user.defaultMajor}</div>
                                </div>
                                <div className={subStyles.line}></div>
                                <div className={subStyles.infoBox}>
                                    <div className={subStyles.infoTitle}>입학년도</div>
                                    <input type="text"
                                        className={[editStyles.input, editStyles.entranceInput].join(" ")}
                                        name="entranceYear" value={this.state.entranceYear}
                                        placeholder="입학년도(숫자만)" onChange={this.handleInputChange} />

                                    <div className={subStyles.infoTitle}>졸업여부</div>
                                    <input type="checkbox"
                                        className={editStyles.input}
                                        name="isGraduate" defaultChecked={this.state.isGraduate}
                                        onChange={this.handleCheckChange} />

                                </div>
                            </div>
                        </div>
                        <div className={subStyles.line}></div>
                        <div className={subStyles.rowBox2}>
                            <div className={subStyles.item1}>
                                <div className={subStyles.subtitle}>직업/직군</div>
                                <div className={subStyles.infoBox}>
                                    <div className={subStyles.infoTitle}>직장명</div>
                                    <input type="text"
                                        className={editStyles.input}
                                        name="company" value={this.state.company}
                                        placeholder="직장명을 입력해주세요" onChange={this.handleInputChange} />
                                </div>
                                <div className={subStyles.line}></div>
                                <div className={subStyles.infoBox}>
                                    <div className={subStyles.infoTitle}>직군</div>
                                    <input type="text"
                                        className={editStyles.input}
                                        name="job" value={this.state.job}
                                        placeholder="직군을 입력해주세요" onChange={this.handleInputChange} />
                                </div>
                                <div className={subStyles.brank}></div>
                                <div className={subStyles.subtitle}>관심 직군</div>
                                <div className={subStyles.infoBox}>
                                    <div className={subStyles.infoTitle}>직군1</div>
                                    <input type="text"
                                        className={editStyles.input}
                                        name="wantJob1" value={this.state.wantJob1}
                                        placeholder="관심직군을 입력해주세요" onChange={this.handleInputChange} />
                                </div>
                                <div className={subStyles.line}></div>
                                <div className={subStyles.infoBox}>
                                    <div className={subStyles.infoTitle}>직군2</div>
                                    <input type="text"
                                        className={editStyles.input}
                                        name="wantJob2" value={this.state.wantJob2}
                                        placeholder="관심직군을 입력해주세요" onChange={this.handleInputChange} />
                                </div>
                                <div className={subStyles.line}></div>
                                <div className={subStyles.infoBox}>
                                    <div className={subStyles.infoTitle}>직군3</div>
                                    <input type="text"
                                        className={editStyles.input}
                                        name="wantJob3" value={this.state.wantJob3}
                                        placeholder="관심직군을 입력해주세요" onChange={this.handleInputChange} />
                                </div>

                            </div>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default MyProfileEdit;