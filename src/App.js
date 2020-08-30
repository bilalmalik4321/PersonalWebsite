import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import face from "./images/new.jpg";
import winhacks from "./winhacks.mp4";
import mediplus from "./mediplus.mp4";
import malikhospital from "./MalikHospital.mp4";
import {WorkExperience} from "./workExperience";
import "./App.css";

class App extends Component{
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bilal Malik</h2>
        <img src={face} className="App-logo" alt="logo" />
        <p>Computer Science Student @ UWindsor | <a href="https://www.wsib-lab.ca/" className="url" target="_blank">Full Stack Developer @ WSIB Innovation Lab</a></p>
        <div className="buttonHolder">
          <a id="GFG" href="#App-AboutMe">
            <button className="Button">
              <span className="ButtonText">About Me</span>
            </button>
          </a>
          <a id="GFG" href="#App-Projects">
            <button className="Button">
              <span>Projects</span>
            </button>
          </a>
          <a id="GFG" href="#App-ContactMe">
            <button className="Button">
              <span>Contact Me</span>
            </button>
          </a>
        </div>
        <br />
      </header>
      <div div="AboutMe" className="App-body">
        <a id="App-AboutMe">
          <AboutMe />
        </a>
      </div>
      <div div="Projects" className="App-header">
        <a id="App-Projects">
          <WorkExperience />
        </a>
      </div>
      <div div="Projects" className="App-body">
        <a id="App-Projects">
          <Projects />
        </a>
      </div>
      <div div="AboutMe" className="App-header">
        <a id="App-ContactMe">
          <ContactMe />
        </a>
      </div>
    </div>
  );
  }
}

export default App;
