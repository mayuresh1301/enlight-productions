import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Photos from "./components/Photos";
import Videos from "./components/Videos";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/photos">Photos</Link></li>
            <li><Link to = "/videos">Videos</Link></li>
            <li><Link to = "/services">Services</Link></li>
            <li><Link to = "/reviews">Reviews</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;