import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <div className="container-fluid fluidFooter mt-5" style={{ textAlign: "center" }}>
                <div className="row">
                    <div className="col">
                        <h5>Account Links</h5>
                        <p>
                            <a href="https://github.com/rsg71" target="_blank" rel="noreferrer">Github <i className="fab fa-github"></i></a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/robert-greenawalt/" target="_blank" rel="noreferrer">LinkedIn <i
                                className="fab fa-linkedin"></i></a>
                        </p>
                    </div>
                    <div className="col">
                        <h5>Site Navigation</h5>
                        <p><Link to="/portfolio">Portfolio</Link></p>
                        <p><Link to="/resume">Resume</Link></p>
                        <p><Link to="/contact">Contact</Link></p>
                    </div>
                    <div className="col">
                        <h5>Get in Touch</h5>
                        <p><a href="mailto:robert.greenawalt29@gmail.com">
                            robert.greenawalt29@gmail.com</a></p>
                        <p><a href="tel:215.913.7231">(215)-913-7231</a></p>
                    </div>
                </div>
            </div>

        </div>
    );

}
