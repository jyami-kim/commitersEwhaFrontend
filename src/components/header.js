import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import profileIcon from '../assets/icon/header/icon_myprofile@3x.png'
import noticeIcon from '../assets/icon/header/icon_notice@3x.png'


class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hovering: false
        }
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    handleMouseHover() {
        this.setState({
            hovering: !this.state.hovering,
        });
    }

    render() {
        const styleDefault = { textDecoration: 'none', color: '#2b2b2b' };
        const styleCurrent = { textDecoration: 'none', color: '#00462a', borderBottom: "0.125rem solid #00462a" };

        return (
            <div className="header-container">
                <Link to="/" className="logo-box"><img src={this.props.seasonLogo} alt="logo winter" className="logo" /></Link>
                <div className="header-nav">
                    <Link to="/Ranking" style={this.props.sectionName === "Ranking" ? styleCurrent : styleDefault}>이화랭킹</Link>
                    <Link to="/Community" style={this.props.sectionName === "Community" ? styleCurrent : styleDefault}>커뮤니티</Link>
                    <Link to="/SideProject" style={this.props.sectionName === "SideProject" ? styleCurrent : styleDefault}>사이드 프로젝트</Link>
                    <Link to="/TechRSS" style={this.props.sectionName === "TechRss" ? styleCurrent : styleDefault}>테크RSS</Link>
                    <Link to="/notification"><img src={noticeIcon} alt="notification icon" className="icon" /></Link>
                    <Link to="/MyProfile"><img src={profileIcon} alt="profile icon" className="icon" /></Link>
                </div>
            </div>
        )
    }

}

export default Header
