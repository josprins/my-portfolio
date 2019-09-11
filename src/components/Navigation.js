import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.openNav = this.openNav.bind(this)
        this.state = {
            classActive: false
        }
    }

    openNav = () => {
        const currentState = this.state.classActive;
        this.setState({ classActive: !currentState })
    }

    closeNav = () => {
        const currentState = this.state.classActive;
        this.setState({ classActive: !currentState })
    }

    render() {
        return (
            <div className="menu">
                <div id={this.state.classActive ? 'myNav-open' : 'myNav-close'} className="overlay">
                    <div href="#" className="closebtn" onClick={this.closeNav}>&times;</div>
                    <div className="overlay-content">
                        <Link to="/">Home</Link>
                        <Link to="/portfoliopage">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="menu-content">
                        <Link to="/">Home</Link>
                        <Link to="/portfoliopage">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                <span onClick={this.openNav}>&#9776;</span>
                <h3>Jos Prins</h3>
            </div>
        )
    }
}

