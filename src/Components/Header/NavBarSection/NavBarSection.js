import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../images/logo/logo.png';
import './NavBarSection.css';


const NavBarSection = () => {
    return (
        <div>
            <Navbar style={{ marginTop: '10px' }} collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/"><img style={{ width: '250px' }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: 'rgba(0, 0, 0, 0.400)' }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link id='c_black' href="/">Home</Nav.Link>
                        <Nav.Link id='c_black' href="#">Destination</Nav.Link>
                        <Nav.Link id='c_black' href="#">Blog</Nav.Link>
                        <Nav.Link id='c_black' href="#">Contract</Nav.Link>
                        <Button style={{ marginLeft: '10px' }}>
                        <a style={{color:'white', textDecoration:'none'}} href="/login">Login</a>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBarSection;