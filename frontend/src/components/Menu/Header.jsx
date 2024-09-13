import React from 'react';
import '../../menu.css';
import Logo from "../../assets/logo.jpg"

function Header() {
    return (
        <header id="main-header">
            
        <div id="title">
            <img src={Logo} alt="Logo" />
            <h1>Menu</h1>
        </div>
        <nav>
            <button>
                Cart(0);    
            </button>
        </nav>
        </header>
    )
}

export default Header;