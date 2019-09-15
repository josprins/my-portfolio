import React from 'react';
import Navigation from '../../Navigation'
import 'aos/dist/aos.css';

const GameShowApp = () => {
    return (
        <div>
            <Navigation />
            <div data-aos="fade-up" data-aos-duration="1200" className="main-portfolio-item main-parallax">
                <h1>Game Show App</h1>
                <img src={require("../images/gameshowapp.png")} alt=""/>
                <p>In this project I've created a browser version of “Wheel of Success”, a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.</p>
                <p>Using Javascript, I've created an array of phrases and wrote functions to choose a random phrase from that array, split the phrase into letters, and put those letters onto the gameboard, if guessed correctly.</p>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/techdegree-project-7">LIVE DEMO</a>
                    <a href="https://github.com/josprins/techdegree-project-7">GITHUB REPOSITORY</a>
                </div>
                
            </div>
        </div>
    );
};

export default GameShowApp;