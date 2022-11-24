import React from "react";
import styled from "styled-components";
import { productsEnquiry } from "../../utils/data/data";
import { Link } from "react-router-dom";
import ProductEnquiryAccordion from "./ProductEnquiryAccordion";
import { motion } from "framer-motion";

function ProductEnquiry() {
  const variants = {
    leave: {
      x: "-100vw",
    },
  };
  return (
    <Container exit="leave" variants={variants}>
      <h1 className="head">Product Enquiry</h1>
      <Flex>
        {productsEnquiry.map((item, i) => (
          <Card>
            <Image>
              <img src={item.logo} alt="" />
            </Image>
            <Name>
              <Link to="/product-form">{item.name}</Link>
            </Name>
          </Card>
        ))}
      </Flex>
      <ProductEnquiryAccordion />
      <Suggestion>
        <p>Have any suggestions?</p>
        <br />
        <Link to="/product-form">Submit a request</Link>{" "}
        <span>on the type of support articles you'd like to see.</span>
      </Suggestion>
    </Container>
  );
}

export default ProductEnquiry;

const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  .head {
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    font-size: 3vw;
    color: #9c3233;
    padding: 2%;
  }
`;
const Flex = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4%;
  }
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  flex-wrap: wrap;
`;
const Card = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 5%;
  }
  width: 24%;
  height: 30vh;
  margin-bottom: 2%;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const Image = styled.div`
  height: 80%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    object-fit: cover;
  }
`;

const Name = styled.div`
  height: 20%;
  width: 100%;
  background: #9c3234e8;
  display: flex;
  align-items: center;
  padding: 2%;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  a {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-size: 1.2vw;
    font-weight: 600;
    color: white;
  }
`;

const Suggestion = styled.div`
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 5%;
  }
  margin: 2%;
  font-size: 1.4vw;
  a {
    font-weight: 600;
  }
`;
