import React from 'react';

export default function ProjectCard({ project }) {
    const { imageSource, imageAlt, projectLink, repoLink } = project;

    return (
        <div className="animate__animated animate__fadeIn">
                <div className="image">
                    <img className="image__img" src={imageSource} alt={imageAlt} style={{maxWidth:"100%"}}/>
                    <div className="image__overlay">
                        <div className="image__title">Table Turner </div>
                        <p className="image__description introlight">
                            MERN Stack, Passport.js, bcrypt.js
                        </p>
                        <span>
                            <a className="btn btn-light" target="_blank" href={projectLink} rel="noreferrer">View
                                Project</a>
                            <a className="btn btn-dark" target="_blank" href={repoLink} rel="noreferrer"> <i
                                className="fas fa-code"></i> View Code</a>
                        </span>
                    </div>
            </div>
        </div>
    )
}
