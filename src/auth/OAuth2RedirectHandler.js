import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../constants';
import { Redirect } from 'react-router-dom'
import { saveNewCommitersInfo } from '../api/APIGithub'

class OAuth2RedirectHandler extends Component {

    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {
        const token = this.getUrlParameter('token');
        const githubToken = this.getUrlParameter('github-token');
        const error = this.getUrlParameter('error');
        if (token) {
            console.log(token)
            localStorage.setItem(ACCESS_TOKEN, token);
            this.props.saveAuth(true)
            return <Redirect to={{
                pathname: "/",
                state: { from: this.props.location }
            }} />;
        } if (githubToken) {
            saveNewCommitersInfo()
                .then(res=>{
                    console.log(res)
                })
                .catch(error => {
                    console.log(error)
                })
            return <Redirect to={{
                pathname: "/",
                state: { from: this.props.location }
            }} />;
        } else {
            console.log("error");
            return <Redirect to={{
                pathname: "/error",
                state: {
                    from: this.props.location,
                    error: error
                }
            }} />;
        }
    }
}

export default OAuth2RedirectHandler;