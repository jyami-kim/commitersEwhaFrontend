import { API_BASE_URL, ACCESS_TOKEN, GITHUB_AUTH_URL } from '../constants';
import { request, authRquest } from './APICommon';

export function getDashboardPost() {
    return authRquest({
        url: API_BASE_URL + "/api/posts?size=6",
        method: 'GET'
    });
}

export function getDashboardProjectPost() {
    return authRquest({
        url: API_BASE_URL + "/api/project/posts?size=6",
        method: 'GET'
    });
}