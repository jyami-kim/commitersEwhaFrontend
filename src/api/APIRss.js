import { API_BASE_URL, ACCESS_TOKEN, GITHUB_AUTH_URL } from '../constants';
import { request, authRquest } from './APICommon';

export function getAllRssWithPage() {
    return request({
        url: API_BASE_URL + "/api/rss",
        method: 'GET'
    });
}