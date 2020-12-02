import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo/logo_winter@3x.png'
import profileIcon from '../assets/icon/header/icon_myprofile@3x.png'
import noticeIcon from '../assets/icon/icon_notice@3x.png'


const Header = ({sectionName}) => {

    const styleDefault = {textDecoration: 'none' ,color: '#2b2b2b'};
    const styleCurrent = {textDecoration: 'none' ,color: '#00462a', borderBottom : "0.125rem solid #00462a"}
    ;
    return(
            <div className ="header-container">
                <Link to = "/" className="logo-box"><img src={logo} alt="logo winter" className = "logo"/></Link>
                <div className="header-nav">
                    <Link to = "/Ranking" style={sectionName ==="Ranking" ? styleCurrent :styleDefault}>이화랭킹</Link>
                    <Link to = "/Community" style={sectionName ==="Community" ? styleCurrent :styleDefault}>커뮤니티</Link>
                    <Link to = "/SideProject" style={sectionName ==="SideProject" ? styleCurrent :styleDefault }>사이드 프로젝트</Link>
                    <Link to = "/TechRSS" style={sectionName ==="TechRss" ? styleCurrent :styleDefault }>테크RSS</Link>
                    <div>
                        <img src = {noticeIcon} alt = "profile icon" className ="icon"/>
                    </div>
                    <Link to = "/MyProfile" style = {{margin :0}}>
                        <img src = {profileIcon} alt = "profile icon" className ="icon"/>
                    </Link>
                </div>
            </div>
        )
}

export default Header
