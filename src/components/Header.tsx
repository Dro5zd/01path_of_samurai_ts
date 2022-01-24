import logo from "../logo-abm.png";
import React from "react";
import './Header.css'

const Header = () => {
    return ( <header className='header'>
        <img
            src = {logo}
            alt='logo'/>
    </header>
    )
}

export default Header


