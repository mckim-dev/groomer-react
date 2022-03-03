import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/index";
import About from "./pages/about";
import Appointments from "./pages/appts";
import Schedule from "./pages/schedule";
import Contact from "./pages/contact";

// import { FaDog } from 'react-icons/fa';
// import NavMobile from "./components/NavMobile";
// import { Outlet } from "react-router-dom";
// import Form from './components/Form';


function App() {
  const [isShowing, setIsShowing] = useState(false)

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  // useEffect = (() => {
  //   const hideMobile = () => {
  //     if (window.innerWidth > 768 && isShowing) {
  //       setIsShowing(false);
  //     }
  //   };

  //   window.addEventListener('resize', hideMobile);

  //   return () => {
  //     window.removeEventListener('resize', hideMobile);
  //   };
  // }
  // );

  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="about" element={<About />} />
        <Route path="appts" element={<Appointments />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
