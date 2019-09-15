import React from 'react';
import Navigation from '../../Navigation'
import 'aos/dist/aos.css';

const OnlineRegistrationForm = () => {
    return (
        <div>
            <Navigation />
            <div data-aos="fade-up" data-aos-duration="1200" className="main-portfolio-item main-parallax">
                <h1>Online Registration Form</h1>
                <img src={require("../images/signupform.png")} alt=""/>
                <p>In this project I've build a responsive, mobile-friendly registration form using a wide variety of HTML form input types and attributes.</p>
                <p>I've build a mobile and desktop version of the form using media queries, and a "mobile-first" approach.</p>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/techdegree-project-3/">LIVE DEMO</a>
                    <a href="https://github.com/josprins/techdegree-project-3">GITHUB REPOSITORY</a>
                </div>
                
            </div>
        </div>
    );
};

export default OnlineRegistrationForm;