import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// css
import '../css/WeightLoss.css'
// components
import NavBar from './NavBar'
import Video from '../components/Video'
// images
import book from '../images/book.png'
import diet from '../images/diet.png'
import girl from '../images/video-img.png'
import weightLoss from '../images/Group 33.png'

// videos
import lossVideos from './WLV'
// separate logos
import harvard from '../images/harvard.png'
import stanford from '../images/stanford.png'
import hopkins from '../images/hopkins.png'
import mayo from '../images/mayo.png'

class WeightLoss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopUp: false,
    }
  }

  tooglePopUp = () => {
    this.setState({ showPopUp: !this.state.showPopUp })
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="weight-page">
          <div className="container-fluid ">
            <div className="row weight-section ">
              <div className="col-md-6 weight-picture">
                <img src={weightLoss} alt="weight-loss" />
              </div>

              <div className="col-md-6 full-program">
                <button className="starter-program">Starter Program</button>
                <h1>Get the Book + Full Diet Program + 5 Modules</h1>
                <ul>
                  <li>
                    <span className="weight-check" />
                    Based on Science
                  </li>
                  <li>
                    <span className="weight-check" />
                    No Exercise
                  </li>
                  <li>
                    <span className="weight-check" />
                    No Expensive Meals
                  </li>
                  <li>
                    <span className="weight-check" />
                    Guaranteed Results
                  </li>
                </ul>
                <button className="weight-learn-more">Learn More</button>
                <Link to="/payment">
                  <button className="weight-buy-now">Buy Now</button>
                </Link>
                <h6>
                  30 day unconditional guarantee
                  <i
                    className="far fa-question-circle"
                    onMouseEnter={this.tooglePopUp}
                    onMouseLeave={this.tooglePopUp}
                  />
                </h6>
                {this.state.showPopUp ? (
                  <div className="pop-up">
                    We are 100% committed to your long term health and wellness.
                    If the Zen program has not helped to reduce your weight
                    within 30 days of trying the program, we will happily refund
                    your purchase.
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row diet-section">
              <div className="col-md-4 book-img">
                <Link to="/payment">
                  <img src={book} alt="book" />
                </Link>
              </div>

              <div className="col-md-8 book-text">
                <h1>
                  Detailed Guide to <br />
                  Eating for Every Situation
                </h1>
                <p>
                  Dr. Ali Nasser provides a simple set of solutions for people
                  on the go. As both a former McKinsey consultant and healthcare
                  practitioner, he guides readers through his action plan and
                  gives a clear path to navigating each meal and every work
                  situation.
                </p>
              </div>
            </div>
            <div className="row diet-section">
              <div className="col-md-8 diet-text">
                <h1>
                  Diet Plan: Eat the Food You Love, Breakfast, Lunch and Dinner
                </h1>
                <p>
                  Full meal plan and template for creating your own program
                  based on the food YOU love to eat. Each meal and snack is
                  outlined in detailed with plenty of delicious suggestions and
                  a template guide that provides a foolproof path to success.
                </p>
                <div className="weight-videos">
                  <Link to="/payment">
                    <video width="200" height="150" poster={girl} controls />{' '}
                  </Link>
                  <Link to="/payment">
                    <video width="200" height="150" poster={girl} controls />
                  </Link>
                  <Link to="/payment">
                    <video width="200" height="150" poster={girl} controls />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 diet-img">
                <Link to="/payment">
                  <img src={diet} alt="diet" />
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 zen-program">
                <h1>The Zen Program</h1>
                {lossVideos.map((video) => (
                  <Video
                    lossText={video.text}
                    lossNumber={video.number}
                    lossList={video.list}
                    key={video.number}
                    icon={video.icon}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row loss-zen-executive">
              <div className="col-md-6">
                <h1>Zen Executive Weight Loss</h1>
                <div className="loss-zen-executive-p">
                  <p>
                    <i className="fas fa-check different" />
                    Based on Science
                  </p>
                  <p>
                    <i className="fas fa-check different" />
                    Guaranteed Results
                  </p>
                </div>
                <Link to="/contact">
                  <button className="weight-learn-more">Contact Us</button>
                </Link>
                <button className="weight-start-free">Start Now</button>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row loss-footer-logos">
              <div className="col-md-2">
                <img src={harvard} alt="harvard" />
              </div>
              <div className="col-md-2">
                <img src={stanford} alt="stanford" />
              </div>
              <div className="col-md-2">
                <img src={mayo} alt="mayo" />
              </div>
              <div className="col-md-2">
                <img src={hopkins} alt="hopkins" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeightLoss
