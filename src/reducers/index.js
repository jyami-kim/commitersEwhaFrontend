import winterLogo from '../assets/logo/logo_winter@3x.png'
import winterText from '../assets/images/main_text_winter@3x.png'

import * as actions from '../actions';

const initialState = {
    user: null,
    authenticated: false,
    season: '겨울',
    seasonLogo: winterLogo,
    seasonImage: winterText,
    githubInfo: null,
    githubAuth: false,
    commitMap: null,
    score: null,
    statHour: null,
    statWeekDay: null,
};

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case actions.SAVE_USER_INFO:
            return Object.assign({}, state, {
                user: action.payload
            });
        case actions.AUTHENTICATION:
            return Object.assign({}, state, {
                authenticated: action.payload
            });
        case actions.SEASON:
            return Object.assign({}, state, {
                season: action.season,
                seasonImage: action.seasonImage,
                seasonLogo: action.seasonLogo
            });
        case actions.GITHUB_AUTH:
            return Object.assign({}, state, {
                githubAuth: action.payload
            });
        case actions.SAVE_GITHUB_INFO:
            return Object.assign({}, state, {
                githubInfo: action.payload
            });
        case actions.SAVE_COMMIT_MAP:
            return Object.assign({}, state, {
                commitMap: action.payload
            });
        case actions.SAVE_SCORE:
            return Object.assign({}, state, {
                score: action.payload
            });
        case actions.SAVE_HOUR_STAT:
            return Object.assign({}, state, {
                statHour: action.payload
            });
        case actions.SAVE_WEEKDAY_STAT:
            return Object.assign({}, state, {
                statWeekDay: action.payload
            });
        default:
            return state;
    }
};

export default reducer;