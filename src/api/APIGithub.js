import { API_BASE_URL, ACCESS_TOKEN, GITHUB_AUTH_URL } from '../constants';
import { request, authRquest } from './APICommon';
import axios from 'axios'

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

export const getHtml = async (githubUrl) => {
    const info = githubUrl
        .split("https://github.com/")
        .filter(entry => entry.trim() != '')
    const crawlingUrl = 'https://raw.githubusercontent.com/' + info + '/master/README.md';
    console.log(crawlingUrl)
    return await axios.get(crawlingUrl);
}

export function saveNewCommitersInfo(){
    return authRquest({
        url: API_BASE_URL + "/api/github/newCommiters",
        method: 'POST'
    });
    
}