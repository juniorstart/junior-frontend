import React from 'react';
import Languages from'./Languages/Languages';
import './Header.css';

const Header = () => (
    <div className="header-wrapper wrapper">
        <h1 className="main-header"> Junior Start</h1>
        <Languages />
    </div>
)

export default Header;
