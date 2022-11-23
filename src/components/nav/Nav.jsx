import React from "react";
import styled from "styled-components";
import NavButton from "../../utils/navButton/NavButton";
import logo from "../../assets/cldsa.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>

      <Links>
        <Link to="/support">Support Request</Link>
        <Link to="/product-enquiry">Product Enquiry</Link>
        <Link to="/solutions">Solutions Assessment</Link>
      </Links>
      <NavButton link="/subit-form" content="Submit request" />
    </Container>
  );
}

export default Nav;
const Container = styled.nav`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
const Logo = styled.div`
  width: 15%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Links = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #9c3233;
    text-decoration: none;
    font-size: 1.5vw;
    font-weight: 600;
  }
`;
