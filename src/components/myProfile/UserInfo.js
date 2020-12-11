import React, { Component } from 'react'
import styles from './UserInfo.module.css'

class UserInfo extends Component {

    constructor(props){
        super(props)
        console.log(this.props.loading)
        console.log(this.props.user)
    }

    render() {

        const defaultDescription = "자기소개를 입력해주세요"

        if (this.props.loading) {
            console.log(this.props.loading)
            return <h2>loading</h2>
        }
        
        return (
            <div className={styles.container}>
                <div className={styles.rowBox}>
                    <div className={styles.item1}>
                        <div className={styles.subtitle}>자기소개</div>
                        <div className = {styles.text}>{this.props.user.description ? user.description: defaultDescription}</div>
                    </div>
                    <div className={styles.item2}>
                        <div className={styles.subtitle}>Profile</div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>이름</div>
                            {/* <div className= {styles.info}>{user.name}</div> */}
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>이메일</div>
                            {/* <div className= {styles.info}>{user.email}</div> */}
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>전공</div>
                            {/* <div className= {styles.info}>{this.defaultMajor}</div> */}
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>입학년도</div>
                            {/* <div className= {styles.info}>{user.entranceYear == 0 ? '입학년도' : user.entranceYear}({user.graduate ? '졸업' : '재학'})</div> */}
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.rowBox2}>
                    <div className={styles.item1}>
                        <div className={styles.subtitle}>직업/직군</div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직장명</div>
                            {/* <div className= {styles.info}>{user.company ? user.company : '직장 없음'}</div> */}
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.infoBox}>
                            <div className={styles.infoTitle}>직군</div>
                            {/* <div className= {styles.info}>{user.job ? user.job : '직군을 입력해주세요'}</div> */}
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