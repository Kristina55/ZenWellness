import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// css
import '../css/Home.css'
// components
//import CarouselComponent from "./Carousel";
import Navbar from './NavBar'

// logos
import ebay from '../images/ebay.svg'
import instagram from '../images/instagram.svg'
import google from '../images/google.svg'
import apple from '../images/apple.svg'
import facebook from '../images/facebook.png'
import AppleLady from '../images/Apple Lady.png'
// animation
import ScrollAnimation from 'react-animate-on-scroll'

// separate logos
import harvard from '../images/harvard.png'
import stanford from '../images/stanford.png'
import hopkins from '../images/hopkins.png'
import mayo from '../images/mayo.png'

//context
import UserContext from './UserContext'

class Home extends Component {
  static contextType = UserContext

  render() {
    return (
      <div>
        <Navbar blueNav={this.context} />
        <div className="home-container">
          <div className="header-section">
            <div className="container">
              <div className="row header">
                <div className="col-md-6 intro">
                  <h1 className="eat-healthy">Eat Healthy, Lose Weight</h1>
                  <ul className="bullet-points">
                    <li>
                      <span className="check" />
                      Based On Science
                    </li>
                    <li>
                      <div className="check" />
                      No Exercise
                    </li>
                    <li>
                      <div className="check" />
                      No Expensive Meals
                    </li>
                    <li>
                      <div className="check" />
                      Guaranteed Results
                    </li>
                  </ul>
                  <Link to="/weight-loss">
                    <button className="learn-more">Learn More</button>
                  </Link>
                  <Link to="/payment">
                    <button className="buy-now">Buy now</button>
                  </Link>
                </div>
                <div className="col-md-6 apple-lady">
                  <img src={AppleLady} alt="lady" />
                </div>
              </div>
            </div>
          </div>

          <div className="container logo-title">
            <div className="row title">
              <div className="col-md-12">
                <h1>USED BY EMPLOYEES AT THE WORLD'S LEADING COMPANIES</h1>
              </div>
            </div>
            <div className="row logos">
              <div className="col-md-2">
                <img src={ebay} alt="ebay" style={{ maxWidth: '84px' }} />
              </div>
              <div className="col-md-2">
                <img
                  src={instagram}
                  alt="instagram"
                  style={{ maxWidth: '60px' }}
                />
              </div>
              <div className="col-md-2">
                <img src={google} alt="google" style={{ maxWidth: '60px' }} />
              </div>
              <div className="col-md-2">
                <img src={apple} alt="apple" style={{ maxWidth: '84px' }} />
              </div>
              <div className="col-md-2 facebook-logo">
                <img
                  src={facebook}
                  alt="facebook"
                  style={{ maxWidth: '84px' }}
                />
              </div>
            </div>
          </div>

          <ScrollAnimation animateIn="fadeInDown">
            <div className="container ">
              <div className="row research">
                <div className="col-md-6 research-col">
                  <h1>Based on Research</h1>
                  <h2>
                    Zen is designed 100% based on science. In the 2020’s, we can
                    draw on decades of research on >100K patients – we know what
                    works
                  </h2>
                  <p>
                    We distilled the quickest and most reliable path to weight
                    loss. We then craft real world, pragmatic solutions to
                    navigating the pitfalls of life: client dinners, late nights
                    at the office, travel etc.
                  </p>
                  <h4>With this framework you will lose weight</h4>
                </div>
                <div className="col-md-6">
                  <div className="row separate-logos">
                    <div className="col-md-4 harvard-logo">
                      <img src={harvard} alt="harvard" />
                    </div>
                    <div className="col-md-4 stanford-logo">
                      <img src={stanford} alt="stanford" />
                    </div>
                  </div>
                  <div className="row separate-logos">
                    <div className="col-md-4 mayo-logo">
                      <img src={mayo} alt="mayo" />
                    </div>
                    <div className="col-md-4 hopkins-logo">
                      <img src={hopkins} alt="hopkins" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="container-fluid zen-different-container">
            <div className="row zen-different">
              <ScrollAnimation animateIn="fadeInRight">
                <div className="col-md-6 zen-different-col">
                  <div>
                    <h1>Zen is Different</h1>
                    <ul className="zen-different-points">
                      <li>
                        <i className="fas fa-check different" />
                        All Science, No Gimmicks
                      </li>
                      <li>
                        <i className="fas fa-check different" />
                        Enjoy All of the Food You Love
                      </li>
                      <li>
                        <i className="fas fa-check different" />
                        No Exercise
                      </li>
                    </ul>
                    <p>
                      Join thousands of people using groundbreaking research to
                      fast track permanent weight loss and mental wellbeing
                      Guaranteed to transform your mental and physical wellbeing
                      or your money back Permanent results not temporary fixes
                      Never purchase any expensive packaged food, gym
                      memberships and personal training Learn why you never need
                      to exercise to lose weight
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="container-fluid footer-container">
            <div className="row footer">
              <div className="col-md-12 footer-col">
                <h1>Zen Executive Weight Loss</h1>
                <h2>Based on Science. Guaranteed Results.</h2>
                <button className="start-free">Start for Free</button>
                <Link to="/weight-loss">
                  <button className="why-works">Why it Works?</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
