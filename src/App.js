import React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Message from './pages/Message'
import Faqs from './pages/Faqs';
import Project from './pages/Project';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
  AOS.init({ once: true, duration: 1000 });
}, []);
  return (
    <div className="box-sizing:border-box light:bg-gray-100 dark:black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
