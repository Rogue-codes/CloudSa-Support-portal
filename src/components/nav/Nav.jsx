import React, { useState } from "react";
import styled from "styled-components";
import NavButton from "../../utils/navButton/NavButton";
import logo from "../../assets/cldsa.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Nav() {
  const [clicked, setClicked] = useState(false);
  const [showWrapper, setshowWrapper] = useState(false);
  const toggleMenu = () => {
    setClicked(!clicked);
    setshowWrapper(!showWrapper);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%", transition: { delay: 0.5 } },
  };
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
      <NavButton link="/support-form" content="Submit request" />

      <div
        className={
          clicked
            ? "hamburger hamburger--spring is-active"
            : "hamburger hamburger--spring"
        }
        onClick={toggleMenu}
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>

      <Wrapper
        initial={false}
        animate={showWrapper ? "open" : "closed"}
        variants={variants}
      >
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/support" onClick={toggleMenu}>
          Support Request
        </Link>
        <Link to="/product-enquiry" onClick={toggleMenu}>
          Product Enquiry
        </Link>
        <Link to="/solutions" onClick={toggleMenu}>
          Solution Assessment
        </Link>
        <button className="get-started" onClick={toggleMenu}>
          <Link to="/support-form">submit request</Link>
        </button>
      </Wrapper>
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
  position: relative;
  .hamburger {
    @media (max-width: 768px) {
      display: block;
    }
    display: none;
  }
  .hamburger-box {
    width: 40px;
    height: 24px;
    position: relative;
    cursor: pointer;
  }
  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }
  .hamburger--spring .hamburger-inner {
    top: 2px;
    transition: background-color 0s 0.13s linear;
    /* color: #fff; */
  }
  .hamburger--spring .hamburger-inner::before {
    top: 10px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spring .hamburger-inner::after {
    top: 20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spring.is-active .hamburger-inner {
    transition-delay: 0.22s;
    background-color: transparent !important;
  }
  .hamburger--spring.is-active .hamburger-inner::before {
    top: 0;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--spring.is-active .hamburger-inner::after {
    top: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(-45deg);
  }
`;
const Logo = styled.div`
@media (max-width: 768px) {
    width: 40%;
}
  width: 15%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Links = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
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
const Wrapper = styled(motion.div)`
  width: 80%;
  padding: 2%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: #9c3233;
  z-index: 999999999;
  a {
    display: block;
    padding: 8% 2%;
    font-size: 2rem;
    text-decoration: none;
    color: white;
  }
  .get-started {
    padding: 2% 5%;
    margin-top: 5%;
    width: 80%;
    background: #fff;
    border: none;
    border-radius: 5px;
    a {
      color: #9c3233;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`;
