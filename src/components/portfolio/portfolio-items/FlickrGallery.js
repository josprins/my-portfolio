import React from 'react';
import Navigation from '../../Navigation'
import 'aos/dist/aos.css';

const FlickrGallery = () => {
    return (
        <div>
            <Navigation />
            <div data-aos="fade-up" data-aos-duration="1200" className="main-portfolio-item main-parallax">
                <h1>FlickR API Gallery</h1>
                <img src={require("../images/Results-Layout.png")} alt=""/>
                <p>In this project, I've build an image gallery using React, React-router and Axios to fetch data from the Flickr API.</p>
                <p>React Router is the standard routing library for React. From the docs: “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.</p>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/parallax">LIVE DEMO</a>
                    <a href="https://github.com/josprins/parallax">GITHUB REPOSITORY</a>
                </div>
                
            </div>
        </div>
    );
};

export default FlickrGallery;