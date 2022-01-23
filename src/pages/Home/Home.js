import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from '../../components/NavigationBar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import myProjects from '../../data/Projects';
import "./Home.css"

export default function Home() {
    return (
        <>
            <NavigationBar />

            <Row className="bg-black text-white px-5">
                <Col>
                    <h1 style={{ fontSize: "3.5em", letterSpacing: ".05em" }} id="introHello">Hello,</h1>
                </Col>
                <Col></Col>
                <Col>
                    <h1>
                        &#91; <a href="https://github.com/rsg71" class="text-decoration-none" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a> ,
                        <a href="https://www.linkedin.com/in/robert-greenawalt/" class="text-decoration-none" target="_blank" rel="noreferrer"><i
                            class="fab fa-linkedin"></i></a> ,
                        <a href="mailto:robert.greenawalt29@gmail.com" class="text-decoration-none"><i
                            class="far fa-envelope"></i></a> &#93;
                    </h1>
                </Col>
            </Row>
            <div className="bg-black">


                <Row className="bg-black text-white px-5">
                    <Col>
                        <div class="row animate__animated animate__fadeIn">
                            <div class="col-sm-12">
                                <h2 class="recursiveFont"> I'm Robert, a <em class="recursiveFont">full-stack developer</em> and lifelong
                                    learner.</h2>
                                <br />
                                <p class="coreCompetencies">Core competencies include: MongoDB, MySQL, Express, React, and Node. Check
                                    out
                                    some of my work in my <a href="portfolio.html">portfolio</a>, add me on <a
                                        href="https://www.linkedin.com/in/robert-greenawalt-43457a14a/" target="_blank" rel="noreferrer">LinkedIn</a>, or send me an
                                    <a href="contact.html">email</a>.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div class="col-sm-12">
                        <h3 class="projects animate__animated animate__fadeIn text-white">P r o j e c t s :</h3>
                    </div>
                    <br />
                </Row>

                <Row>
                    {myProjects.slice(0, 2).map(project => (
                        <Col key={project.id} sm={6} md={6} lg={4} className="mb-3">
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>

                <Row>
                    {myProjects.slice(2, 4).map(project => (
                          <Col key={project.id} sm={6} md={6} lg={4} className="mb-3">
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>

                <Row>
                    {myProjects.slice(4, 6).map(project => (
                        <Col key={project.id} sm={6} md={6} lg={4} className="mb-3">
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>

                <Row>
                    {myProjects.slice(6, 8).map(project => (
                         <Col key={project.id} sm={6} md={6} lg={4} className="mb-3">
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>

              
            </div>

        </>
    );
}
