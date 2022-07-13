import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
// import img1 from '../../images/logo_white_dot.png';


export default function NavigationBar() {
    const { pathname } = useLocation();

    const selectedPageClass = "text-white underline-red font-smaller";
    const notSelected = "font-smaller";

    return (
        < >
            <Navbar bg="black" expand="lg" variant="dark" className="recursiveFont">
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
                            <Nav.Link as={Link} to="/" className={pathname === "/" ? selectedPageClass : notSelected}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/portfolio" className={pathname === "/portfolio" ? selectedPageClass : notSelected}>
                                Portfolio
                            </Nav.Link>
                            <Nav.Link as={Link} to="/resume" className={pathname === "/resume" ? selectedPageClass : notSelected}>
                                Resume
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" className={pathname === "/contact" ? selectedPageClass : notSelected}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
