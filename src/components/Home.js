import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      text:"Hi, I'm Jos. I'm a front-end web developer.",
        count:0,
        show:"",
      }
      this.update = this.update.bind(this);
    }
    
    componentDidMount() {
      this.timerID = setInterval(
        () => this.update(),
        100
      );
    }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    
    update(){
      const counter = this.state.count;
      const letter = this.state.text.charAt(counter);
      const textlength = this.state.text.length;
      //let text += letter;
      
      if(counter <= textlength){
      this.setState({
        show: this.state.show + letter,
        count: this.state.count + 1,
      });
      }else{
        clearInterval(this.timerID);
      }
    }
  
    render() {
      return (
        <main>
            <div className="home-container">
                <h1>{this.state.show}</h1>
            </div>
            <div className="home-btn">
              <div className="centerer">
                <Link to="/portfoliopage">See my latest work</Link>
              </div>
                
            </div> 
        </main>
      );
    }
  }

  export default Home; 