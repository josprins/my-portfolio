import React, { Component } from 'react'
import Contact from './components/Contact'
import Home from './components/Home'
import PortfolioPage from './components/portfolio/PortfolioPage'
import ParallaxEffect from './components/portfolio/portfolio-items/ParallaxEffect'
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
        </div>
      </BrowserRouter>

    )
  }
}



