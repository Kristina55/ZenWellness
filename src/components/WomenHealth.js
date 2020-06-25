import React, { Component } from 'react';
import '../css/WomenHealth.css';
import { Link } from 'react-router-dom';
//animation;
import ScrollAnimation from 'react-animate-on-scroll';
//components
import NavBar from './NavBar';
import Video from './Video';

// videos
import videos from './WHV';

class WomenHealth extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="women-page">
					<div className="women-picture">
						<div className="container">
							<div className="row women-section">
								<div className="col-md-9">
									<h1 className="women-text">
										Finally a women’s health program that empowers women to receive the care and
										information they require in the comfort and privacy of their own homes
									</h1>
									<Link to="/weight-loss">
										<button className="learn-more-women">Learn More</button>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="container">
						<div className="row women-section-text">
							<div className="col-md-9">
								<ScrollAnimation animateIn="fadeInDown">
									<h1 className="women-health-text"> - Women’s Health - </h1>
									<p className="p1">
										Our initial learning modules focus on women’s health issues related to post
										partum care. We start with an overview of the most common post partum related
										conditions. For example, during and following pregnancy, as many as 4 in 10
										women experience urinary incontinence, or the involuntary loss of urine. Despite
										the normalcy of incontinence after childbirth, many new mothers may feel shame
										or embarrassment about this change in their bodies, as well as other issues
										related to pelvic floor health.
									</p>
									<p className="p2">
										Very often treatment involves training pelvic floor muscles, not only
										strengthening these muscles but also relaxation. Beyond the incontinence issue,
										more than half of women experience some form of discomfort, pain or dysfunction
										before or after childbirth. These issues are most often related to muscles in
										and around the pelvis, as well as other bone and soft tissue involved in
										childbirth. Below is an introductory educational series designed to allow women
										to receive instruction on this topic in the comfort of their own homes.
									</p>
								</ScrollAnimation>
							</div>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="figure" />
								<div className="library-text">
									<h1 className="learning-library">LEARNING LIBRARY</h1>
									<h1 className="comfort">Learn from the comfort and privacy of home</h1>
								</div>
							</div>
						</div>
						{videos.map((video) => <Video text={video.text} number={video.number} key={video.number} />)}
					</div>
				</div>
			</div>
		);
	}
}

export default WomenHealth;
