import React from "react";
import styled from "styled-components";
import { supportRequest } from "../../utils/data/data";
import SupportAccordion from "./supportAccordion";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";

function SupportRequest() {
  const variants = {
    leave:{
      x:"-100vw"
    }
  }
  return (
    <Container exit="leave" variants={variants}>
      <h1 className="head">SupportRequest</h1>
      <Flex>
        {supportRequest.map((item, i) => (
          <Card>
            <Image>
              <img src={item.logo} alt="" />
            </Image>
            <Name>
              <p>{item.name}</p>
            </Name>
          </Card>
        ))}
      </Flex>
      <SupportAccordion/>
      <Suggestion>
      <p>Have any suggestions?</p><br />
      <Link to='/support-form'>Submit a request</Link> <span>on the type of support articles you'd like to see.</span> 
      </Suggestion>
    </Container>
  );
}

export default SupportRequest;

const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  .head {
    font-size: 3vw;
    color: #9c3233;
    padding: 2%;
  }
`;
const Flex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  flex-wrap: wrap;
`;
const Card = styled.div`
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
  p {
    font-size: 1.2vw;
    font-weight: 600;
    color: white;
  }
`;

const Suggestion = styled.div`
  margin: 2%;
  font-size: 1.4vw;
  a{
    font-weight: 600;
  }
`