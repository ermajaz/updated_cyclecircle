import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { hotDeals } from "../../data";
import h1 from "../../img/parts/hot_deals.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCarouselIndex } from "../../store/slices/hotDealsSlice";

const HotDeals = ({ setCarouselIndex, carouselIndex }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };

  const handleCarouselChange = (index) => {
    setCarouselIndex(index);
  };

  return (
    <Fade bottom>
      <Container>
        <h3>Hot Deals</h3>
        <StyledCarousel
          responsive={responsive}
          afterChange={handleCarouselChange}
          selectedIndex={carouselIndex}
        >
          {hotDeals.map((data) => (
            <Link
              key={data.id}
              style={{ textDecoration: "none" }}
              to="/product"
            >
              <Card>
                <HotDeal src={h1} alt="" />
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
                <HotDeal src={h1} alt="" />
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

const mapStateToProps = (state) => ({
  carouselIndex: state.hotDeals.carouselIndex,
});

const mapDispatchToProps = {
  setCarouselIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(HotDeals);

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
    text-transform: uppercase;
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
      font-size: 1.8rem;
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
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 0;
    margin-right: -1.6rem;
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
      margin-right: -0.5rem;
      margin-left: -0.3rem;
    }
  }
`;
const Card = styled.div`
  position: relative;
  width: 18vw;
  min-width: 16vw;
  height: 60vh;
  background: white;
  color: black;
  margin: 0 1rem;
  border: 0.0625rem solid var(--border-color);
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
    width: 45vw;
    height: 38vh;
    margin: 0.5rem 0.7rem;
  }
`;
const HotDeal = styled.img`
  position: absolute;
  width: 7rem;
  height: 7rem;
  margin: -2.2rem 0 0 14vw;
  transition: all 1s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    margin: -2.25rem 0 0 30vw;
  }
`;
const ItemImg = styled.img`
  padding-top: 5rem;
  width: 60%;
  height: auto;
  @media (max-width: 768px) {
    padding-top: 2rem;
    width: 65%;
    height: auto;
  }
`;
const ItemDetail = styled.div`
  width: 100%;
  height: 28%;
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 768px) {
    height: 30%;
    padding: 0.7rem;
  }
`;
const ItemRating = styled.div`
  width: 40%;
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
    width: 60%;
    margin-bottom: 1.3rem;
  }
`;
const Rating = styled.span`
  font-size: 0.9rem;
`;
const StarIcons = styled(StarIcon)`
  color: gold;
`;
const Line = styled.span`
  margin-bottom: 2px;
`;
const NoOfRating = styled.span`
  font-size: 0.9rem;
`;
const ItemName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  @media (max-width: 768px) {
    letter-spacing: 0.05rem;
    font-size: 0.9rem;
  }
`;
const ItemData = styled.p`
  min-height: 30%;
  font-size: 0.75rem;
  margin: 0.7rem 0 0.6rem;
  color: #3b3a38;
  @media (max-width: 768px) {
    margin: 0.7rem 0 0.6rem;
    font-size: 0.65rem;
  }
`;
const ItemPrice = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.2rem;
  margin-bottom: 0.4rem;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.4rem;
    margin-bottom: 0;
  }
`;
const CurrentPrice = styled.p`
  margin: 0;
  font-size: 1rem;
  // font-weight: 500;
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
const OriginalPrice = styled.p`
  text-decoration-line: line-through;
  margin: 0;
  color: gray;
  margin-left: 1rem;
  letter-spacing: 0.5px;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size: 0.65rem;
  }
`;
const Discount = styled.p`
  color: red;
  margin: 0;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const fontS = {
  fontSize: "20",
};
