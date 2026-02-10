import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="bg-[color:var(--color-background-light)] dark:bg-[color:var(--color-background-dark)] text-[color:var(--color-text-light)] dark:text-[color:var(--color-text-dark)] font-sans antialiased transition-colors duration-300 flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <WhatsappButton />
      </div>
    </Router>
  );
}

export default App;
