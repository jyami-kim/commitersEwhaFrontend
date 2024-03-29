import * as actions from '../actions';
import { connect } from 'react-redux';
import Dashboard from '../routes/Dashboard';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
        authenticated: state.authenticated,
        season: state.season,
        seasonImage: state.seasonImage,
        seasonRange: state.seasonRange,
        seasonLogo: state.seasonLogo,
        githubInfo: state.githubInfo,
        githubAuth: state.githubAuth,
        techRss: state.techRss,
    };
};

const mapDispatchToProps = (dispatch) => ({
    saveCurrentUser: (value) => dispatch(actions.saveStore(actions.SAVE_USER_INFO, value)),
    saveAuth: (value) => dispatch(actions.saveStore(actions.AUTHENTICATION, value)),
    saveSeaon: () => dispatch(actions.saveSeason()),
    saveGithubInfo: (value) => dispatch(actions.saveStore(actions.SAVE_GITHUB_INFO, value)),
    saveGithubAuth: (value) => dispatch(actions.saveStore(actions.GITHUB_AUTH, value)),
    saveRss: (value) => dispatch(actions.saveStore(actions.SAVE_TECH_RSS, value))
})

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;