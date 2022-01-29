import React from 'react';
import Footer from '../../components/Footer/Footer';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

export default function Resume() {
    return (
        <div className="bg-black text-white">
            <NavigationBar />

            <Jumbotron title="Resume" />


            <div className="container" style={{ maxWidth: "60%" }} id="resumeContainer">
                <div className="row" style={{ fontSize: "2rem", marginTop: "1.5em" }}>
                    <div className="col">
                        <a href="https://docs.google.com/document/d/19iZ_UxZIsaVECLY9n4aJoDDNAEUgPlNMB02JdeULLEM/edit?usp=sharing"
                            target="_blank" rel="noreferrer" className="btn btn-outline-primary">Download <svg width="1em" height="1em" viewBox="0 0 16 16"
                                className="bi bi-file-earmark-arrow-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4a.5.5 0 0 0-1 0v3.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 11.293V7.5z" />
                            </svg></a>
                    </div>
                </div>

                <br />

                <div className="row" style={{ marginBottom: "20em" }}>
                    <div className="col-lg-12">
                        <img src={process.env.PUBLIC_URL+"imgs/resume/resume-robert.png"} className="resume mb-5" alt="resume"/>
                    </div>
                </div>

            </div>


        </div >
    );
}
