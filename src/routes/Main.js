import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../constants';
import { Redirect, Route } from 'react-router-dom'
import PrivateRoute from '../common/PrivateRoute';
import Dashboard from './Dashboard'
import Welcome from './Welcome'

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {        
        const auth = this.props.authenticated;
        if(auth) {
            return <PrivateRoute exact path="/" authenticated={this.props.authenticated} currentUser={this.props.currentUser} component={Dashboard} />
        } else {
            return <Route exact path="/" component={Welcome} />
        }
    }
}

export default Main;