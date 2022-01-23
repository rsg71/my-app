import React from 'react';
import Footer from '../../components/Footer/Footer';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

export default function Resume() {
    return (
        <div>
            Resume Page

            <NavigationBar />

            <Jumbotron  title="Resume"/>
            <Footer />
        </div>
    );
}
