import { API_BASE_URL, ACCESS_TOKEN, GITHUB_AUTH_URL } from '../constants';
import { request, authRquest } from './APICommon';

export function getQuarterRanking() {
    return authRquest({
        url: API_BASE_URL + "/api/rank/quarter",
        method: 'GET'
    });
}

export function getWeekRanking() {
    return authRquest({
        url: API_BASE_URL + "/api/rank/week",
        method: 'GET'
    });
}

export function getMyRanking(){
    return authRquest({
        url: API_BASE_URL + "/api/rank/me",
        method: 'GET'
    });
    
}