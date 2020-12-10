import { API_BASE_URL, ACCESS_TOKEN, GITHUB_AUTH_URL } from '../constants';
import { request, authRquest } from './APICommon';

export function getMyCommitMap() {
    return authRquest({
        url: API_BASE_URL + "/api/github/myCommitMap",
        method: 'GET'
    });
}