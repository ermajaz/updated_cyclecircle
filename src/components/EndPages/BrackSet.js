import React from 'react'
import styled from 'styled-components'
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';


export function BrackSet() {
  return (
    <>
    <Header/>
    <Container>BrackSet</Container>
    <Footer/>
    </>
  )
}


const Container = styled.div`
width: 90vw;
height: 48vh;
font-size: 3rem;
text-align:center;
color: black;

`