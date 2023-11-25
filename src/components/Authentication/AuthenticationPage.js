import React from 'react';
import "./AuthenticationPage.css";
import login_group from "../../img/login_group.png";
import LoginPage from './LoginPage';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { services } from "../../data";

function AuthenticationPage({onClose}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        vertical: false,
        arrows: false,
      };

  return (
    <div className='AuthenticationPage-container'>
      <div className="AuthenticationPage-left-container">
        <img src={login_group} alt="cyclecircle-login-info" />
        <Slider {...settings}>
          {services.map((data, index) => (
            <div className="login-promices" key={index}>
              <img src={data.icon} alt="" />
              <div className="login-promices-text">
                <span className="login-promices-heading">
                  {data.heading}
                </span>
                <div className="login-promices-desc">{data.desc}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="AuthenticationPage-right-container">
        <LoginPage onClose={onClose}/>
      </div>
    </div>
  );
}

export default AuthenticationPage;
