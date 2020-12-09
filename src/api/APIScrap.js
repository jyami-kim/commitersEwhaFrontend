import { API_BASE_URL, ACCESS_TOKEN, GITHUB_AUTH_URL } from '../constants';
import { request, authRquest } from './APICommon';

export function getEwhaJobInfo() {
    return request({
        url: API_BASE_URL + "/api/scrap/ewha/job",
        method: 'GET'
    });
}

export function getEwhaNotificationInfo() {
    return request({
        url: API_BASE_URL + "/api/scrap/ewha/notification",
        method: 'GET'
    });
}

export function getBaekjoonRank() {
    return request({
        url: API_BASE_URL + "/api/scrap/baekjoon/rank",
        method: 'GET'
    });
}