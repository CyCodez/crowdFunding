import "./App.css";
// import Paystacks from "./Paystack";
import Navigation from "./Navigation";
import Donate from "./Donate";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Vision from "./Vision";
// import TransactionsList from "./Paystack";
function App() {
  return (
    <div>
      {/* <TransactionsList /> */}
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/donations" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
