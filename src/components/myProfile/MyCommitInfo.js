import React, { Component } from 'react'
import { commit } from '../../constants/color';
import { getMyRanking } from '../../api/APIRank'
import { getMyCommitMap } from '../../api/APIGithub'
import styles from './UserInfo.module.css'
import subStyle from './MyCommitInfo.module.css'
import CommitBox from '../dashboard/CommitBox'


class MyCommitInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let score = () => {
            getMyRanking()
                .then(res => {
                    console.log(res)
                    if(res.status== -200 ){
                        this.props.props.saveScore(res.response)
                    }
                }).catch(error => {
                    this.setState({
                        loading: false
                    });
                    console.log(error);
                });
        }

        let commitMap = () => {
            getMyCommitMap()
                .then(res => {
                    console.log(res)
                    if(res.status== -200 ){
                        this.props.props.saveCommitMap(res.response)
                    }
                }).catch(error => {
                    this.setState({
                        commitMapLoading: false
                    });
                    console.log(error);
                });
        }

        if (this.props.props.commitMap == null) {
            commitMap();
        }
        if (this.props.props.score == null) {
            score();
        }
    }


    render() {
        const { commitMap, score, user } = this.props.props

        return (
            <div className={subStyle.container}>
                <div className={subStyle.columnBox}>
                    <div className={styles.subtitle} style={{marginBottom: '1rem'}}>EWHA RANKING | Github</div>
                    <div className= {subStyle.scoreBox}>
                        <span className={[subStyle.scoreItem, subStyle.greyText].join(" ")}>분류</span>
                        <span className={[subStyle.titleItem, subStyle.greyText].join(" ")}>이름</span>
                        <span className={[subStyle.scoreItem, subStyle.greyText].join(" ")}>총 커밋</span>
                        <span className={[subStyle.scoreItem, subStyle.greyText].join(" ")}>연속 커밋</span>
                        <span className={[subStyle.scoreItem, subStyle.greyText].join(" ")}>총 점수</span>
                    </div>
                    <div className={[subStyle.scoreBox, subStyle.score].join(" ")}>
                    <span className={subStyle.scoreItem}>계절</span>
                        <span className={[subStyle.titleItem, subStyle.greenText].join(" ")}>{user && user.name}</span>
                        <span className={subStyle.scoreItem}>{score && score.quarterRank.commitCount}개</span>
                        <span className={subStyle.scoreItem}>{score && score.quarterRank.commitMaxCombo}개</span>
                        <span className={[subStyle.scoreItem, subStyle.greenText].join(" ")}>{score && score.quarterRank.score}점</span>
                    </div>
                    <div className={[subStyle.scoreBox, subStyle.score].join(" ")}>
                    <span className={subStyle.scoreItem}>주간</span>
                        <span className={[subStyle.titleItem, subStyle.greenText].join(" ")}>{user && user.name}</span>
                        <span className={subStyle.scoreItem}>{score && score.weekRank.commitCount}개</span>
                        <span className={subStyle.scoreItem}>{score && score.weekRank.commitMaxCombo}개</span>
                        <span className={[subStyle.scoreItem, subStyle.greenText].join(" ")}>{score && score.weekRank.score}점</span>
                    </div>
                </div>
                <div className={subStyle.columnBoxMin}>
                    <div className={styles.subtitle} style={{marginBottom: 0}}>커밋동산</div>
                    <CommitBox commitMap={commitMap}/>
                </div>
            </div>
        )

    }
}
export default MyCommitInfo