import React, { Component } from 'react'
import styles from './UserInfo.module.css'

class UserInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        if (this.props.user != null) {
            this.setState({
                loading: true
            })
        } else {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        console.log(this.props)
        if (this.state.loading) {
            console.log(this.state.loading)
            return <h2>loading</h2>
        }


        const { user, githubUser } = this.props.props;

        return (
            <div className={styles.container}>
                <div className={styles.rowBox}>
                    <div className={styles.item1}>
                        <div className={styles.subtitle}>자기소개</div>
                        <div className={styles.text}>{
                            user && user.description ? user.description : "자기소개를 입력해주세요"}
                        </div>

                        <div className={styles.subtitle}>스택</div>
                        <div className={styles.infoBox}>
                            {user && user.devStacks.split("#").filter(entry => entry.trim() != '').map((obj, i) => {
                                return <div id={i} className={styles.tag}>{obj}</div>
                            })}
                        </div>
                    </div>
                    <div className={styles.item2}>
                        <div className={styles.subtitle}>Profile</div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>이름</div>
                            <div className={styles.info}>{user && user.name}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>이메일</div>
                            <div className={styles.info}>{user && user.email}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>전공</div>
                            <div className={styles.info}>{user && user.defaultMajor}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>입학년도</div>
                            <div className={styles.info}>{user && user.entranceYear}({this.props.graduate ? '졸업' : '재학'})</div>
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.rowBox2}>
                    <div className={styles.item1}>
                        <div className={styles.subtitle}>직업/직군</div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직장명</div>
                            <div className={styles.info}>{user && user.company ? user.company : '직장 없음'}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직군</div>
                            <div className={styles.info}>{user && user.job ? user.job : '직군 없음'}</div>
                        </div>
                        <div className={styles.brank}></div>
                        <div className={styles.subtitle}>관심 직군</div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직군1</div>
                            <div className={styles.info}>{user && user.wantJob3}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직군2</div>
                            <div className={styles.info}>{user && user.wantJob2}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직군3</div>
                            <div className={styles.info}>{user && user.wantJob3}</div>
                        </div>

                    </div>
                    <div className={styles.item2}>
                        <div className={styles.subtitle}>뱃지</div>
                        <div className={styles.item3}>
                            {user && user.badges.map((obj, i) => {
                                return (
                                    <div id={i} className={styles.badgeContainer}>
                                        <div className={styles.badge} style={obj.image && {backgroundImage: "url(" + obj.image + ")"}} />
                                        <p className={styles.badgeText}>{obj.title}</p>
                                    </div>)
                            })}

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default UserInfo;