import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
// import img1 from '../../images/logo_white_dot.png';


export default function NavigationBar() {
    const { pathname } = useLocation();


    return (
        < >
            <Navbar bg="black" expand="lg" variant="dark" >
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
                            <Nav.Link as={Link} to="/" className={pathname === "/" && "text-white"}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/portfolio" className={pathname === "/portfolio" && "text-white"}>
                                Portfolio
                            </Nav.Link>
                            <Nav.Link as={Link} to="/resume" className={pathname === "/resume" && "text-white"}>
                                Resume
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" className={pathname === "/contact" && "text-white"}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
