import React from "react";
import "./ProductCard.css";
import styled from "styled-components";
import { hotDeals } from "../../data";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

function LikeProductCard() {
  return (
    <Wishlist>
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
              </ItemPrice>
            </ItemDetail>
          </Card>
        </Link>
      ))}
    </Wishlist>
  );
}

export default LikeProductCard;

const Wishlist = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
padding-left: 1rem;
`;

const Card = styled.div`
position: relative;
width: 19vw;
height: 55vh;
background: white;
color: black;
border: 0.0625rem solid var(--border-color);
border-radius: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
cursor: pointer;
margin: 1rem 2.5vw;
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
const ItemImg = styled.img`
  padding-top: 3rem;
  width: 62%;
  height: auto;
  @media (max-width: 768px) {
    padding-top: 2rem;
    width: 65%;
    height: auto;
  }
`;
const ItemDetail = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: column;
  justify-content: flex-end;
  a {
    background: #3a9978;
    color: #eee;
    width: 100%;
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 0.3rem;
    align-items: center;
    justify-content: space-between;
    font-size: 0.85rem;
    padding: 6px 45px 6px 5px;
    box-shadow: 1px 1px 5px 0px rgb(100, 100, 100);
  }
  @media (max-width: 768px) {
    height: 30%;
    padding: 0.7rem;
  }
`;
const ItemRating = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  background: #f0eeeb;
  opacity: 0.8;
  padding: 0.2rem 0.3rem;
  border-radius: 3px;
  font-weight: bolder;
  margin-bottom: 0.5rem;
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
  font-size: 0.8rem;
`;
const StarIcons = styled(StarIcon)`
  color: gold;
`;
const Line = styled.span`
  margin-bottom: 2px;
`;
const NoOfRating = styled.span`
  font-size: 0.8rem;
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
  margin: 0.5rem 0 0.4rem 0;
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
  margin-top: 0rem;
  margin-bottom: 1rem;
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

const fontS = {
  fontSize: "16",
};
const fontC = {
  fontSize: "28",
};
