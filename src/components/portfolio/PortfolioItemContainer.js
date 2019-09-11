import React from 'react';
import PortfolioItem from './PortfolioItem'

const PortfolioItemContainer = () => {
    return (
        <div>
            <PortfolioItem 
            title="Test 1" 
            src={require("./images/signupform.png")} 
            text="Dolor ea occaecat officia quis non magna. Exercitation voluptate amet ut non deserunt minim anim pariatur eiusmod officia fugiat qui ad anim. Et non do ut tempor."
            demo="https://josprins.github.io/techdegree-project-8/"
            github="https://github.com/"
            />
        </div>
    );
};

export default PortfolioItemContainer;