import React from 'react';
import NavBar from './NavBar/NavBar';
import Background from '../../images/background/background.jpg'
import './Header.css'

const Header = () => {
    return (
        <>
            <img id='body-bg' src={Background} alt=""/>
            <NavBar />          
        </>        
    );
};

export default Header;