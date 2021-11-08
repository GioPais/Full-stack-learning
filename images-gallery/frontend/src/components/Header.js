import React from 'react';
import { Navbar } from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: 'lightblue'
};

const Header = (props) => {
    const { title } = props;
    return (
        <Navbar style={navbarStyle} variant="light">
            <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Navbar>
    )
};

export default Header;