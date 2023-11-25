import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { hotDeals } from "../../data";
import h1 from "../../img/parts/hot_deals.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const SimilarProduct = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
  };

  return (
    <Fade bottom>
      <Container>
        <h3>Similar Product</h3>
        <StyledCarousel responsive={responsive}>
          {hotDeals.map((data) => (
            <Link style={{ textDecoration: "none" }} to="/product">
              <Card key={data.id}>
                <ItemImg src={data.img} alt={data.name} />
                <ItemDetail>
                  <ItemRating>
                    <Rating>{data.rating}</Rating>
                    <StarIcons style={fontS} />
                    <Line>|</Line>
                    <NoOfRating>{data.ratingNumber}</NoOfRating>
                  </ItemRating>
                  <ItemName>{data.name}</ItemName>
                  <ItemData>{data.detail}</ItemData>
                  <ItemPrice>
                    <CurrentPrice>Rs. {data.currentPrice}</CurrentPrice>
                    <OriginalPrice>Rs. {data.originalPrice}</OriginalPrice>
                    {/* <Discount> 60% OFF</Discount> */}
                  </ItemPrice>
                </ItemDetail>
              </Card>
            </Link>
          ))}
        </StyledCarousel>
        <StyledCarousel responsive={responsive}>
          {hotDeals.map((data) => (
            <Link style={{ textDecoration: "none" }} to="/product">
              <Card key={data.id}>
                <ItemImg src={data.img} alt={data.name} />
                <ItemDetail>
                  <ItemRating>
                    <Rating>{data.rating}</Rating>
                    <StarIcons style={fontS} />
                    <Line>|</Line>
                    <NoOfRating>{data.ratingNumber}</NoOfRating>
                  </ItemRating>
                  <ItemName>{data.name}</ItemName>
                  <ItemData>{data.detail}</ItemData>
                  <ItemPrice>
                    <CurrentPrice>Rs. {data.currentPrice}</CurrentPrice>
                    <OriginalPrice>Rs. {data.originalPrice}</OriginalPrice>
                    {/* <Discount> 60% OFF</Discount> */}
                  </ItemPrice>
                </ItemDetail>
              </Card>
            </Link>
          ))}
        </StyledCarousel>
      </Container>
    </Fade>
  );
};

export default SimilarProduct;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0.75rem 7.5rem;
  background: #d1d4d4;
  // overflow: hidden;
  margin: auto;
  h3 {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: normal;
    text-transform: Capitalize;
    letter-spacing: 0.1rem;
    margin-bottom: 5vh;
    text-align: center;
    padding: 2rem 0 1.5rem 0;
    color: black;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      padding: 0.5rem 0 0 0;
    }
  }
`;
const StyledCarousel = styled(Carousel)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.75rem 0;
  margin-bottom: 2.5rem;
  button {
    background: #04477e;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0;
    margin-right: -0.3rem;
    margin-left: -2.2rem;
    z-index: 10;
    font-weight: bold;
    &:hover {
      background: #003765;
    }
  }
  @media (max-width: 768px) {
    button {
      background: #0072bc;
      width: 1rem;
      height: 1.5rem;
      margin-right: -0.61rem;
      margin-left: -0.72rem;
    }
  }
`;
const Card = styled.div`
  position: relative;
  width: 12.5vw;
  //   min-width: 16vw;
  height: 38vh;
  background: white;
  color: black;
  margin: 0 0 0 1rem;
  border: 0.0625rem solid #dee1e7;
  border-radius: 0.0625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.7s all ease;
  border: 1.5px solid var(--border-color);
  &:hover {
    border-color: transparent;
    box-shadow: 0 0 15px 0 var(--border-color);

    transform: scale(1.01);
  }
  @media (max-width: 768px) {
    width: 31.5vw;
    height: 26vh;
    margin: 0.5rem 0.2rem;
  }
`;
const ItemImg = styled.img`
  padding-top: 2rem;
  width: 60%;
  height: auto;
  @media (max-width: 768px) {
    padding-top: 2rem;
    width: 50%;
    height: auto;
  }
`;
const ItemDetail = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  padding: 0.5rem 1rem 0.8rem 1rem;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 768px) {
    height: 35%;
    padding: 0.7rem;
  }
`;
const ItemRating = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  background: #f0eeeb;
  opacity: 0.8;
  padding: 0.2rem 0.3rem;
  border-radius: 3px;
  font-weight: bolder;
  margin-bottom: 1.2rem;
  justify-content: space-between;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 89%;
    margin-bottom: 0.4rem;
  }
`;
const Rating = styled.span`
  font-size: 0.7rem;
`;
const StarIcons = styled(StarIcon)`
  color: gold;
`;
const Line = styled.span`
  margin-bottom: 1px;
`;
const NoOfRating = styled.span`
  font-size: 0.7rem;
`;
const ItemName = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  @media (max-width: 768px) {
    letter-spacing: 0.05rem;
    font-size: 0.65rem;
  }
`;
const ItemData = styled.p`
  min-height: 30%;
  font-size: 0.6rem;
  margin: 0.2rem 0 0.8rem;
  color: #3b3a38;
  @media (max-width: 768px) {
    margin: 0.7rem 0 0.6rem;
    font-size: 0.4rem;
  }
`;
const ItemPrice = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.4rem;
  margin-bottom: 0rem;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
const CurrentPrice = styled.p`
  margin: 0;
  font-size: 0.8rem;
  // font-weight: 500;
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;
const OriginalPrice = styled.p`
  text-decoration-line: line-through;
  margin: 0;
  color: gray;
  margin-left: 1rem;
  letter-spacing: 0.5px;
  font-size: 0.65rem;
  @media (max-width: 768px) {
    margin-left: 0.25rem;
    font-size: 0.5rem;
  }
`;
const Discount = styled.p`
  color: red;
  margin: 0;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const fontS = {
  fontSize: "20",
};
