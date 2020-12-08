import React, { Component } from 'react'
import './css/Welcome.css'
import { GOOGLE_AUTH_URL } from '../constants';
import LoginLogo from '../assets/images/main_text_winter@3x.png'

export class Welcome extends Component {
    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={LoginLogo} alt="Login" /></a>
            </div>
        )
    }
}

export default Welcome