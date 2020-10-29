import React from 'react'
import "./css/Header.css"
import  imagesLogo from "./img/web-logo.png"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={imagesLogo} alt="" />
            </div>

            <div className="header__middle"></div>

            <div className="header__right"></div>
        </div>
    )
}

export default Header
