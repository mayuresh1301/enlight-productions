import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Photos from "./components/Photos";
import Videos from "./components/Videos";
import Services from "./components/Services";
import InquiryForm from "./components/InquiryForm";
//import Reviews from "./components/Reviews";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/inquiry" element={<InquiryForm />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;