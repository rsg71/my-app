import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import "./Contact.css";



import { init } from '@emailjs/browser';
init("user_sw3Id8dB1tRbzmfwsA1sj");


export default function Contact() {
    return (
        <div className="bg-black text-white ">

            <NavigationBar />

            <Jumbotron title="Contact" />

            <div className="homeContainer paddingHomepage">

                <ContactForm />
            </div>

            <Footer />
        </div>
    );
}
