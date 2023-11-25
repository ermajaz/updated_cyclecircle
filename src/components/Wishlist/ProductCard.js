import React, { useState } from "react";
import "./ProductCard.css";
import styled from "styled-components";
import { wishlists } from "../../data";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ProductCard() {
  const [wishlist, setWishlist] = useState(wishlists);
  function increaseCarts(id) {
    const updatedWishlists = wishlist.map((product) => {
      if (product.id === id) {
        return { ...product, carts: product.carts + 1 };
      }
      return product;
    })
    setWishlist([...updatedWishlists]);
  }

  function decreaseCarts(id) {
    const updatedWishlists = wishlist.map((product) => {
      if (product.id === id && product.carts > 0) {
        return { ...product, carts: product.carts - 1 };
      }
      return product;
    });
    setWishlist([...updatedWishlists]);
  }

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <Wishlist>
      {wishlist.map((data) => (
        <Link style={{ textDecoration: "none" }} to="/product">
          <Card key={data.id}>
            <Cross style={fontC} onClick={preventDefault} />
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
              <CounterCarts onClick={preventDefault}>
                <ProductCounter>
                  <KeyboardArrowDownIcon
                    style={{
                      background: "#003765",
                      borderRadius: "50px",
                      color:"white",
                      width: "28px",
                      height: "28px",
                      cursor: "pointer",
                    }}
                    onClick={() => decreaseCarts(data.id)}
                  />
                  <CouterVal>{data.carts}</CouterVal>
                  <KeyboardArrowUpIcon
                    style={{
                      background: "#003765",
                      borderRadius: "50px",
                      color:"white",
                      width: "28px",
                      height: "28px",
                      cursor: "pointer",
                    }}
                    onClick={() => increaseCarts(data.id)}
                  />
                </ProductCounter>
                <Link to="#!">
                  <ShoppingCartOutlinedIcon
                    style={{
                      background: "white",
                      borderRadius: "50px",
                      color: "black",
                      padding: "5px",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  Add to Carts
                </Link>
              </CounterCarts>
            </ItemDetail>
          </Card>
        </Link>
      ))}
    </Wishlist>
  );
}

export default ProductCard;

const Wishlist = styled.div`
  width: 100%;
  height: auto;
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  a{
    margin: 1rem;
  }
`;

const Card = styled.div`
  position: relative;
  width: 19vw;
  height: 58vh;
  background: white;
  color: black;
  border: 0.0625rem solid var(--border-color);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 0 1.5vw;
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

const Cross = styled(DeleteForeverIcon)`
  position: absolute;
  border-radius: 50px;
  color:gray;
  right: 1rem;
  top: 1rem;
  cursor:pointer;
  &:hover{
    color:#d12a0b;
  }
`;
const ItemImg = styled.img`
  padding-top: 1.5rem;
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
  height: 35%;
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
  font-size: 0.7rem;
  margin: 0.5rem 0 0 0;
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
  margin-top: 0;
  margin-bottom: 0.6rem;
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

const CounterCarts = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f1f1;
  border-radius: 8px;
  padding: 5px;
  a {
    background: #3a9978;
    color: #eee;
    width: 100%;
    height: auto;
    margin:0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 0.3rem;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    padding: 6px 70px 6px 5px;
    box-shadow: 1px 1px 5px 0px rgb(100, 100, 100);
  }
`;
const ProductCounter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 10px 10px;
  align-items: center;
`;
const CouterVal = styled.span`
font-size: 1.3rem;
background:white;
border-radius:50px;
padding: 3px 10px;
`
const fontS = {
  fontSize: "16",
};
const fontC = {
  fontSize: "31",
};
