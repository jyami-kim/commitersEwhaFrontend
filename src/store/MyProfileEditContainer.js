import * as actions from '../actions';
import { connect } from 'react-redux';
import MyProfileEdit from '../routes/MyProfileEdit'

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
        authenticated: state.authenticated,
    };
};

const mapDispatchToProps = (dispatch) => ({
    saveCurrentUser: (value) => dispatch(actions.saveStore(actions.SAVE_USER_INFO, value)),
})

const MyProfileEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProfileEdit);

export default MyProfileEditContainer;