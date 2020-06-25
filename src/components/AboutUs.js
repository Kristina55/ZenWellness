import React, { Component } from "react";
import Ali from "../images/ali.jpg";
// css
import "../css/About.css";
// animation
import ScrollAnimation from "react-animate-on-scroll";
// components
import NavBar from "./NavBar";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="about-page">
          <div className="container ">
            <ScrollAnimation animateIn="fadeInDown">
              <div className="row about-section">
                <div className="col-md-6 about-text">
                  <h1>- FOUNDER'S STORY - </h1>
                  <p>
                    Dr. Ali Nasser is a life long advocate of healthy living. He
                    started teaching patients about healthy eating over 20 years
                    ago and remains dedicated to understanding how to improve
                    the health of society. He has authored a book on the subject
                    that is part of the Zen program, and studied human behavior
                    and motivation.
                  </p>
                  <h1>- MISSION -</h1>
                  <p>
                    Our mission is to serve as many people as possible, and help
                    them realize their wellness objectives; in order to achieve
                    this goal, we need to reach as many people as possible with
                    the truth about healthy lifestyles. We aim to create the
                    highest quality, curated learning products and share them
                    inexpensively with consumers and companies alike.
                  </p>
                </div>

                <div className="col-md-6 about-image">
                  <img src={Ali} alt="ali" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
