import * as actions from '../actions';
import { connect } from 'react-redux';
import SideProject from '../routes/SideProject';
import SideProjectCreateForm from '../routes/SideProjectCreateForm';

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

const SideProjectCreateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideProjectCreateForm);

export default SideProjectCreateContainer;