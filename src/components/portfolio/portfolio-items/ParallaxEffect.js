import React from 'react';
import Navigation from '../../Navigation'

const ParallaxEffect = () => {
    return (
        <div>
            <Navigation />
            <div className="main-parallax">
                <h1>Parallax Effect</h1>
                <p>For this project I created a website with the parallax effect.</p>
                <p>Parallax scrolling is a scrolling technique used in computer graphics in which background images move more slowly than images in the foreground, creating the illusion of depth and immersion.</p>
                <p><a>VISIT LIVE DEMO</a> or <a>VISIT GITHUB REPOSITORY</a></p> 
            </div>
        </div>
    );
};

export default ParallaxEffect;