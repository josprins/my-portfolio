import React from 'react';

const PortfolioItem = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.src} alt={props.alt} />
            <p>{props.text}</p>
            <a>{props.demo}</a>
            <a>{props.github}</a>
        </div>
    );
};

export default PortfolioItem;