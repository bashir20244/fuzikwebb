import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from '../pages/main.module.css';
import CommoSection from './ui/CommoSection';
import hero from "../assets/59cfcea786465c009ce38a85c6adab04.jpg";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide

const SliderOurTeam = () => {
  return (
    <>

      {/* Our Team Section */}
      <div>
        <CommoSection title="Our Team" />
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <Swiper
              spaceBetween={20} 
              slidesPerView={4} 
              breakpoints={{
                1024: {
                  slidesPerView: 3, 
                },
                700: {
                  slidesPerView: 2, 
                },
                500: {
                  slidesPerView: 2, 
                },                
                300: {
                  slidesPerView: 2, 
                },
              }}
              pagination={{
                clickable: true, 
              }}
              autoplay={{
                delay: 2000, 
                disableOnInteraction: false, 
              }}
            >
              {/* Repeating slide content */}
              <SwiperSlide>
                <div className="card border-0 me-4">
                  <img src={hero} className="card-img-top" alt="service image" />
                  <div className={style.cardBody}>
                    <p className="card-text">Some quick example</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card border-0 me-4">
                  <img src={hero} className="card-img-top" alt="service image" />
                  <div className={style.cardBody}>
                    <p className="card-text">Some quick example</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card border-0 me-4">
                  <img src={hero} className="card-img-top" alt="service image" />
                  <div className={style.cardBody}>
                    <p className="card-text">Some quick example</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card border-0 me-4">
                  <img src={hero} className="card-img-top" alt="service image" />
                  <div className={style.cardBody}>
                    <p className="card-text">Some quick example</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card border-0 me-4">
                  <img src={hero} className="card-img-top" alt="service image" />
                  <div className={style.cardBody}>
                    <p className="card-text">Some quick example</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Other Sections */}
    </>
  );
};

export default SliderOurTeam;
