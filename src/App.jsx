import { Home, About, Contact, Projects, Timeline, SphericalReadMore, DeepFakeReadMore, BBDCReadMore, GCPReadMore } from './pages'
import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";


const App = () => {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
      <Route path="timeline" element={<Timeline />} />
      <Route path="spherical" element={<SphericalReadMore />} />
      <Route path="deepfake" element={<DeepFakeReadMore />} />
      <Route path="booking-bot" element={<BBDCReadMore />} />
      <Route path="full-stack" element={<GCPReadMore />} />
    </Routes>
  </div>

  );
};

export default App;