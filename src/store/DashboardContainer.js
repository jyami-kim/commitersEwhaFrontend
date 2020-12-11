
import * as actions from '../actions';
import { connect } from 'react-redux';
import PrivateRoute from '../common/PrivateRoute';
import App from '../App';
import Dashboard from '../routes/Dashboard';


const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
        authenticated: state.authenticated,
        season: state.season,
        seasonImage: state.seasonImage,
        githubInfo: state.githubInfo,
        githubAuth: state.githubAuth
    };
};

const mapDispatchToProps = (dispatch) => ({
    saveCurrentUser: (value) => dispatch(actions.saveCurrentUserInfo(value)),
    saveAuth: (value) => dispatch(actions.authentication(value)),
    saveSeaon: () => dispatch(actions.saveSeason()),
    saveGithubInfo: (value) => dispatch(actions.saveGithubInfo(value)),
    saveGithubAuth: (value) => dispatch(actions.githubAuth(value))
})

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;