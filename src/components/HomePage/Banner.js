import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { banners } from '../../data';
import { connect } from 'react-redux';
import { selectMobileView,setMobileView } from '../../store/slices/bannerSlice';
import { useEffect } from 'react';

function ImgSlider({ isMobile,setMobileView }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: !isMobile, // Show arrows only on non-mobile devices
  };

  useEffect(() => {
    // Dispatch the setMobileView action with the updated isMobile value
    console.log(isMobile);
    setMobileView(window.innerWidth <= 768);
  }, [setMobileView]);

  return (
    <Container isMobile={isMobile}>
      <Carousel {...settings}>
        {banners.map((banner, index) => (
          <Wrap key={index}>
            <img src={banner.img} alt="" />
          </Wrap>
        ))}
      </Carousel>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isMobile: selectMobileView(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMobileView: (isMobile) => dispatch(setMobileView(isMobile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImgSlider);



const Container = styled.div`
  width: 97%;
  height: ${(props) => (props.isMobile ? '25vh' : '56vh')};
  overflow: hidden;
  margin: 1rem auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 25vh;
    padding: 0;
    border-bottom: none;
  }
`;
const Carousel = styled(Slider)`
width: ${(props) => (props.isMobile ? '88vw' : '84vw')};
  margin-left: ${(props) => (props.isMobile ? '1.2rem' : '3.6rem')};
  margin-top: 20px;
  ul li button {
    &:before{
      font-size: 10px;
      color:rgb(150,158,171);
    }
  }
  li.slick-active button::before{
    color:gray;
  }
  .slick-list{
    overflow:visible;
  }
  .slick-next{
    right: 35px;
    transition: 0.7s all ease;
  }
  .slick-next:before{
    font-size: 50px;
    color: #eeeeee;
    opacity: 1;
  }
  .slick-next:hover{
    opacity: 0.8;
  }
  .slick-prev{
    left: 15px;
    transition: 0.7s all ease;
  }
  .slick-prev:before{
    font-size: 50px;
    color: #eeeeee;
    opacity: 1;
  }
  .slick-prev:hover{
    opacity: 0.8;
  }
  button{
    z-index: 1;
  }
  @media (max-width: 768px) {
    margin-left: 1.2rem;
    width: 88vw;

    .slick-prev{
      left: 12px;
      transition: 0.7s all ease;
    }
    .slick-next{
      right: 15px;
      transition: 0.7s all ease;
    }

    .slick-next:before{
      font-size: 35px;
      color: #eeeeee;
      opacity: 1;
    }

    .slick-prev:before{
      font-size: 35px;
      color: #eeeeee;
      opacity: 1;
    }
    
  }

`
const Wrap = styled.div`
  // cursor:pointer;
  margin: 0 5px;
  img{
    border: 1px solid transparent;
    border-radius: 10px;
    width: 100%;
    height: 48vh;
    transition-duration: 300ms;
    @media (max-width: 768px) {
      height: 10rem;
      
    }
    &:hover{
      // border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`