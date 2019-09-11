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
            />
            <PortfolioCard 
                title="Registration Form" 
                img={require("./images/signupform.png")} 
                text="Registration or contact form."
                linkTo="/registrationform"
                linkName="Learn more"
            />
            <PortfolioCard 
                title="SVG Animations" 
                img={require("./images/svganimations.png")}
                text="Using scalable vector graphics to animate images."
                linkTo="/svganimations"
                linkName="Learn more"
            />
            <PortfolioCard 
                title="Interactive Video Player" 
                img={require("./images/videoplayer.png")}
                text="Making videos interactive."
                linkTo="/videoplayer"
                linkName="Learn more"
            />
            <PortfolioCard 
                title="Game Show App" 
                img={require("./images/gameshowapp.png")}
                text="A fun word guessing game."
                linkTo="/gameshow"
                linkName="Learn more"
            />
            <PortfolioCard 
                title="Todo React App" 
                img={require("./images/todolist.png")}
                text="An app to make your own todo list."
                linkTo="/todoapp"
                linkName="Learn more"
            />
            <PortfolioCard 
                title="Flickr API Gallery" 
                img={require("./images/Results-Layout.png")}
                text="A photo gallery using the FlickR API."
                linkTo="/flickrgallery"
                linkName="Learn more"
            />                       
        </div>
    );
};

export default PortfolioPage;