import React from "react";
import styled from "styled-components";
import image1 from "../../../src/icons/b5.png";
import image2 from "../../../src/icons/bannerImg/banner05.png";
import image4 from "../../../src/icons/bannerImg/banner06.jpg";
import image3 from "../../../src/icons/b2.png";
import image5 from "../../../src/icons/b3.png";
import Fade from "react-reveal/Fade";


const Parent = styled.div`
background: #d1d4d4;
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 4rem 1.5rem;


  // @media (min-width: 768px) {
  //   grid-template-columns: repeat(5, 1fr);
  //   grid-template-rows: repeat(2, 1fr);
  // }
  @media (max-width: 768px) {
    padding: 3rem 0;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
  }
`;


const Div = styled.div`
  height: 280px;
  background-color: rgb(185, 94, 9);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  transition: all 0.3s ease; /* Add a transition effect */
  cursor:pointer;
  &:hover{
    opacity: 0.8;
    transform: scale(1.01);
  }
  @media (max-width: 768px) {
      height:80px;
      width:100%;
    }


  ${({ image }) =>
    image &&
    `
    background-image: url(${image});
  `}


  @media (min-width: 768px) {
    ${({ area }) =>
      area &&
      `
      grid-area: ${area};
    `}
  }
  @media (max-width: 768px) {
    ${({ area }) =>
      area &&
      `
      grid-area: ${area};
    `}
  }
`;


const BrandSpotlight = () => {
  return (
    <Fade bottom>
    <Parent>
        {/* grid-area: <grid-row-start> / <grid-column-start> / <grid-row-end> / <grid-column-end>; */}
        <Div image={image1} area="1 / 1 / 2 / 9"></Div>
        <Div image={image2} area="1 / 9 / 2 / 16"></Div>
        <Div image={image3} area="2 / 1 / 3 / 6"></Div>
        <Div image={image4} area="2 / 6 / 3 / 10"></Div>
        <Div image={image5} area="2 / 10 / 3 / 16"></Div>
    </Parent>
    </Fade>
  );
};


export default BrandSpotlight;




