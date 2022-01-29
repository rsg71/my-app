import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import myProjects from '../../data/Projects';
import "./Home.css"

export default function Home() {
    return (
        <div className="bg-black">
            <NavigationBar />

            {/* md={{ span: 3, offset: 1 }} */}
            <div>
                <Row className="bg-black text-white my-5" >
                    <Col xs={{ span: 11, offset: 1 }} md={{ span: 3, offset: 2 }} className="mb-4">
                        <h1 style={{ fontSize: "3.5em", letterSpacing: ".05em" }} id="introHello">Hello,</h1>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} md={{ span: 4 }} >
                        <div className="homePageLinks">
                            <h1>
                                &#91; <a href="https://github.com/rsg71" className="text-decoration-none" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a> , <a href="https://www.linkedin.com/in/robert-greenawalt/" className="text-decoration-none" target="_blank" rel="noreferrer"><i
                                    className="fab fa-linkedin"></i></a> , <a href="mailto:robert.greenawalt29@gmail.com" className="text-decoration-none"><i
                                        className="far fa-envelope"></i></a> &#93;
                            </h1>
                        </div>
                    </Col>
                </Row>


                <Row className="bg-black text-white my-5">
                    <Col xs={{ span: 11, offset: 1 }} md={{ span: 8, offset: 2 }}>
                        <div className="row animate__animated animate__fadeIn">
                            <div>
                                <h2 className="recursiveFont"> I'm Robert, a <em className="recursiveFont">full-stack developer</em> and lifelong
                                    learner.</h2>
                                <br />
                                <p className="coreCompetencies">Core competencies include: MongoDB, MySQL, Express, React, and Node. Check
                                    out
                                    some of my work in my <a href="portfolio.html">portfolio</a>, add me on <a
                                        href="https://www.linkedin.com/in/robert-greenawalt-43457a14a/" target="_blank" rel="noreferrer">LinkedIn</a>, or send me an
                                    <a href="contact.html"> email</a>.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={{ span: 11, offset: 1 }} md={{ span: 8, offset: 2 }}>

                        <Row className="mb-3">
                            <Col sm={12}>
                                <h3 className="projects animate__animated animate__fadeIn text-white">P r o j e c t s :</h3>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            {myProjects.slice(0, 2).map(project => (
                                <Col key={project.id} sm={6} md={6} lg={6} className="mb-3">
                                    <ProjectCard project={project} />
                                </Col>
                            ))}
                        </Row>

                        <Row className="mb-3">
                            {myProjects.slice(2, 4).map(project => (
                                <Col key={project.id} sm={6} md={6} lg={6} className="mb-3">
                                    <ProjectCard project={project} />
                                </Col>
                            ))}
                        </Row>

                        <Row className="mb-3">
                            {myProjects.slice(4, 6).map(project => (
                                <Col key={project.id} sm={6} md={6} lg={6} className="mb-3">
                                    <ProjectCard project={project} />
                                </Col>
                            ))}
                        </Row>

                        <Row className="mb-3">
                            {myProjects.slice(6, 8).map(project => (
                                <Col key={project.id} sm={6} md={6} lg={6} className="mb-3">
                                    <ProjectCard project={project} />
                                </Col>
                            ))}
                        </Row>

                    </Col>
                </Row>

            </div>


        </div >
    );
}
