import React from 'react'
import styled from 'styled-components'
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';

export function Term_Condition() {
  return (
    <>
    <Header/>
    <Container>Term_Condition</Container>
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