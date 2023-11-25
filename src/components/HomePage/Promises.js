import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Promises() {
  return (
    <Fade bottom>
    <Container>
        <h3>Our Promises</h3>
      <PromiseDiv>
        <img src="/images/3_day.png" alt="" />
        <img src="/images/bestPricess.png" alt="" />
        <img src="/images/free_shippings.png" alt="" />
        <img src="/images/24hhh.png" alt="" />
      </PromiseDiv>
    </Container>
    </Fade>
  );
}

export default Promises;

const Container = styled.div`
  background-color: var(--main-background-color);
  width: 100%;
  height: 48vh;
  color: black;
  padding: 0 1.5rem;
  // border-top: 2px solid var(--border-color);
  // border-bottom: 2px solid var(--border-color);
  h3 {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 5vh;
    text-align: center;
    padding: 2rem 0 1.4rem 0;
    color: black;
  }
  @media (max-width: 768px) {
    padding: 0;
    h3 {
      padding: 0;
      font-size: 1.8rem;
      text-align: center;
    }
  }
`;
const PromiseDiv = styled.div`
  display: grid;
  color: black;

  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  place-items: center;
  img {
   width: 125px;
   height: 135px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
