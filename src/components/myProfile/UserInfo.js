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
        if(this.props.user != null){
            this.setState({
                loading: true
            })
        }else{
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const defaultDescription = "자기소개를 입력해주세요"
        console.log(this.props)
        if (this.state.loading) {
            console.log(this.state.loading)
            return <h2>loading</h2>
        }
        const {user, githubUser} = this.props.props;
        return (
            <div className={styles.container}>
                <div className={styles.rowBox}>
                    <div className={styles.item1}>
                        <div className={styles.subtitle}>자기소개</div>
                        <div className={styles.text}>{
                            user && user.description ? user.description : defaultDescription}
                        </div>
                    </div>
                    <div className={styles.item2}>
                        <div className={styles.subtitle}>Profile</div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>이름</div>
                            <div className={styles.info}>{user.name}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>이메일</div>
                            <div className={styles.info}>{user.email}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>전공</div>
                            <div className={styles.info}>{user.defaultMajor }</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>입학년도</div>
                            <div className= {styles.info}>{user.entranceYear == 0 ? ' 미입력 ' : this.props.entranceYear}({this.props.graduate ? '졸업' : '재학'})</div>
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.rowBox2}>
                    <div className={styles.item1}>
                        <div className={styles.subtitle}>직업/직군</div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직장명</div>
                            <div className= {styles.info}>{user && user.company ? user.company : '직장 없음'}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직군</div>
                            <div className= {styles.info}>{user && user.job ? user.job : '직군 없음'}</div>
                        </div>
                    </div>
                    <div className={styles.item2}>
                        <div className={styles.subtitle}>스택</div>
                        <div className={styles.infoBox}>
                            <div className={styles.tag}>HTML</div>
                            <div className={styles.tag}>CSS</div>
                            <div className={styles.tag}>Javascript</div>
                            <div className={styles.tag}>Ruby</div>
                        </div>
                    </div>
                </div>
                <div className={styles.rowBox}>
                    <div className={styles.item1}>
                        <div className={styles.subtitle}>관심 직군</div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직군1</div>
                            <div className={styles.info}>Kakao</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직군2</div>
                            <div className={styles.info}>Backend Developer</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직군2</div>
                            <div className={styles.info}>Backend Developer</div>
                        </div>
                    </div>
                    <div className={styles.item2}></div>
                </div>

            </div>
        )
    }
}

export default UserInfo;