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
        url: API_BASE_URL + "/api/project/posts?size=4",
        method: 'GET'
    });
}

export function getDashboardPosts(page, size, category) { // ADVERTISING // JOB
    const url = API_BASE_URL + "/api/project/posts?page=" + page + "&size=" + size + "&projectPostCategory=" + category
    console.log(url)
    return authRquest({
        url: url,
        method: 'GET'
    })
}

export function getPostDetail(postId) {
    const url = API_BASE_URL + "/api/project/post/" + postId
    console.log(url)
    return authRquest({
        url: url,
        method: 'GET'
    })
}

export function deletePost(postId) {
    const url = API_BASE_URL + "/api/project/post/" + postId
    console.log(url)
    return authRquest({
        url: url,
        method: 'DELETE'
    })
}

export function saveProjectPost(payload) {
    return authRquest({
        url: API_BASE_URL + "/api/project/post",
        method: 'POST',
        body: JSON.stringify(payload)
    })
}