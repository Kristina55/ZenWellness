import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//animation;
import ScrollAnimation from 'react-animate-on-scroll'
// images
import girl from '../images/video-img.png'

class Video extends Component {
  render() {
    const { number, text } = this.props
    const { lossNumber, lossText, lossList, icon } = this.props

    return (
      <div>
        {lossNumber && lossText && lossList ? (
          <ScrollAnimation animateIn="fadeInDown">
            <div className="row lossVideos">
              <div className="col-md-9 ">
                <div className="weightLoss-section">
                  <div className="lossIcon">
                    {<img src={icon} alt="icon" />}
                  </div>
                  {lossNumber % 2 === 0 ? (
                    <div className="even">{lossNumber}</div>
                  ) : (
                    <div className="orange">{lossNumber}</div>
                  )}

                  <h1 className="videoLoss-section-text">{lossText}</h1>
                </div>

                <ul className="weightLoss-ul">
                  {lossList.map((item, id) => (
                    <li key={id}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="col-md-3 video-col-loss">
                <Link to="/payment">
                  <video width="200" height="150" poster={girl} controls />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation animateIn="fadeInDown">
            <div className="row videos">
              <div className="col-md-9">
                {number % 2 === 0 ? (
                  <div className="even">{number}</div>
                ) : (
                  <div className="odd">{number}</div>
                )}

                <h1 className="video-section-text">{text}</h1>
              </div>
              <div className="col-md-3 video-col">
                <Link to="/contact">
                  <video width="200" height="150" poster={girl} controls />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        )}
      </div>
    )
  }
}

export default Video
