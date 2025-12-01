import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

// Import the logo image and the main CSS file for the entire app
import logo from './images/animation-logo.jpg';
import './App.css'; 

// Import components for all routes
import AboutInstitute from './components/AboutInstitute';
import VisionMission from './components/VisionMission';
import GBCDC from './components/GBCDC';
import Organogram from './components/Organogram';
import Infrastructure from './components/Infrastructure';
import StatutoryCommittee from './components/StatutoryCommittee';

import Secretary from './components/Secretary';
import Principal from './components/Principal';
import President from './components/President';
import PCI from './components/PCI';
import MSBTE from './components/MSBTE';
import GovtOfMah from './components/GovtOfMah';
import DTE from './components/DTE';
//import Aishe from './components/Aishe';
import AisheCertificate from './components/AisheCertificate';
import ISO from './components/ISO';
import Publication from './components/Publication';
import Patent from './components/Patent'; // Corrected path
import Copyright from './components/Copyright';
import DPharm from './components/DPharm';
import Admission from './components/Admission';
import Feedback from './components/Feedback';
import IQAC from './components/IQAC';
import NAAC from './components/NAAC';
import NRF from './components/NRF';
import SwayamPortal from './components/SwayamPortal';
import Alumni from './components/Alumni';
import Facilities from './components/Facilities';
import Events from './components/Events';
import CulturalEvents from './components/CulturalEvents';
import SportsEvents from './components/SportsEvents';
import ERP from './components/ERP';
import Downloads from './components/Downloads';
import Faculty from './components/Faculty';
import FacultyAuth from './components/FacultyAuth';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Timer to hide the logo after 3 seconds (3000ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        // Display the splash screen while loading
        <div className="animated-logo-section">
          <img src={logo} alt="Sumatidevi Tompe Institute Animated Logo" className="animated-home-logo" />
        </div>
      ) : (
        // Display the full website after loading
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faculty-login" element={<FacultyAuth />} />
              <Route path="/about-us/institute" element={<AboutInstitute />} />
              <Route path="/about-us/vision-mission" element={<VisionMission />} />
              <Route path="/about-us/gb-cdc" element={<GBCDC />} />
              <Route path="/about-us/organogram" element={<Organogram />} />
              <Route path="/about-us/infrastructure" element={<Infrastructure />} />
              <Route path="/about-us/statutory-committee" element={<StatutoryCommittee />} />
              <Route path="/about-us/message/president" element={<President />} />
              <Route path="/about-us/message/secretary" element={<Secretary />} />
              <Route path="/about-us/message/principal" element={<Principal />} />
              <Route path="/affiliation/pci" element={<PCI />} />
              <Route path="/affiliation/msbte" element={<MSBTE />} />
              <Route path="/affiliation/govt-of-mah" element={<GovtOfMah />} />
              <Route path="/affiliation/dte" element={<DTE />} />
              <Route path="/affiliation/aishe" element={<AisheCertificate />} />
              <Route path="/affiliation/iso" element={<ISO />} />
              <Route path="/r&d/publication" element={<Publication />} />
              <Route path="/r&d/patent" element={<Patent />} />
              <Route path="/r&d/copyright" element={<Copyright />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/courses/d-pharm" element={<DPharm />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/iqac" element={<IQAC />} />
              <Route path="/naac" element={<NAAC />} />
              <Route path="/nrf" element={<NRF />} />
              <Route path="/swayam-portal" element={<SwayamPortal />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/cultural" element={<CulturalEvents />} />
              <Route path="/events/sports" element={<SportsEvents />} />
              <Route path="/erp" element={<ERP />} />
              <Route path="/downloads" element={<Downloads />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
