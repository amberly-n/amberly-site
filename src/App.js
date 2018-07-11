import React, { Component } from 'react';
import logoA from './logoA.svg';
import './App.css';
import Lottie from 'react-lottie';
import * as animationData from './pokemon.json'

{/*}
const Nav = React.createClass( {
  render: function() {
    return(
      <nav>
        <div className="navBig">
          <div className="bigLinks">
            <a href="#works">About</a>
            <a href="#works">Works</a>
            <a href="#works">Resume</a>
          </div>
        </div>

        <div className="navSmall">
          <i className="fa fa-bars fa-2x" onClick={this.menuToggle}></i>
          <div className="smallLinks">
            <a href="#works" onClick={this.menuToggle}>About</a>
            <a href="#works" onClick={this.menuToggle}>Works</a>
            <a href="#works" onClick={this.menuToggle}>Resume</a>
          </div>
        </div>
      </nav>
    );
  },
    menuToggle: function() {
      let links = document.querySelector('.smallLinks');
      if (links.style.display === 'block') {
        links.style.display = 'none';
      } else {
        links.style.display = 'block';
      }

    }
});
*/}

const Kitchin = () => {
  return (
      <div>
        <h2> Kitchin </h2>
        <p> Skills used: graphic design, html, css, UI/UX </p>
        <img src={require('./kitchin.jpg') }   />
      </div>

  );
  };

const Stellarium = () => {
  return (
      <div>
        <h2> Stellarium </h2>
        <p> Skills used: Adobe After Effects, Adobe Illustrator </p>
        <img src={require('./stellarium.png')}  />
      </div>
  );
  };

const Other = () => {
  return (
      <div>
        <h2> Other </h2>
        <p> Skills used: Adobe Illustrator, Adobe Photoshop, Adobe InDesign </p>
      </div>
  );
  };

const Works = () => {
  return (
    <div>
      <h1 id="works"> Works </h1>
      <p> some work </p>

      <Kitchin  />
      <Stellarium />
      <Other  />
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div className="App">
        <header className="App-header">
          <a href="#work"><img src={logoA} className="App-logo" alt="logo" /> </a>
          {/*<h1 className="App-title">Amberly</h1> */}
          
          <ul class="main-nav">
          <li><a href="#work">About</a></li>
          <li><a href="#work">Portfolio</a></li>
          <li><a href="#work">Resume</a></li>
        </ul>
          
          
          
          <Lottie options={defaultOptions}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
          
        
        </header>
        <p className="App-intro">
          Welcome to my site.
        </p>
            
      <Works  />
      </div>
        );
    }
  }

        {/*class PortfolioWorks extends React.Component {
          constructor(props) {
            super(props);
          }

          render() {
            return (
              <div>
                <h1> Works </h1>
                  <Kitchin  />
                  <Stellarium  />
                  <Other  />
              </div>
            );
          }
        };
        ReactDOM.render(<  />, document.getElementById("challenge-node")); */}






export default App;
