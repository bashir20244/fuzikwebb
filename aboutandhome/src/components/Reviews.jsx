import React from 'react';
import { Container } from 'react-bootstrap'; 
import Slider from 'react-slick';
import Man from "../assets/Group 55.png";
import Star from "../assets/icon_star.png";
import CommoSection from './ui/CommoSection';
import style from '../pages/main.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          padding: '0 15px'
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          padding: '0 15px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div>
      <CommoSection title="Reviews" />
      <Container className={style["reviews-slider"]}>
        <Slider {...settings}>
          {/* Comment 1 */}
          <div style={{ padding: "0 15px" }}>
            <div className={style.comments}>
              <div className="commentor d-flex align-items-center mb-2">
                <img src={Man} alt="User" className="me-3" />
                <h4 className={style.h_reviews}>Lorem ipsum</h4>
              </div>
              <div className="text mb-3">
                <p className={style.p_reviews}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque,</p>
              </div>
              <div className="star-leaf d-flex justify-content-between">
                <div className="star d-flex justify-content-between">
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                </div>
                <div className="leaf">
                  3.5k
                </div>
              </div>
            </div>
          </div>
          {/* Comment 2 */}
          <div style={{ padding: "0 15px" }}>
            <div className={style.comments}>
              <div className="commentor d-flex align-items-center mb-2">
                <img src={Man} alt="User" className="me-3" />
                <h4 className={style.h_reviews}>Lorem ipsum</h4>
              </div>
              <div className="text mb-3">
                <p className={style.p_reviews}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque,</p>
              </div>
              <div className="star-leaf d-flex justify-content-between">
                <div className="star d-flex justify-content-between">
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                </div>
                <div className="leaf">
                  3.5k
                </div>
              </div>
            </div>
          </div>
          {/* Comment 3 */}
          <div style={{ padding: "0 15px" }}>
            <div className={style.comments}>
              <div className="commentor d-flex align-items-center mb-2">
                <img src={Man} alt="User" className="me-3" />
                <h4 className={style.h_reviews}>Lorem ipsum</h4>
              </div>
              <div className="text mb-3">
                <p className={style.p_reviews}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque,</p>
              </div>
              <div className="star-leaf d-flex justify-content-between">
                <div className="star d-flex justify-content-between">
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                </div>
                <div className="leaf">
                  3.5k
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default Reviews;
