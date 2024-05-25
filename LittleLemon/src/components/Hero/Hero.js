import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../../Assets/images/home/home-img1.jpg'; 
import Image2 from '../../Assets/images/home/home-img2.jpg';
import Image3 from '../../Assets/images/home/home-img3.jpg';
import './Hero.css'
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="hero" className="container mb-3">
      <Slider {...settings}>
        <div className="slider-item">
          <div className="slider-content">
            <img src={Image1} alt="Slider Image 1" />
            <div className="slider-text">
              <h1>Little Lemon</h1>
              <p>Little Lemon is a cozy spot nestled in Seattle, where we blend global flavors with local ingredients to create dishes that nourish both body and soul. Our commitment to sustainability and community shines through in every bite, inviting you to savor the simple joys of wholesome food in a welcoming atmosphere.</p>
              <Link className="reserve-link" to="/booking">Booking</Link>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="slider-content">
            <img src={Image2} alt="Slider Image 2" />
            <div className="slider-text">
              <h1>Little Lemon</h1>
              <p>Little Lemon is a cozy spot nestled in Seattle, where we blend global flavors with local ingredients to create dishes that nourish both body and soul. Our commitment to sustainability and community shines through in every bite, inviting you to savor the simple joys of wholesome food in a welcoming atmosphere.</p>
              <Link className="reserve-link" to="/booking">Booking</Link>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="slider-content">
            <img src={Image3} alt="Slider Image 3" />
            <div className="slider-text">
              <h1>Little Lemon</h1>
              <p>Little Lemon is a cozy spot nestled in Seattle, where we blend global flavors with local ingredients to create dishes that nourish both body and soul. Our commitment to sustainability and community shines through in every bite, inviting you to savor the simple joys of wholesome food in a welcoming atmosphere.</p>
              <Link className="reserve-link" to="/booking">Booking</Link>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
