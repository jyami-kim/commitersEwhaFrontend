
import * as actions from '../actions';
import { connect } from 'react-redux';
import App from '../App';
import OAuth2RedirectHandler from '../auth/OAuth2RedirectHandler';

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    saveAuth: value => dispatch(actions.saveStore(actions.AUTHENTICATION, value)),
})

const OAuth2RedirectHandlerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OAuth2RedirectHandler);

export default OAuth2RedirectHandlerContainer;