import React, { Component, Redirect } from 'react'
import './css/Welcome.css'
import { GOOGLE_AUTH_URL, ACCESS_TOKEN } from '../constants';
import LoginLogo from '../assets/images/main_text_winter@3x.png'
import { connect } from 'react-redux';

import { getCurrentUser } from '../api/APIUtils'
import { getEwhaJobInfo } from '../api/APIScrap'

export class Welcome extends Component {

    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={LoginLogo} alt="Login" /></a>
                {/* {this.props.value} */}
            </div>
        )
    }
}

export default Welcome;
