import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo/logo_winter@3x.png'


const Header = ({pageName}) => {

    const styleDefault = {textDecoration: 'none' ,color: '#2b2b2b'};
    const styleCurrent = {textDecoration: 'none' ,color: '#00462a'};
    return(
            <div className ="header-container">
                <Link to = "/" className="logo-box"><img src={logo} alt="logo winter" className = "logo"/></Link>
                <div className="header-nav">
                    <Link to = "/Ranking" style={pageName ==="Ranking" ? styleCurrent :styleDefault}>이화랭킹</Link>
                    <Link to = "/Community" style={pageName ==="Community" ? styleCurrent :styleDefault}>커뮤니티</Link>
                    <Link to = "/SideProject" style={pageName ==="SideProject" ? styleCurrent :styleDefault }>사이드 프로젝트</Link>
                    <Link to = "/TechRSS" style={pageName ==="TechRss" ? styleCurrent :styleDefault }>테크RSS</Link>
                    <div> 종</div>
                    <Link to = "/MyProfile" style={styleDefault}>프로필그림</Link>
                </div>
            </div>
        )
}

export default Header
