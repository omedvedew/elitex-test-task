import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo/Logo';

const Header = ({
    scrollUp,
}) => {
    return (
        <header className="header">
            <Logo
                scrollUp={scrollUp}
            />
            <Link onClick={scrollUp} to="/elitex-test-task/add-movie-page" className="header__add-btn">Add new</Link>
        </header>
    )
};

export default Header;