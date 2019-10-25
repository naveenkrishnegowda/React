import React from 'react';
import  './Header.css';
import logo from './image4.png';

function Header() {
    return(
        <div class="logo">
        <img src={logo} alt="logoimage"/>
        </div>
    );
}
export default Header;