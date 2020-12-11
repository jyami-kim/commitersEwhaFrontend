import winterText from '../assets/images/main_text_winter@3x.png'
import summerText from '../assets/images/main_text_summer@3x.png'
import springText from '../assets/images/main_text_fall@3x.png'

export const SAVE_USER_INFO = "SAVE_USER_INFO";
export const AUTHENTICATION = "AUTHENTICATION";
export const SEASON = "SEASON";
export const SAVE_GITHUB_INFO = "SAVE_GITHUB_INFO";
export const GITHUB_AUTH = "GITHUB_AUTH";

export function saveCurrentUserInfo(value) {
    return {
        type: SAVE_USER_INFO,
        user: value
    };
};

export function authentication(value) {
    return {
        type: AUTHENTICATION,
        authentication: value
    };
};

export function saveGithubInfo(value) {
    return {
        type: SAVE_GITHUB_INFO,
        githubInfo: value
    };
};

export function githubAuth(value) {
    return {
        type: GITHUB_AUTH,
        githubAuth: value
    };
};

export function saveSeason() {
    let month = new Date().getMonth() + 1;
    if (month = 12 || month <= 2) {
        return {
            type: SEASON,
            season: '겨울',
            seasonImage: winterText
        }
    } else if (month >= 3 && month <= 5) {
        return {
            type: SEASON,
            season: '봄',
            seasonImage: springText
        }
    } else if (month >= 6 && month <= 8) {
        return {
            type: SEASON,
            season: '여름',
            seasonImage: summerText
        }
    }
}
