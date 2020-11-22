import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo/logo_winter@3x.png'


const Header = () => {
    return(
            <div className="header-nav">
                <Link to = "/" className="logo-box"><img src={logo} alt="logo winter" className = "logo"/></Link>
                <Link to = "/Ranking">이화랭킹</Link>
                <Link to = "/Community">커뮤니티</Link>
                <Link to = "/SideProject">사이드 프로젝트</Link>
                <Link to = "/TechRSS">테크RSS</Link>
                <div> 종</div>
                <Link to = "/MyProfile">프로필그림</Link>
            </div>
        )
}

export default Header
