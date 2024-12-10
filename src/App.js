import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioNavbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/ContactForm';
import About from "./pages/about";
import Skills from "./pages/Skills";

function App() {
    return (
        <Router>
      <PortfolioNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    )
}

export default App
