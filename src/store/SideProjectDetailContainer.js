import * as actions from '../actions';
import { connect } from 'react-redux';
import SideProjectDetail from '../routes/SideProjectDetail';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
        authenticated: state.authenticated,
        season: state.season,
        seasonImage: state.seasonImage,
        seasonLogo: state.seasonLogo,
        seasonRange: state.seasonRange,
    };
};

const mapDispatchToProps = (dispatch) => ({
    saveCurrentUser: (value) => dispatch(actions.saveStore(actions.SAVE_USER_INFO, value)),
    saveAuth: (value) => dispatch(actions.saveStore(actions.AUTHENTICATION, value)),
    saveSeaon: () => dispatch(actions.saveSeason()),
})

const SideProjectDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideProjectDetail);

export default SideProjectDetailContainer;