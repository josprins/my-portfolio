import React from 'react';
import Navigation from '../../Navigation'
import 'aos/dist/aos.css';

const ParallaxEffect = () => {
    return (
        <div>
            <Navigation />
            <div data-aos="fade-up" data-aos-duration="1200" className="main-portfolio-item main-parallax">
                <h1>Parallax Effect</h1>
                <img src={require("../images/paradise.jpg")} alt=""/>
                <p>For this project I've created the parallax effect using just HTML and CSS.</p>
                <p>Parallax scrolling is a scrolling technique used in computer graphics in which background images move more slowly than images or text in the foreground, creating the illusion of depth and immersion.</p>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/parallax">LIVE DEMO</a>
                    <a href="https://github.com/josprins/parallax">GITHUB REPOSITORY</a>
                </div>
                
            </div>
        </div>
    );
};

export default ParallaxEffect;