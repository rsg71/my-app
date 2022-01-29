import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import myProjects from '../../data/Projects';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import "./Portfolio.css";
import Jumbotron from '../../components/Jumbotron/Jumbotron';

export default function Portfolio() {

    return (
        <div className="bg-black text-white">

            <NavigationBar />

            <Jumbotron title="Portfolio" />

            <Container fluid className="px-0 appContainer">
                <div className="homeContainer">

                    <Row className="mt-3">
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
            </Container>

        </div>
    );
}
