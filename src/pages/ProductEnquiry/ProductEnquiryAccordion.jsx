import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styled from "styled-components";
import { productEnquiryAccordion } from "../../utils/data/AccordionData";

function ProductEnquiryAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }
    setActiveIndex(index);
    console.log(activeIndex);
  };
  return (
    <Container>
      <Header>
        <h1>Frequently asked questions</h1>
      </Header>
      {productEnquiryAccordion.map((item, index) => (
        <FAQ key={index}>
          <FaqHead onClick={() => toggleAccordion(index)}>
            <h3>{item.questions}</h3>
            {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </FaqHead>
          <FaqBody
            ds={activeIndex === index ? "50vh" : "0"}
            pd={activeIndex === index ? "2%" : "0"}
          >
            <a href={item.answer}>{item.answer}</a>
          </FaqBody>
        </FAQ>
      ))}
    </Container>
  );
}

export default ProductEnquiryAccordion;

const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 60%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin: 5% 2%;
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  padding-bottom: 2%;
`;
const Header = styled.div`
  @media (max-width: 768px) {
    font-size: 0.8rem;
    color: #9c3233;
  }
  padding: 2% 2%;
  h1{
    color: #9c3233;
  }
`;
const FAQ = styled.div`
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  font-size: 1.2vw;
`;

const FaqHead = styled.div`
  padding: 2%;
  display: flex;
  margin-right: 5%;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    color: #9c3233;
  }
`;

const FaqBody = styled.div`
  overflow: hidden;
  max-height: ${(props) => props.ds};
  transition: all 0.5s linear!important;
  a{
    line-height: 30px;
    margin-left: 2%;
    margin-bottom: 2%;
    max-width: 95%;
    color: #9c3233;
  }
`;
