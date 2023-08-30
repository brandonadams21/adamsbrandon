import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/pages/Blog';
import Cards from "../src/components/Cards";
import HeroSection from "../src/components/MainSection";
import Footer from "../src/components/Footer";
import About from "../src/components/About";
import Contact from "../src/components/pages/Contact";

function App() {  
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Cards />
        <About />
        <Contact />
        <Footer />

        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
