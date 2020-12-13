import * as actions from '../actions';
import { connect } from 'react-redux';
import TechRSS from '../routes/TechRSS';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
        authenticated: state.authenticated,
        season: state.season,
        seasonImage: state.seasonImage,
        seasonLogo: state.seasonLogo,
    };
};

const mapDispatchToProps = (dispatch) => ({
    saveCurrentUser: (value) => dispatch(actions.saveStore(actions.SAVE_USER_INFO, value)),
    saveAuth: (value) => dispatch(actions.saveStore(actions.AUTHENTICATION, value)),
    saveSeaon: () => dispatch(actions.saveSeason()),
})

const TechRssContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TechRSS);

export default TechRssContainer;