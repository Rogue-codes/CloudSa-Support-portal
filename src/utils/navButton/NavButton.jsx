import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavButton({ content, link }) {
  return (
    <Container>
      <Link to={link}>{content}</Link>
    </Container>
  );
}

export default NavButton;

const Container = styled.button`
@media (max-width: 768px) {
  display: none;
}
  width: 15%;
  font-size: 1.5vw;
  height: 8vh;
  border: none;
  background: #9c3233;
  a {
    text-decoration: none;
    color: white;
  }
`;
