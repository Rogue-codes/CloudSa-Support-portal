import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import SupportRequest from "../pages/Support-request/SupportRequest"
import ProductEnquiry from "../pages/ProductEnquiry/ProductEnquiry";
import SolutionAssesment from "../pages/SolutionsAssesment/SolutionAssesment";
import SupportForm from "../pages/Support-request/SupportForm";
import SolutionsForm from "../pages/SolutionsAssesment/SolutionsForm";
import ProductForm from "../pages/ProductEnquiry/ProductForm";
import Submit from "../pages/submit/Submit";
import { AnimatePresence } from "framer-motion";

function Routers() {
    const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<SupportRequest />} />
        <Route path="/product-enquiry" element={<ProductEnquiry />} />
        <Route path="/solutions" element={<SolutionAssesment />} />
        <Route path="/support-form" element={<SupportForm />} />
        <Route path="/solution-form" element={<SolutionsForm />} />
        <Route path="/product-form" element={<ProductForm />} />
        <Route path="/subit-form" element={<Submit />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Routers;
