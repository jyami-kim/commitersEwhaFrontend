import React, { Component } from 'react'
import Header from '../components/Header'

export class Notification extends Component {
    render() {
        return (
            <div>
            <Header seasonLogo={this.props.seasonLogo} sectionName = "notification"></Header>
              <h1>Notification</h1>  
            </div>
        )
    }
}

export default Notification
