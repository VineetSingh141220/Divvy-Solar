import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="bg-[color:var(--color-background-light)] dark:bg-[color:var(--color-background-dark)] text-[color:var(--color-text-light)] dark:text-[color:var(--color-text-dark)] font-sans antialiased transition-colors duration-300 flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <WhatsappButton />
      </div>
    </Router>
  );
}

export default App;
