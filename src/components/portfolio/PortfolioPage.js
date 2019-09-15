import React from 'react';
import Navigation from '../Navigation'
import PortfolioCard from './PortfolioCard'

const PortfolioPage = () => {
    return (
        <div>
            <Navigation />
            <PortfolioCard 
                title="Parallax Scrolling Effect" 
                img={require("./images/paradise.jpg")} 
                text="This is a sweet scrolling effect."
                linkTo="/parallaxeffect"
                linkName="Learn more"
                alt="paradise"
            />
            <PortfolioCard 
                title="Registration Form" 
                img={require("./images/signupform.png")} 
                text="Registration or contact form."
                linkTo="/registrationform"
                linkName="Learn more"
                alt="form-img"
            />
            <PortfolioCard 
                title="Interactive Video Player" 
                img={require("./images/videoplayer.png")}
                text="Making videos interactive."
                linkTo="/videoplayer"
                linkName="Learn more"
                alt="video-player"
            />
            <PortfolioCard 
                title="Game Show App" 
                img={require("./images/gameshowapp.png")}
                text="A fun word guessing game."
                linkTo="/gameshow"
                linkName="Learn more"
                alt=""
            />
            <PortfolioCard 
                title="Todo React App" 
                img={require("./images/todolist.png")}
                text="An app to make your own todo list."
                linkTo="/todoapp"
                linkName="Learn more"
                alt="todo-app-img"
            />
            <PortfolioCard 
                title="Flickr API Gallery" 
                img={require("./images/Results-Layout.png")}
                text="A photo gallery using the FlickR API."
                linkTo="/flickrgallery"
                linkName="Learn more"
                alt="flickr-gallery-img"
            />                       
        </div>
    );
};

export default PortfolioPage;