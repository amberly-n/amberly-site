import React, { Component } from 'react';
import logoA from './logoA.svg';
import './App.css';
import Lottie from 'react-lottie';
import { css } from 'emotion';
import * as animationData from './pokemon.json';
//import Responsive from 'react-responsive-background';

const Navbar = () => {
  return (
    <div className="main-nav">
      {/* <a href="#"><img src={logoA} className="App-logo" alt="logo" /> </a>  */}
      <h1 className="logo"><a href="#">[amberly ngo]</a></h1>
      <ul className="nav">
        <li><a href="#about">About</a></li>
        <li><a href="#works">Portfolio</a></li>
        <li><a href="amdoingstuff.tumblr.com" target="_blank">journal</a></li>
      </ul>
    </div>
  );
};


const Header = () => {
  return (
    <div class="imgcontainer">
        {/*<img src={require('./images/background.png')} /> */}
        <h1 className="header-name"> hi! im amberly </h1>
    </div>
  )
};


const kitchenContainerStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-height: 300px;
  max-width: 300px;
  padding: 0 20px;
`

const kitchenImageStyle = css`
  margin: 0 auto;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
  
`
const Kitchin = () => {
  return (
    <React.Fragment>
      <div className={kitchenContainerStyle}>
        <div class="overlay">
          <img src={require('./images/kitchin.png')} alt="kitchin" className={kitchenImageStyle} />
          <div class="centered-text">
            <p class="text"> Kitchin </p>
            <p class="subtext"> UI/UX </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Stellarium = () => {
  return (
    <div class="container">
      <img src={require('./images/stellarium.png')} alt="stellarium" class="responsive" />
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
      <div>
        <img src={require('./images/saselogo.png')} alt="stellarium" class="responsive" />
      </div>
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
      <img src={require('./images/kotx.png')} alt="other" class="responsive" />
      <div class="overlay">
        <p class="text"> KOTX </p>
        <p class="subtext"> Photoshop, After Effects</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div class="about">
      <p className="App-intro" id="about" nav>
        Hi I'm Amberly! Student at UC San Diego studying Computing and Visual Arts.
          When I'm not in front of the computer coding, designing, or animating, I'm either
          working out, travelling, or playing co-op games. Also interested in good music and good food.
          Still in training, but I'm determined to make my way no matter
          low long it takes.
        </p>
      <p className="App-intro">
        I love a good conversation! I'd love to chat through LinkedIn, Dribbble, Github, Instagram, or Email.
        </p>
    </div>
  )
}

const workContainerStyle = css`
  flex-direction: column;
  justify-content: center;
`

const Works = () => {
  return (
    <div className={workContainerStyle}>
      {Kitchin()}
      {/* 
          <div class="column">
          <Stellarium />
        </div>
        <div class="column">
          <SASE />
        </div>
        <div class="column">
          <KOTX />
        </div>
          */}
    </div>

  )
}


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { isStopped: false, isPaused: false };
  }
  render() {
    // const defaultOptions = {
    //   loop: true,
    //   autoplay: true,
    //   animationData: animationData,
    //   rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid slice'
    //   }
    //};
    return (
      <div className="App">
        <Navbar />
        
        {/*<Header /> */}
        <div class="imgcontainer">
          <img src={require('./images/background.png')} alt="koi" class="responsiveBackground"/>
          <h1 className="header-name"> amberly ngo </h1>
        </div>
        
        <About />

        {Works()}

      </div >
    );
  }
}


export default App;
