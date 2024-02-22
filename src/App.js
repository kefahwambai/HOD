import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Corprate from "./components/Services/Corporate";
import EventPlanning from "./components/Services/EventPlanning";
import Parties from "./components/Services/Parties";
import Weddings from "./components/Services/Weddings";
import ScrollToTop from "./components/scrollToTop";
import Venues from "./components/Venues";
import Topbar from "./components/Topbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path ="/corporate" element={<Corprate/>} />
          <Route path="/events" element={<EventPlanning/>} />
          <Route path="/parties" element={<Parties/>} />
          <Route path="weddings" element={<Weddings/>} />
          <Route path="/venue" element={<Venues/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
