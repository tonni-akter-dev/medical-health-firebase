import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    const navDesign={
color:'red',

    }
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="/images/Banner&Background/logo.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <NavLink className="navD" activeStyle={navDesign} to='/home'>Home</NavLink>
                            <NavLink className="navD" activeStyle={navDesign} to='/shop'>Shop</NavLink>
                            <NavLink className="navD" activeStyle={navDesign} to='/contact'>Contact</NavLink>
                            <NavLink className="navD" activeStyle={navDesign} to='/about'>About</NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;