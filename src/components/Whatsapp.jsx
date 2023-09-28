import React from "react";
import styled from "styled-components";
// import whatsapp from "../assets/whatsapp.png";
import whatsapp from "../assets/whatsapp.png";


export default function Whatsapp() {
  return (
    <Container>
      <a href="https://api.whatsapp.com/send?phone=2348108969965"><img src={whatsapp} alt="" /></a>
    </Container>
  );
}


const Container = styled.div`
  position: fixed;
  right: 2%;
  bottom: 15%;
  width: 55px;
  height: 55px;
  border: 1px solid #000;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:90;
  }
`;
