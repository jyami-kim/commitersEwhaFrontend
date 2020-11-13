import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Main.css'

export class Main extends Component {
    render() {
        return (
            <div className = "main-container">
               <Header className="main-header"></Header>
               <div className = "main-body">
                   <h1>main</h1>
                </div>
               <Footer className="main-footer"></Footer>
            </div>
        )
    }
}

export default Main
