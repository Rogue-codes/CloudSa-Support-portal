import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../../assets/bg.png";
function Home() {
  return (
    <Container>
      <div className="flex">
        <p>Welcome to our</p>
        <h1>SUPPORT PORTAL</h1>
        <p>African Cloud Company</p>
        <Link to="/support">Get started</Link>
      </div>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  width: 100%;
  height: 85vh;
  background: linear-gradient(
      90deg,
      #0e0215b4 0%,
      #121111cf 32%,
      #090909a0 100%
    ),
    url(${background});
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-position: 10% 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 2%;
  .flex {
    @media (max-width: 768px) {
      width: 100%;
      padding: 2%;
    }
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    h1 {
      @media (max-width: 768px) {
        font-size: 4rem;
      }
      font-size: 5vw;
      font-family: "Spectral", serif;
      font-weight: 900;
      color: white;
      .sa {
        color: #000;
      }
    }
    p {
      @media (max-width: 768px) {
        font-size: 2rem;
      }
      font-size: 3vw;
      color: #ffff;
      font-family: "Spectral", serif;
      font-weight: 500;
    }
    a {
      @media (max-width: 768px) {
        width: 50%;
        font-size: 1.2rem;
      }
      background: #9c3233;
      width: 35%;
      height: 10vh;
      text-decoration: none;
      color: #ffff;
      font-size: 1.8vw;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
