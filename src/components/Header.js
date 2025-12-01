import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Import the external CSS file

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    setOpenNestedDropdown(null);
  };

  const handleNestedDropdownToggle = (nestedDropdownName) => {
    setOpenNestedDropdown(openNestedDropdown === nestedDropdownName ? null : nestedDropdownName);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // A single function to close all menus when a navigation link is clicked
  const handleNavLinkClick = () => {
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      let clickedInsideDropdown = false;
      const dropdowns = document.querySelectorAll('.main-nav .dropdown, .mobile-menu-container .dropdown');

      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target)) {
          clickedInsideDropdown = true;
        }
      });

      const hamburgerButton = document.querySelector('.hamburger-menu');
      if (hamburgerButton && hamburgerButton.contains(event.target)) {
        return;
      }

      if (!clickedInsideDropdown) {
        setOpenDropdown(null);
        setOpenNestedDropdown(null);
      }

      const mobileMenuContainer = document.querySelector('.mobile-menu-container');
      if(mobileMenuContainer && !mobileMenuContainer.contains(event.target) && hamburgerButton && !hamburgerButton.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const renderNavLinks = () => (
    <>
      <li><NavLink to="/" end onClick={handleNavLinkClick}>HOME</NavLink></li>

      <li className={`dropdown ${openDropdown === 'aboutUs' ? 'active' : ''}`}>
        <div className={`dropdown-toggle ${openDropdown === 'aboutUs' ? 'active' : ''}`} onClick={() => handleDropdownToggle('aboutUs')} role="button" tabIndex="0" aria-expanded={openDropdown === 'aboutUs'}>
          ABOUT US <i className="fas fa-caret-down"></i>
        </div>
        <div className={`dropdown-content ${openDropdown === 'aboutUs' ? 'open' : ''}`}>
          <Link to="/about-us/institute" onClick={handleNavLinkClick}>About Institute</Link>
          <Link to="/about-us/vision-mission" onClick={handleNavLinkClick}>Vision & Mission</Link>
          <div
            className={`dropdown-nested ${openNestedDropdown === 'message' ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); handleNestedDropdownToggle('message'); }}>
            <div className="dropdown-toggle-nested" role="button" tabIndex="0" aria-expanded={openNestedDropdown === 'message'}>
              Message <i className="fas fa-caret-right"></i>
            </div>
            <div className={`dropdown-content-nested ${openNestedDropdown === 'message' ? 'open' : ''}`}>
              <Link to="/about-us/message/president" onClick={handleNavLinkClick}>President</Link>
              <Link to="/about-us/message/secretary" onClick={handleNavLinkClick}>Secretary</Link>
              <Link to="/about-us/message/principal" onClick={handleNavLinkClick}>Principal</Link>
            </div>
          </div>
          <Link to="/about-us/gb-cdc" onClick={handleNavLinkClick}>GB/CDC</Link>
          <Link to="/about-us/organogram" onClick={handleNavLinkClick}>Organogram</Link>
          <Link to="/about-us/infrastructure" onClick={handleNavLinkClick}>Infrastructure</Link>
          <Link to="/about-us/statutory-committee" onClick={handleNavLinkClick}>Statutory Committee</Link>
        </div>
      </li>

      <li className={`dropdown ${openDropdown === 'affiliation' ? 'active' : ''}`}>
        <div className={`dropdown-toggle ${openDropdown === 'affiliation' ? 'active' : ''}`} onClick={() => handleDropdownToggle('affiliation')} role="button" tabIndex="0" aria-expanded={openDropdown === 'affiliation'}>
          AFFILIATION <i className="fas fa-caret-down"></i>
        </div>
        <div className={`dropdown-content ${openDropdown === 'affiliation' ? 'open' : ''}`}>
          <Link to="/affiliation/pci" onClick={handleNavLinkClick}>PCI</Link>
          <Link to="/affiliation/msbte" onClick={handleNavLinkClick}>MSBTE</Link>
          <Link to="/affiliation/govt-of-mah" onClick={handleNavLinkClick}>Govt of Resoulation</Link>
          <Link to="/affiliation/dte" onClick={handleNavLinkClick}>DTE</Link>
          <Link to="/affiliation/aishe" onClick={handleNavLinkClick}>Aishe</Link>
          <Link to="/affiliation/iso" onClick={handleNavLinkClick}>ISO</Link>
        </div>
      </li>
      
      <li className={`dropdown ${openDropdown === 'courses' ? 'active' : ''}`}>
        <div className={`dropdown-toggle ${openDropdown === 'courses' ? 'active' : ''}`} onClick={() => handleDropdownToggle('courses')} role="button" tabIndex="0" aria-expanded={openDropdown === 'courses'}>
          COURSES <i className="fas fa-caret-down"></i>
        </div>
        <div className={`dropdown-content ${openDropdown === 'courses' ? 'open' : ''}`}>
          <Link to="/courses/d-pharm" onClick={handleNavLinkClick}>D.Pharm</Link>
        </div>
      </li>

      <li><NavLink to="/faculty" onClick={handleNavLinkClick}>FACULTY</NavLink></li>

      <li className={`dropdown ${openDropdown === 'rd' ? 'active' : ''}`}>
        <div className={`dropdown-toggle ${openDropdown === 'rd' ? 'active' : ''}`} onClick={() => handleDropdownToggle('rd')} role="button" tabIndex="0" aria-expanded={openDropdown === 'rd'}>
          R&D <i className="fas fa-caret-down"></i>
        </div>
        <div className={`dropdown-content ${openDropdown === 'rd' ? 'open' : ''}`}>
          <Link to="/r&d/publication" onClick={handleNavLinkClick}>Publication</Link>
          <Link to="/r&d/patent" onClick={handleNavLinkClick}>Patent</Link>
          <Link to="/r&d/copyright" onClick={handleNavLinkClick}>Copyright</Link>
        </div>
      </li>
      
      <li><NavLink to="/iqac" onClick={handleNavLinkClick}>IQAC</NavLink></li>
      <li><NavLink to="/alumni" onClick={handleNavLinkClick}>ALUMNI</NavLink></li>
      
      <li className={`dropdown ${openDropdown === 'events' ? 'active' : ''}`}>
        <div className={`dropdown-toggle ${openDropdown === 'events' ? 'active' : ''}`} onClick={() => handleDropdownToggle('events')} role="button" tabIndex="0" aria-expanded={openDropdown === 'events'}>
          EVENTS <i className="fas fa-caret-down"></i>
        </div>
        <div className={`dropdown-content ${openDropdown === 'events' ? 'open' : ''}`}>
          <Link to="/events/cultural" onClick={handleNavLinkClick}>Cultural</Link>
          <Link to="/events/sports" onClick={handleNavLinkClick}>Sports</Link>
        </div>
      </li>

      <li><NavLink to="/downloads" onClick={handleNavLinkClick}>DOWNLOADS</NavLink></li>
      
      {/* <li>
        <NavLink to="/faculty-login" onClick={handleNavLinkClick}>
          FACULTY LOGIN 
        </NavLink>
      </li> */}
<li><a href="/faculty-login" class="faculty-login-btn">Faculty Login</a></li>


    </>
  );

  return (
    <header className="main-header">
      <div className="top-bar">
        <div className="top-bar-content">
        </div>
      </div>

      <section className="institute-info-section">
        <div className="institute-details-container centered-content">
          <img src="/new-header-logo-removebg-preview.png" alt="Institute Logo" />
          <div className="institute-details centered-text">
            <h1>Sumatidevi Tompe Institute of Pharmaceutical Science and Research</h1>
            <h3>Chandur Bazar Amravati</h3>
            <p className="affiliation">Approved by PCI & Government of Maharashtra & DTE</p>
            <p className="motto">"developing good minds"</p>
          </div>
        </div>

        <div className="hamburger-menu" onClick={handleMobileMenuToggle}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </section>

      <nav className="main-nav">
        <ul>
          {renderNavLinks()}
        </ul>
      </nav>

      <div className={`mobile-menu-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu">
          {renderNavLinks()}
        </ul>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import "./Header.css";

// const Header = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <header className="header">
//       {/* LOGO + TITLE */}
//       <div className="header-left">
//         <img src="/logo.png" alt="Institute Logo" className="logo" />

//         <div className="title">
//           <h1>SUMATIDEVI TOMPE</h1>
//           <h2>Institute of Pharmaceutical Science & Research</h2>
//         </div>
//       </div>

//       {/* MOBILE HAMBURGER */}
//       <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
//         ☰
//       </div>

//       {/* NAVIGATION */}
//       <nav className={`nav ${mobileMenu ? "open" : ""}`}>
//         <ul>
//           <li><a href="/">Home</a></li>

//           {/* ABOUT US DROPDOWN */}
//           <li
//             className="dropdown"
//             onMouseEnter={() => toggleDropdown("about")}
//             onMouseLeave={() => toggleDropdown(null)}
//           >
//             <a className="drop-trigger">
//               About Us <ChevronDown size={16} />
//             </a>

//             {activeDropdown === "about" && (
//               <ul className="dropdown-menu">
//                 <li><a href="/vision">Vision & Mission</a></li>
//                 <li><a href="/principal">Principal Message</a></li>
//                 <li><a href="/infrastructure">Infrastructure</a></li>
//               </ul>
//             )}
//           </li>

//           <li><a href="/courses">Courses</a></li>
//           <li><a href="/faculty">Faculty</a></li>

//           {/* ACADEMICS DROPDOWN */}
//           <li
//             className="dropdown"
//             onMouseEnter={() => toggleDropdown("academics")}
//             onMouseLeave={() => toggleDropdown(null)}
//           >
//             <a className="drop-trigger">
//               Academics <ChevronDown size={16} />
//             </a>

//             {activeDropdown === "academics" && (
//               <ul className="dropdown-menu">
//                 <li><a href="/syllabus">Syllabus</a></li>
//                 <li><a href="/calendar">Academic Calendar</a></li>
//               </ul>
//             )}
//           </li>

//           <li><a href="/contact">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
