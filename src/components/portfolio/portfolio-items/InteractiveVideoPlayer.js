import React from 'react';
import Navigation from '../../Navigation'
import 'aos/dist/aos.css';

const InteractiveVideoPlayer = () => {
    return (
        <div>
            <Navigation />
            <div data-aos="fade-up" data-aos-duration="1200" className="main-portfolio-item main-parallax">
                <h1>Interactive Video Player</h1>
                <img src={require("../images/videoplayer.png")} alt=""/>
                <p>In this project I've build an HTML5 video player using JavaScript and the HTML5 Video API</p>
                <p>The transcript placed below the video highlights as the video progresses.</p>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/techdegree-project-6/">LIVE DEMO</a>
                    <a href="https://github.com/josprins/techdegree-project-6">GITHUB REPOSITORY</a>
                </div>
                
            </div>
        </div>
    );
};

export default InteractiveVideoPlayer;