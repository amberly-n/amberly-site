import React, { Component } from 'react';
import logoA from './logoA.svg';
import './App.css';
import Lottie from 'react-lottie';
import * as animationData from './pokemon.json'


const Kitchin = () => {
  return (
      <div class="container">
        <img src={require('./images/kitchin.png')} alt="kitchin" class="responsive"   />
        <div class="overlay">
          <p class="text"> Kitchin </p>
          <p class="subtext"> UI/UX </p>
        </div>    
      </div>

  );
  };

const Stellarium = () => {
  return (
      <div class="container">
        <img src={require('./images/stellarium.png')}  alt="stellarium" class="responsive"/>
        <div class="overlay">
          <p class="text"> Stellarium </p>
          <p class="subtext"> After Effects, Illustrator </p>
        </div>
      </div>
  );
  };

const SASE = () => {
  return (
      <div class="container">
        <img src={require('./images/saselogo.png')}  alt="stellarium" class="responsive"/>
        <div class="overlay">
          <p class="text"> SASE </p>
          <p class="subtext"> Photoshop, Illustrator, InDesign </p>
        </div>
      </div>
  );
  };
const KOTX = () => {
  return (
      <div class="container">
        <img src={require('./images/kotx.png')} alt="other" class="responsive"/>
        <div class="overlay">
          <p class="text"> KOTX </p>
          <p class="subtext"> Photoshop, After Effects</p>
        </div>
      </div>
  );
  };

const Works = () => {
  return (
    <div>
      <h1 id="works"> Works </h1>

      <div class="row">
        <div class="column">
          <Kitchin  />
        </div>
        <div class="column">
          <Stellarium />
        </div>
        <div class="column">
          <SASE />
        </div>
        <div class="column">
          <KOTX />
        </div>
      </div>

      
        
        
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
          
          {/*<h1 className="App-title">Amberly</h1> */}
          <a href="#"><img src={logoA} className="App-logo" alt="logo" /> </a> 
          <ul class="main-nav">
            <li><a href="#">amberly ngo</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Portfolio</a></li>
            <li><a href="amdoingstuff.tumblr.com" target="_blank">journal</a></li>
          </ul>
        </header>

        <div class="animation">
          <Lottie options={defaultOptions}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
        </div>
        
        <p className="App-intro" id="about"nav>
          Hi I'm Amberly! Student at UC San Diego studying Computing and Visual Arts. 
          When I'm not in front of the computer coding, designing, or animating, I'm either
          working out, travelling, or playing co-op games. Also interested in good music and good food. 
          Still in training, but I'm determined to make my way no matter 
          low long it takes. I love a good conversation! I'd love to chat through LinkedIn, Dribbble, Github, Instagram, or Email.
        </p>
        

        <div class="container">
          <Works  />
        </div>
     
        


       </div>
        );
    }
  }


export default App;
