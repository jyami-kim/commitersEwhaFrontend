import React, { Component } from 'react'
import './ProfileCard.css'
import { getMyCommitMap } from '../../api/APIGithub'
import { getMyRanking } from '../../api/APIRank'
import CommitBox from './CommitBox';

export class GithubProfileCard extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            loading: false,
            commitMapLoading: false,
            rankScore: null,
            commitMap: null
        }

        this.loadUserRankScore = this.loadUserRankScore.bind(this);
    }

    loadUserRankScore() {
        this.setState({
            loading: true,
            commitMapLoading: true
        });

        getMyRanking()
            .then(res => {
                console.log(res)
                this.setState({
                    rankScore: res.response,
                    loading: false
                });
                console.log(this.state.rankScore);
            }).catch(error => {
                this.setState({
                    loading: false
                });
                console.log(error);
            });

        getMyCommitMap()
            .then(res => {
                console.log(res)
                this.setState({
                    commitMap: res.response,
                    commitMapLoading: false
                });

                console.log(this.state.commitMap);
            }).catch(error => {
                this.setState({
                    commitMapLoading: false
                });
                console.log(error);
            });
    }

    componentDidMount() {
        this.loadUserRankScore();
        console.log(new Date())
    }


    render() {
        return (
            <div className="profileCard-container">
                <div className="profile-title-logged">MY PROFILE</div>
                <div className="username-profile">{this.props.githubUser&& this.props.githubUser.authorId}</div>
                <div className="info-detail-profile">{this.props.user && this.props.user.name}</div>
                <div className="profile-rowContainer">
                    <div className="itembox-profile">
                        <div className="subtitle-profile">EWHA SCORE {this.state.rankScore != null ? this.state.rankScore.quarterRank.score : ''}</div>
                        <div className="profile-rowContainer-with-border">
                            <div className="profile-box-with-border">
                                <div className="commit-profile">총 커밋</div>
                                <div className="number-profile">{this.state.rankScore != null ? this.state.rankScore.quarterRank.commitCount : 0} 개</div>
                            </div>
                            <div className="profile-box-no-border">
                                <div className="commit-profile">연속 커밋</div>
                                <div className="number-profile">{this.state.rankScore != null ? this.state.rankScore.quarterRank.commitMaxCombo : 0} 개</div>
                            </div>
                        </div>
                    </div>

                    <div className="itembox2-profile">
                        <div className="subtitle-profile">커밋동산</div>
                        {this.state.commitMapLoading ?
                            <div className="profile-graybox"></div> :
                            <CommitBox className="profile-graybox" commitMap={this.state.commitMap}></CommitBox>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default GithubProfileCard
