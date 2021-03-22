import React from 'react';
import Logo from './Logo/Logo';

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <button className="header__add-btn">Add new</button>
        </header>
    )
};

export default Header;