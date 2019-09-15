import React, { Component } from 'react'

import Contact from './components/Contact'
import Home from './components/Home'
import PortfolioPage from './components/portfolio/PortfolioPage'

import ParallaxEffect from './components/portfolio/portfolio-items/ParallaxEffect'
import FlickrGallery from './components/portfolio/portfolio-items/FlickrGallery'
import GameShowApp from './components/portfolio/portfolio-items/GameShowApp'
import InteractiveVideoPlayer from './components/portfolio/portfolio-items/InteractiveVideoPlayer'
import OnlineRegistrationForm from './components/portfolio/portfolio-items/OnlineRegistrationForm'
import Todo from './components/portfolio/portfolio-items/Todo'

import { BrowserRouter, Route } from 'react-router-dom'
import './css/main.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/portfoliopage" component={PortfolioPage}/>
          <Route path="/parallaxeffect" component={ParallaxEffect}/>
          <Route path="/flickrgallery" component={FlickrGallery}/>
          <Route path="/gameshow" component={GameShowApp}/>
          <Route path="/videoplayer" component={InteractiveVideoPlayer}/>
          <Route path="/registrationform" component={OnlineRegistrationForm}/>
          <Route path="/todoapp" component={Todo}/>
        </div>
      </BrowserRouter>

    )
  }
}



