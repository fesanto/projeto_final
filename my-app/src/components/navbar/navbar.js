import React from 'react'
import logo from './logo-mobile.png'
//  import Menu from './menu'
import './navbar.css'

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <img
                className='navbar__logo'
                src={logo}
                alt='logo esclarecendo a esclerose múltipla tem um sol e a frase nome do site em laranja'
            />
            {/* <Menu {...props} /> */}
        </nav>
    );
};

export default Navbar