import React from 'react';

export default function ProjectCard({ project }) {
    const { imageSource, imageAlt, projectLink, repoLink } = project;

    return (
        <div class="row animate__animated animate__fadeIn">
                <div class="image">
                    <img class="image__img" src={imageSource} alt={imageAlt} style={{maxWidth:"100%"}}/>
                    <div class="image__overlay">
                        <div class="image__title">Table Turner </div>
                        <p class="image__description introlight">
                            MERN Stack, Passport.js, bcrypt.js
                        </p>
                        <span>
                            <a class="btn btn-light" target="_blank" href={projectLink} rel="noreferrer">View
                                Project</a>
                            <a class="btn btn-dark" target="_blank" href={repoLink} rel="noreferrer"> <i
                                class="fas fa-code"></i> View Code</a>
                        </span>
                    </div>
            </div>
        </div>
    )
}
