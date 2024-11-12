import React from 'react';
import style from './main.module.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CommoSection from '../components/ui/CommoSection';
import hero from "../assets/59cfcea786465c009ce38a85c6adab04.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderOurTeam from '../components/SliderOurTeam';
import Reviews from '../components/Reviews';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // max-width: 768px
        settings: {
          arrows: false // إخفاء الأسهم
        }
      },
      {
        breakpoint: 576, // max-width: 576px
        settings: {
          arrows: false // إخفاء الأسهم
        }
      }
    ]
  };

  return (
    <>
<div className={`${style.heroimage} d-flex flex-column justify-content-center align-items-center text-center`}  data-aos="fade-down">
  <div className={style.content}>
    <h1>Lorem ipsum dolor</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eos optio voluptate nam deleniti officia ipsam, nihil assumenda.</p>
    <Link to="/contactus">
      <button>Contact Us</button>
    </Link>
  </div>
  <div className={`${style.cards} container mt-5`}>
    <div className="row justify-content-center">
      <div className={`col-12 col-md-4 mb-3 ${style.cardSpacing}`}>
        <div className={`card text-center border-0 ${style.customCard}`}>
          <div className={style.cardBody}>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className={`col-12 col-md-4 mb-3 ${style.cardSpacing}`}>
        <div className={`card text-center border-0 ${style.customCard}`}>
          <div className={style.cardBody}>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className={`col-12 col-md-4 mb-3 ${style.cardSpacing}`}>
        <div className={`card text-center border-0 ${style.customCard}`}>
          <div className={style.cardBody}>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* About Section */}
      <div className={`${style.about}`}  data-aos="fade-down">
        <CommoSection title="About Us" />
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 text-start">
              <p className={style.aboutP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin“Lorem ipsum dolor sit amet</p>
              <Link to="/about">
                <button className="btn my-4">See More</button>
              </Link>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src={hero} alt="about" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div data-aos="fade-down">
        <CommoSection title="Services"/>
        <div className="container">
          <div className="row d-flex flex-column-reverse flex-md-row">
            <div className="col-lg-5 col-md-12 text-start mb-4">
              <p className={style.aboutP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin“Lorem ipsum dolor sit amet, consectetur adipiscing elit. “Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Link to="/services">
                <button className="btn">See More</button>
              </Link>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="row">
                  
                  <div className={`col-12 col-sm-6 col-md-4 mb-4 ${style.servierone}`}>
                    <div className="card border-0">
                      <img src={hero} className="card-img-top" alt="service" />
                      <div className={style.cardBody}>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>

                  <div className={`col-12 col-sm-6 col-md-4 mb-4 ${style.serviertwo}`}>
                    <div className="card border-0">
                      <img src={hero} className="card-img-top" alt="service" />
                      <div className={style.cardBody}>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>

                  <div className={`col-12 col-sm-6 col-md-4 mb-4 ${style.servierthree}`}>
                    <div className="card border-0">
                      <img src={hero} className="card-img-top" alt="service" />
                      <div className={style.cardBody}>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Projects Section */}
      <div data-aos="fade-down">
        <CommoSection title="Projects" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-4">
              <div className="card border-0 mb-3">
                <img src={hero} className="card-img-top" alt="project" />
              </div>
              <div className="card border-0 mb-3">
                <img src={hero} className="card-img-top" alt="project" />
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <Slider {...settings}>
                <img src={hero} alt="project" className="img-fluid" />
                <img src={hero} alt="project" className="img-fluid" />
                <img src={hero} alt="project" className="img-fluid" />
              </Slider>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <div className="card border-0 mb-3">
                <img src={hero} className="card-img-top" alt="project" />
              </div>
              <div className="card border-0 mb-3">
                <img src={hero} className="card-img-top" alt="project" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SliderOurTeam data-aos="fade-down"/>
      <Reviews data-aos="fade-down"/>
    </>
  );
};

export default Home;
