import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Kitchin = () => {
  return (
      <div>
        <h2> Kitchin </h2>
        <p> Skills used: graphic design, html, css, UI/UX </p>
        <img src={require('./kitchin.jpg')}  />
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
      <h1> Works </h1>
      <p> some work </p>

      <Kitchin  />
      <Stellarium />
      <Other  />
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Amberly&#39;s Portfolio</h1>
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
