import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/nav/Nav";
import SupportRequest from "./pages/Support-request/SupportRequest";
import ProductEnquiry from "./pages/ProductEnquiry/ProductEnquiry";
import SolutionAssesment from "./pages/SolutionsAssesment/SolutionAssesment";
import SupportForm from "./pages/Support-request/SupportForm";
import SolutionsForm from "./pages/SolutionsAssesment/SolutionsForm";
import ProductForm from "./pages/ProductEnquiry/ProductForm";
import Submit from "./pages/Support-request/submit/Submit";
function App() {
  const [preloader, setPreloader] = useState(true);
  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    leave: {
      x: "-100%",
      transition: { ease: "easeInOut" },
    },
    transition: {
      delayChildren: 0.5,
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  };
  const variants = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    show: {
      opacity: 1,
      y: "0vh",
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <AnimatePresence>
        {preloader && (
          <PreLoaderDiv
            initial="hidden"
            animate="show"
            exit="leave"
            variants={parentVariant}
          >
            <motion.h1
              variants={variants}
              initial="hidden"
              animate="show"
              transition={{
                delay: 1,
                duration: 3,
                damping:50,
                type: "spring",
                stiffness: "200",
              }}
            >
              CLOUD-SA AFRCA
            </motion.h1>
            <motion.h1
              variants={variants}
              initial="hidden"
              animate="show"
              transition={{
                delay: 1.5,
                damping:50,
                duration: 3,
                type: "spring",
                stiffness: "200",
              }}
            >
              AN AFRCAN CLOUD COMPANY
            </motion.h1>
          </PreLoaderDiv>
        )}
      </AnimatePresence>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<SupportRequest />} />
          <Route path="/product-enquiry" element={<ProductEnquiry />} />
          <Route path="/solutions" element={<SolutionAssesment />} />
          <Route path="/support-form" element={<SupportForm />} />
          <Route path="/solution-form" element={<SolutionsForm />} />
          <Route path="/product-form" element={<ProductForm />} />
          <Route path="/subit-form" element={<Submit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const PreLoaderDiv = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: #9c3233;
  font-family: "Kanit", sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 2vw;
  color: #fff;
  justify-content: center;
  align-items: center;
  gap: 5%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 222;
`;
