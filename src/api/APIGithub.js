import { API_BASE_URL, ACCESS_TOKEN, GITHUB_AUTH_URL } from '../constants';
import { request, authRquest } from './APICommon';

export function getMyCommitMap() {
    return authRquest({
        url: API_BASE_URL + "/api/github/myCommitMap",
        method: 'GET'
    });
}

export function getMyHourStat() {
    return authRquest({
        url: API_BASE_URL + "/api/github/stat/me/time",
        method: 'GET'
    });
}

export function getMyWeekdayStat() {
    return authRquest({
        url: API_BASE_URL + "/api/github/stat/me/weekday",
        method: 'GET'
    });
}