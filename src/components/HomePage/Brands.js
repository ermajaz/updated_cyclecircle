import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Marquee from "react-fast-marquee";

function Brands() {
  return (
    <Fade bottom>
    <Container>
      <h3>OUR TOP BRANDS</h3>
      <OurBrand>
        <div>
          <Link to="/cratoni">
            <img src="/images/cratoni.png" alt="" />
          </Link>
        </div>

        <div>
          <Link to="/cratoni">
            <img src="/images/neco.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/kenda.png" alt="" />
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/cratoni">
            <img src="/images/logan.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/joes.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/rst.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/rst.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/tekto.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/cratoni">
            <img src="/images/sunrace.png" alt="" />
          </Link>
        </div>
      </OurBrand>
      <ScrollableExclusiveBrand>
        <Marquees autoFill="true">
          <div>
            <MarqueeImage src="/images/cratoni.png" alt="" />
          </div>

          <div>
            <MarqueeImage src="/images/sunrace.png" alt="" />
          </div>
          <div>
            <MarqueeImage src="/images/kenda.png" alt="" />
          </div>
          <div>
            {" "}
            <MarqueeImage src="/images/logan.png" alt="" />
          </div>
          <div>
            <MarqueeImage src="/images/neco.png" alt="" />
          </div>
          <div>
            <MarqueeImage src="/images/rst.png" alt="" />
          </div>
          <div>
            <MarqueeImage src="/images/joes.png" alt="" />
          </div>
          <div>
            <MarqueeImage src="/images/tekto.png" alt="" />
          </div>
        </Marquees>
      </ScrollableExclusiveBrand>
    </Container>
    </Fade>
  );
}

export default Brands;

const Container = styled.div`
  background: white;
  color: black;
  margin: 0 1.5rem 2.5rem 1.5rem;
  transition: 0.7s all ease;
  border-color: transparent;
  box-shadow: 0 0 15px 0 rgba(93, 93, 93, 0.3);
  border-radius: 5px;
  h3 {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 5vh;
    text-align: center;
    padding: 2rem 0 0.5rem 0;
    color: black;
  }
  @media (max-width: 768px) {
    margin: 0 0 2.5rem 0;
    h3 {
      margin-bottom: 2vh;
      font-size: 1.5rem;
      padding: 2rem 0 0 0;
      text-align: center;
    }
    div {
      a {
        img {
          width: 7rem;
        }
      }
    }
  }
`;
const OurBrand = styled.div`
  color: black;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  place-items: center;
  div {
    margin: 2rem 0;
    a {
      text-align: center;
      img {
        width: 150px;
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    div{
      margin: 1rem 0;
      a{
        img{
          width: 95px;
        }
      }
    }
  }
`;
const ScrollableExclusiveBrand = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 1rem 0;
  background: #f2f1ed;
  border-radius: 5px;
`;

const Marquees =styled(Marquee)`
display:flex;
  align-items:center;
  justify-content:center;
`
const MarqueeImage = styled.img`
  width: 80px; 
  margin: 0px 40px;
  @media (max-width: 768px) {
    width: 50px;
    margin: 0px 20px;
  }
`;
