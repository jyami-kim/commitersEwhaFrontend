import * as actions from '../actions';
import { connect } from 'react-redux';
import Ranking from '../routes/Ranking';
import { act } from 'react-dom/test-utils';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.user,
        authenticated: state.authenticated,
        season: state.season,
        seasonImage: state.seasonImage,
        seasonLogo: state.seasonLogo,
        // quarterRankList: [],
        // weekRankList: []
    };
};

const mapDispatchToProps = (dispatch) => ({
    saveCurrentUser: (value) => dispatch(actions.saveStore(actions.SAVE_USER_INFO, value)),
    saveAuth: (value) => dispatch(actions.saveStore(actions.AUTHENTICATION, value)),
    saveSeaon: () => dispatch(actions.saveSeason()),
    // saveQuarterRankList : (value) => dispatch(actions.saveStore(actions.SAVE_QUARTER_RANK, value)),
    // saveWeekRankList : (value) => dispatch(actions.saveStore(actions.SAVE_WEEK_RANK, value)),
})

const RankingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Ranking);

export default RankingContainer;