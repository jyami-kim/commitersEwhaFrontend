import winterLogo from '../assets/logo/logo_winter@3x.png'
import winterText from '../assets/images/main_text_winter@3x.png'

import { SAVE_USER_INFO, AUTHENTICATION, SAVE_SCORE, SEASON, GITHUB_AUTH, SAVE_GITHUB_INFO, SAVE_COMMIT_MAP } from '../actions';

const initialState = {
    user: null,
    authenticated: false,
    season: '겨울',
    seasonLogo: winterLogo,
    seasonImage: winterText,
    githubInfo: null,
    githubAuth: false,
    commitMap: null,
    score: null
};

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case SAVE_USER_INFO:
            return Object.assign({}, state, {
                user: action.payload
            });
        case AUTHENTICATION:
            return Object.assign({}, state, {
                authenticated: action.payload
            });
        case SEASON:
            return Object.assign({}, state, {
                season: action.season,
                seasonImage: action.seasonImage,
                seasonLogo: action.seasonLogo
            });
        case GITHUB_AUTH:
            return Object.assign({}, state, {
                githubAuth: action.payload
            });
        case SAVE_GITHUB_INFO:
            return Object.assign({}, state, {
                githubInfo: action.payload
            });
        case SAVE_COMMIT_MAP:
            return Object.assign({}, state, {
                commitMap: action.payload
            });
        case SAVE_SCORE:
            return Object.assign({}, state, {
                score: action.payload
            });
        default:
            return state;
    }
};

export default reducer;