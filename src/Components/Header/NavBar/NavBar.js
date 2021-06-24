import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { UseContext } from '../../../App';
import Logo from '../../../images/logo/logo.png'

const NavBar = () => {
    const [loggedInUser, setLoggedInUse] = useContext(UseContext)
    const handelSignOut = () => {
        setLoggedInUse({});
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Navbar.Brand href="/"><img style={{ width: '200px' }} src={Logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle style={{ backgroundColor: 'gray' }} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link style={{ color: 'black' }} href="/">Home</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} href="/destination">Destination</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} href="/blog">Blog</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} href="/contact">Contact</Nav.Link>
                    <Nav.Link style={{ color: 'black', backgroundColor: "blue", borderRadius: '10px', color: 'white', paddingLeft: "15px", paddingRight: '15px', textAlign: 'center' }} href="/login">Login</Nav.Link>
                    <Button style={
                        {
                            color: 'black',
                            backgroundColor: "red",
                            borderRadius: '10px',
                            color: 'white',
                            paddingLeft: "15px",
                            paddingRight: '15px',
                            textAlign: 'center',
                            outline: 'none'
                        }} onClick={handelSignOut} >Log Out</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;