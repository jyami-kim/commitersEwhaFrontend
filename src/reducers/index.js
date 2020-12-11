import fallText from '../assets/images/main_text_fall@3x.png'

import { SAVE_USER_INFO, AUTHENTICATION, SEASON, GITHUB_AUTH, SAVE_GITHUB_INFO } from '../actions';

const initialState = {
    user: null,
    authenticated: false,
    season: '가을',
    seasonImage: fallText,
    githubInfo: null,
    githubAuth: false
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_INFO:
            return Object.assign({}, state, {
                user: action.user
            });
        case AUTHENTICATION:
            return Object.assign({}, state, {
                authenticated: action.authenticated
            });
        case SEASON:
            return Object.assign({}, state, {
                season: action.season
            });
        case GITHUB_AUTH:
            return Object.assign({}, state, {
                githubAuth: action.githubAuth
            });
        case SAVE_GITHUB_INFO:
            return Object.assign({}, state, {
                githubInfo: action.githubInfo
            });
        default:
            return state;
    }
};

export default counterReducer;