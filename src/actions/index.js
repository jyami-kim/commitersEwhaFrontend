import summerText from '../assets/images/main_text_summer@3x.png'
import springText from '../assets/images/main_text_fall@3x.png'
import springLogo from '../assets/logo/logo_spring@3x.png'
import summerLogo from '../assets/logo/logo_summer@3x.png'
import fallText from '../assets/images/main_text_fall@3x.png'
import fallLogo from '../assets/logo/logo_fall@3x.png'

export const SAVE_USER_INFO = "SAVE_USER_INFO";
export const AUTHENTICATION = "AUTHENTICATION";
export const SEASON = "SEASON";
export const SAVE_GITHUB_INFO = "SAVE_GITHUB_INFO";
export const GITHUB_AUTH = "GITHUB_AUTH";
export const SAVE_COMMIT_MAP = "SAVE_COMMIT_MAP";
export const SAVE_SCORE = "SAVE_SCORE";


export function saveStore(type, value){
    return{
        type: type,
        payload: value
    }
}

export function saveSeason() {
    let month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5) {
        return {
            type: SEASON,
            season: '봄',
            seasonImage: springText,
            seasonLogo: springLogo
        }
    } else if (month >= 6 && month <= 8) {
        return {
            type: SEASON,
            season: '여름',
            seasonImage: summerText,
            seasonLogo: summerLogo
        }
    } else if (month = 9 || month <= 11) {
        return {
            type: SEASON,
            season: '가을',
            seasonImage: fallText,
            seasonLogo: fallLogo
        }
    } 
}
