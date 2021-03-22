import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({
    scrollUp,
}) => {
    return (
        <Link onClick={scrollUp} to="/elitex-test-task/" className="header__logo" style={{backgroundImage: 'url(/elitex-test-task/images/movies-lib-logo.png)'}}></Link>   
    )
};

export default Logo;