import React, { Component } from 'react'
import Header from '../components/Header'
import subStyles from './css/MyProfile.module.css'
import styles from './css/Ranking.module.css'
import { getCurrentUser } from '../api/APIUtils';
import { ACCESS_TOKEN } from '../constants'
import infoStyles from '../components/myProfile/MyCommitInfo.module.css'
import { getQuarterRanking, getWeekRanking } from '../api/APIRank'
import rank1 from '../assets/images/rank/badge_winter_gold_60@3x.png'
import rank2 from '../assets/images/rank/badge_winter_silver_60@3x.png'
import rank3 from '../assets/images/rank/badge_winter_bronze_60@3x.png'

export class Ranking extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selection: 0,
            weekRankList: [],
            quarterRankList: []
        }
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
                    // console.log(res);
                }).catch(error => {
                    console.log(error)
                });
        }

        let ranking = () => {
            getQuarterRanking()
                .then(res => {
                    if (res.status === -200) {
                        this.setState({
                            quarterRankList: res.response
                        })
                        console.log(res)
                    }
                    // console.log(res);
                }).catch(error => {
                    console.log(error)
                });

            getWeekRanking()
                .then(res => {
                    if (res.status === -200) {
                        this.setState({
                            weekRankList: res.response
                        })
                    }
                    // console.log(res);
                }).catch(error => {
                    console.log(error)
                });
        }

        if (!this.props.authenticated && localStorage.getItem(ACCESS_TOKEN)) {
            user();
        }
        ranking();
    }


    render() {

        return (
            <div className={subStyles.container}>
                <Header seasonLogo={this.props.seasonLogo} sectionName="Ranking"></Header>
                <div className={styles.rowBox}>
                    <div className={[subStyles.title, styles.rowMargin].join(" ")}>EWHA RANKING | Github</div>
                    <h2 className={styles.rowMargin}>랭킹</h2>
                </div>
                <div className={subStyles.nav}>
                    <div className={this.state.selection === 0 ? subStyles.navNow : subStyles.navDefault}
                        onClick={() => this.setState({ selection: 0 })}>계절 정원사</div>
                    <div className={this.state.selection === 1 ? subStyles.navNow : subStyles.navDefault}
                        onClick={() => this.setState({ selection: 1 })}>주간 정원사</div>
                </div>
                <div className={styles.rowBox}>
                    <div className={styles.rankTitle}>겨울 정원사</div>

                    <div className={infoStyles.columnBox}>
                        <div className={styles.scoreBox}>
                            <span className={[infoStyles.scoreItem, infoStyles.greyText].join(" ")}>등수</span>
                            <span className={[styles.titleItem, infoStyles.greyText].join(" ")}>이름</span>
                            <span className={[infoStyles.scoreItem, infoStyles.greyText].join(" ")}>총 커밋</span>
                            <span className={[infoStyles.scoreItem, infoStyles.greyText].join(" ")}>연속 커밋</span>
                            <span className={[infoStyles.scoreItem, infoStyles.greyText].join(" ")}>총 점수</span>
                        </div>
                        {this.state.selection === 0 ? <ScoreBoard scoreList={this.state.quarterRankList} /> : <ScoreBoard scoreList={this.state.weekRankList} />}

                    </div>
                </div>
            </div>
        )
    }
}

export default Ranking

class ScoreBoard extends Component {

    render() {
        const { scoreList } = this.props;
        const rank = [rank1, rank2, rank3];

        return (
            <div>
                {scoreList && scoreList.map((score, i) => {
                    return (
                        <div id={i} className={[styles.scoreBox, infoStyles.score].join(" ")}>
                            <span className={infoStyles.scoreItem}>{i + 1}</span>
                            <span className={[styles.titleItem, infoStyles.greenText].join(" ")}>
                                <div className={styles.profile} style={{ backgroundImage: "url(" + score.profile + ")" }}>
                                    {i < 3 && <img className={styles.rank} src={rank[i]}></img>}
                                </div>
                                {score && score.name}
                            </span>
                            <span className={infoStyles.scoreItem}>{score.commitCount}개</span>
                            <span className={infoStyles.scoreItem}>{score.commitMaxCombo}개</span>
                            <span className={[infoStyles.scoreItem, infoStyles.greenText].join(" ")}>{score.score}점</span>
                        </div>
                    )
                })}

            </div>)
    }
}