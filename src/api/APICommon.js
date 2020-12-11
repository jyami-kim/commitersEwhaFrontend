import { ACCESS_TOKEN } from '../constants';
import axios from 'axios'

export const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export const authRquest = (options) => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request(options);
}