import React, { Component } from "react";
// logos
import harvard from "../images/harvard.png";
import stanford from "../images/stanford.png";
import hopkins from "../images/hopkins.png";
import mayo from "../images/mayo.png";
// css
import "../css/Carousel.css";
// slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: "Harvard",
    url: stanford,
    id: 1,
  },
  {
    name: "Stanford",
    url: harvard,
    id: 2,
  },
  {
    name: "Hopkins",
    url: hopkins,
    id: 3,
  },
  {
    name: "Mayo",
    url: mayo,
    id: 4,
  },
];

class CarouselComponent extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
    };
    return (
      <div className="Slider" style={{ padding: 30 }}>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div className="carousel" key={photo.id}>
                <img width="100%" src={photo.url} alt={photo.name} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default CarouselComponent;
