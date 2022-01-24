import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import img1 from '../../images/logo_white_dot.png';


export default function NavigationBar() {

    return (
        < >
            <Navbar bg="black" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" >
                        <img
                            src={"imgs/logo_white_dot.png"}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="RG logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
