import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return(
        <div className = "header-container">
           <h3 className = "logo">LOGO</h3>
           <div className="header-nav">
                <Link className="nav-1" to = "/Ranking">이화랭킹</Link>
                <Link className="nav-2" to = "/Community">커뮤니티</Link>
                <Link className="nav-3" to = "/SideProject">사이드 프로젝트</Link>
                <Link className="nav-4" to = "/TechRSS">테크RSS</Link>
                <div className="nav-5">종</div>
                <Link className="nav-6" to = "/MyProfile">프로필그림</Link>
            </div>
        </div>
        )
}

export default Header
