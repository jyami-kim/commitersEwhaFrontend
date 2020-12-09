import { API_BASE_URL, ACCESS_TOKEN, GITHUB_AUTH_URL } from '../constants';
import { request, authRquest } from './APICommon';

export function getCurrentUser() {
    return authRquest({
        url: API_BASE_URL + "/api/user/me",
        method: 'GET'
    });
}

export function getCurrentGithubInfo() {
    return authRquest({
        url: API_BASE_URL + "/api/github/me",
        method: 'GET'
    });
}

export function githubOauthLogin() {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'token ' + localStorage.getItem(ACCESS_TOKEN))
    }
    const defaults = { headers: headers, redirect: 'follow' }
    const options = Object.assign({}, defaults);

    fetch(GITHUB_AUTH_URL, options).then(response => {
        console.log(response)
    }).catch(function (err) {
        console.info(err + " url: " + GITHUB_AUTH_URL);
    });
}


// export function githubLogin(loginRequest) {
//     return request({
//         url: API_BASE_URL + "/auth/login",
//         method: 'POST',
//         body: JSON.stringify(loginRequest)
//     });
// }

// export function signup(signupRequest) {
//     return request({
//         url: API_BASE_URL + "/auth/signup",
//         method: 'POST',
//         body: JSON.stringify(signupRequest)
//     });
// }