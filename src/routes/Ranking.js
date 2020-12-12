import React, { Component } from 'react'
import Header from '../components/Header'

export class Ranking extends Component {
    render() {
        return (
            <div>
                <Header seasonLogo={this.props.seasonLogo} sectionName = "ranking"></Header>
              <h1>Ranking</h1>  
            </div>
        )
    }
}

export default Ranking
