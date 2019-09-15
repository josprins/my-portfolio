import React from 'react';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init()

const PortfolioCard = props => {
    return (
        <div data-aos="fade-up" data-aos-duration="1400" className="main-card">
            <div className="card-item">
                <img className="card-img" variant="top" src={props.img} alt={props.alt}/>
                <div className="card-body">
                    <h3>{props.title}</h3>
                    <div className="card-link">
                        <Link to={props.linkTo}>{props.linkName}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
