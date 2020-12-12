import * as actions from '../actions';
import { connect } from 'react-redux';
import MyProfile from '../routes/MyProfile'

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
        authenticated: state.authenticated,
        season: state.season,
        seasonImage: state.seasonImage,
        seasonLogo: state.seasonLogo,
        githubInfo: state.githubInfo,
        githubAuth: state.githubAuth,
        commitMap: state.commitMap,
        score: state.score,
        statHour: state.statHour,
        statWeekDay: state.statWeekDay,
    };
};

const mapDispatchToProps = (dispatch) => ({
    saveCurrentUser: (value) => dispatch(actions.saveStore(actions.SAVE_USER_INFO, value)),
    saveAuth: (value) => dispatch(actions.saveStore(actions.AUTHENTICATION, value)),
    saveSeaon: () => dispatch(actions.saveSeason()),
    saveGithubInfo: (value) => dispatch(actions.saveStore(actions.SAVE_GITHUB_INFO, value)),
    saveGithubAuth: (value) => dispatch(actions.saveStore(actions.GITHUB_AUTH, value)),
    saveCommitMap: (value) => dispatch(actions.saveStore(actions.SAVE_COMMIT_MAP, value)),
    saveScore: (value) => dispatch(actions.saveStore(actions.SAVE_SCORE, value)),
    saveWeekDayStat: (value) => dispatch(actions.saveStore(actions.SAVE_WEEKDAY_STAT, value)),
    saveHourStat: (value) => dispatch(actions.saveStore(actions.SAVE_HOUR_STAT, value))
})

const MyProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProfile);

export default MyProfileContainer;