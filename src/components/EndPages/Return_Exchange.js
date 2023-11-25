import React from 'react'
import styled from 'styled-components'
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';

export function Return_Exchange() {
  return (
    <>
    <Header/>
    <Container>Return_Exchange</Container>
    <Footer/>
    </>
  )
    
}


const Container = styled.div`
width: 90vw;
height: 10vh;
font-size: 3rem;
text-align:center;
color: black;

`