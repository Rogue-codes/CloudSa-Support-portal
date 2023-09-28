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
import Nav from "./components/nav/Nav";
import Routers from "./routing/Routers";
import ScrollToTop from "./utils/scrollToTop/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Whatsapp from './components/Whatsapp'

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
            initial={true}
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
                damping: 50,
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
                damping: 50,
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
        <ScrollToTop />
        <Whatsapp />
        <Nav />
        <Routers />
        <ToastContainer />
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
