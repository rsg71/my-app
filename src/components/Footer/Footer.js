import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

export default function Footer() {

    const PhoneIcon = () => <i className="fas fa-phone-alt me-2" style={{ fontSize: 'inherit' }}></i>;
    const EmailIcon = () => <i className="fas fa-envelope me-2"></i>;
    const GitHubIcon = () => <i className="fab fa-github me-2"></i>;
    const LinkedInIcon = () => <i className="fab fa-linkedin me-2"></i>;


    const year = new Date().getFullYear().toString();

    const styles = {
        myCol: 'ms-2'
    }

    return (
        <div style={{ marginTop: "6rem" }}>
            <div className="container-fluid fluidFooter mt-5" style={{ textAlign: "start" }}>
                <Row>
                    <Col sm={12} md={2} className="me-3"></Col>
                    <Col sm={12} md={3} className={styles.myCol}>
                        <h5 className="mb-3">Get in Touch</h5>
                        <p><a className="noUnderLine" href="mailto:robert.greenawalt29@gmail.com"><EmailIcon /> robert.greenawalt29@gmail.com</a></p>
                        <p><a className="noUnderLine" href="tel:215.913.7231"><PhoneIcon /> +1 (215) 913 7231</a></p>
                    </Col>
                    <Col sm={12} md={3} className={styles.myCol}>
                        <h5 className="mb-3">Account Links</h5>
                        <p>
                            <a className="noUnderLine" href="https://github.com/rsg71" target="_blank" rel="noreferrer"><GitHubIcon /> Github </a>
                        </p>
                        <p>
                            <a className="noUnderLine" href="https://www.linkedin.com/in/robert-greenawalt/" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn </a>
                        </p>
                    </Col>
                    <Col sm={12} md={3} className={styles.myCol}>
                        <h5 className="mb-3">Site Navigation</h5>
                        <p><Link to="/portfolio" className="noUnderLine">Portfolio</Link></p>
                        <p><Link to="/resume" className="noUnderLine">Resume</Link></p>
                        <p><Link to="/contact" className="noUnderLine">Contact</Link></p>
                    </Col>
                    <Col></Col>

                </Row>
                <Row className="pb-2">
                    <Col>
                        <div className="text-center text-secondary font-small">
                            Copyright &copy; {year} Robert Greenawalt
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );

}
