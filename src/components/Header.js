//   import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import './Header.css'; // Import the external CSS file

// const Header = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleDropdownToggle = (dropdownName) => {
//     setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
//     setOpenNestedDropdown(null);
//   };

//   const handleNestedDropdownToggle = (nestedDropdownName) => {
//     setOpenNestedDropdown(openNestedDropdown === nestedDropdownName ? null : nestedDropdownName);
//   };

//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // A single function to close all menus when a navigation link is clicked
//   const handleNavLinkClick = () => {
//     setOpenDropdown(null);
//     setOpenNestedDropdown(null);
//     setIsMobileMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleDocumentClick = (event) => {
//       let clickedInsideDropdown = false;
//       const dropdowns = document.querySelectorAll('.main-nav .dropdown, .mobile-menu-container .dropdown');

//       dropdowns.forEach(dropdown => {
//         if (dropdown.contains(event.target)) {
//           clickedInsideDropdown = true;
//         }
//       });

//       const hamburgerButton = document.querySelector('.hamburger-menu');
//       if (hamburgerButton && hamburgerButton.contains(event.target)) {
//         return;
//       }

//       if (!clickedInsideDropdown) {
//         setOpenDropdown(null);
//         setOpenNestedDropdown(null);
//       }

//       const mobileMenuContainer = document.querySelector('.mobile-menu-container');
//       if(mobileMenuContainer && !mobileMenuContainer.contains(event.target) && hamburgerButton && !hamburgerButton.contains(event.target)) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener('click', handleDocumentClick);

//     return () => {
//       document.removeEventListener('click', handleDocumentClick);
//     };
//   }, []);

//   const renderNavLinks = () => (
//     <>
//       <li><NavLink to="/" end onClick={handleNavLinkClick}>HOME</NavLink></li>

//       <li className={`dropdown ${openDropdown === 'aboutUs' ? 'active' : ''}`}>
//         <div className={`dropdown-toggle ${openDropdown === 'aboutUs' ? 'active' : ''}`} onClick={() => handleDropdownToggle('aboutUs')} role="button" tabIndex="0" aria-expanded={openDropdown === 'aboutUs'}>
//           ABOUT US <i className="fas fa-caret-down"></i>
//         </div>
//         <div className={`dropdown-content ${openDropdown === 'aboutUs' ? 'open' : ''}`}>
//           <Link to="/about-us/institute" onClick={handleNavLinkClick}>About Institute</Link>
//           <Link to="/about-us/vision-mission" onClick={handleNavLinkClick}>Vision & Mission</Link>
//           <div
//             className={`dropdown-nested ${openNestedDropdown === 'message' ? 'active' : ''}`}
//             onClick={(e) => { e.stopPropagation(); handleNestedDropdownToggle('message'); }}>
//             <div className="dropdown-toggle-nested" role="button" tabIndex="0" aria-expanded={openNestedDropdown === 'message'}>
//               Message <i className="fas fa-caret-right"></i>
//             </div>
//             <div className={`dropdown-content-nested ${openNestedDropdown === 'message' ? 'open' : ''}`}>
//               <Link to="/about-us/message/president" onClick={handleNavLinkClick}>President</Link>
//               <Link to="/about-us/message/secretary" onClick={handleNavLinkClick}>Secretary</Link>
//               <Link to="/about-us/message/principal" onClick={handleNavLinkClick}>Principal</Link>
//             </div>
//           </div>
//           <Link to="/about-us/gb-cdc" onClick={handleNavLinkClick}>GB/CDC</Link>
//           <Link to="/about-us/organogram" onClick={handleNavLinkClick}>Organogram</Link>
//           <Link to="/about-us/infrastructure" onClick={handleNavLinkClick}>Infrastructure</Link>
//           <Link to="/about-us/statutory-committee" onClick={handleNavLinkClick}>Statutory Committee</Link>
//         </div>
//       </li>

//       <li className={`dropdown ${openDropdown === 'affiliation' ? 'active' : ''}`}>
//         <div className={`dropdown-toggle ${openDropdown === 'affiliation' ? 'active' : ''}`} onClick={() => handleDropdownToggle('affiliation')} role="button" tabIndex="0" aria-expanded={openDropdown === 'affiliation'}>
//           AFFILIATION <i className="fas fa-caret-down"></i>
//         </div>
//         <div className={`dropdown-content ${openDropdown === 'affiliation' ? 'open' : ''}`}>
//           <Link to="/affiliation/pci" onClick={handleNavLinkClick}>PCI</Link>
//           <Link to="/affiliation/msbte" onClick={handleNavLinkClick}>MSBTE</Link>
//           <Link to="/affiliation/govt-of-mah" onClick={handleNavLinkClick}>Govt of Resoulation</Link>
//           <Link to="/affiliation/dte" onClick={handleNavLinkClick}>DTE</Link>
//           <Link to="/affiliation/aishe" onClick={handleNavLinkClick}>Aishe</Link>
//           <Link to="/affiliation/iso" onClick={handleNavLinkClick}>ISO</Link>
//         </div>
//       </li>
      
//       <li className={`dropdown ${openDropdown === 'courses' ? 'active' : ''}`}>
//         <div className={`dropdown-toggle ${openDropdown === 'courses' ? 'active' : ''}`} onClick={() => handleDropdownToggle('courses')} role="button" tabIndex="0" aria-expanded={openDropdown === 'courses'}>
//           COURSES <i className="fas fa-caret-down"></i>
//         </div>
//         <div className={`dropdown-content ${openDropdown === 'courses' ? 'open' : ''}`}>
//           <Link to="/courses/d-pharm" onClick={handleNavLinkClick}>D.Pharm</Link>
//         </div>
//       </li>

//       <li><NavLink to="/faculty" onClick={handleNavLinkClick}>FACULTY</NavLink></li>

//       <li className={`dropdown ${openDropdown === 'rd' ? 'active' : ''}`}>
//         <div className={`dropdown-toggle ${openDropdown === 'rd' ? 'active' : ''}`} onClick={() => handleDropdownToggle('rd')} role="button" tabIndex="0" aria-expanded={openDropdown === 'rd'}>
//           R&D <i className="fas fa-caret-down"></i>
//         </div>
//         <div className={`dropdown-content ${openDropdown === 'rd' ? 'open' : ''}`}>
//           <Link to="/r&d/publication" onClick={handleNavLinkClick}>Publication</Link>
//           <Link to="/r&d/patent" onClick={handleNavLinkClick}>Patent</Link>
//           <Link to="/r&d/copyright" onClick={handleNavLinkClick}>Copyright</Link>
//         </div>
//       </li>
      
//       <li><NavLink to="/iqac" onClick={handleNavLinkClick}>IQAC</NavLink></li>
//       <li><NavLink to="/alumni" onClick={handleNavLinkClick}>ALUMNI</NavLink></li>
      
//       <li className={`dropdown ${openDropdown === 'events' ? 'active' : ''}`}>
//         <div className={`dropdown-toggle ${openDropdown === 'events' ? 'active' : ''}`} onClick={() => handleDropdownToggle('events')} role="button" tabIndex="0" aria-expanded={openDropdown === 'events'}>
//           EVENTS <i className="fas fa-caret-down"></i>
//         </div>
//         <div className={`dropdown-content ${openDropdown === 'events' ? 'open' : ''}`}>
//           <Link to="/events/cultural" onClick={handleNavLinkClick}>Cultural</Link>
//           <Link to="/events/sports" onClick={handleNavLinkClick}>Sports</Link>
//         </div>
//       </li>

//       <li><NavLink to="/downloads" onClick={handleNavLinkClick}>DOWNLOADS</NavLink></li>
      
//       {/* <li>
//         <NavLink to="/faculty-login" onClick={handleNavLinkClick}>
//           FACULTY LOGIN 
//         </NavLink>
//       </li> */}
// <li><a href="/faculty-login" class="faculty-login-btn">Faculty Login</a></li>


//     </>
//   );

//   return (
//     <header className="main-header">
//       <div className="top-bar">
//         <div className="top-bar-content">
//         </div>
//       </div>

//       <section className="institute-info-section">
//         <div className="institute-details-container centered-content">
//           <img src="/new-header-logo-removebg-preview.png" alt="Institute Logo" />
//           <div className="institute-details centered-text">
//             <h1>Sumatidevi Tompe Institute of Pharmaceutical Science and Research</h1>
//             <h3>Chandur Bazar Amravati</h3>
//             <p className="affiliation">Approved by PCI & Government of Maharashtra & DTE</p>
//             <p className="motto">"developing good minds"</p>
//           </div>
//         </div>

//         <div className="hamburger-menu" onClick={handleMobileMenuToggle}>
//           <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//       </section>

//       <nav className="main-nav">
//         <ul>
//           {renderNavLinks()}
//         </ul>
//       </nav>

//       <div className={`mobile-menu-container ${isMobileMenuOpen ? 'open' : ''}`}>
//         <ul className="mobile-menu">
//           {renderNavLinks()}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const mobileRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close on click outside (both desktop nav dropdowns and mobile menu)
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target) && !e.target.closest(".hamburger")) {
        setMobileMenuOpen(false);
      }
    };

    const onEsc = (e) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // close mobile menu when navigating
  const navLinkClicked = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Helper for desktop: open on hover (optional) and close on leave
  const handleMouseEnter = (menu) => {
    // only activate hover-opening on wider screens
    if (window.innerWidth > 992) setOpenDropdown(menu);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 992) setOpenDropdown(null);
  };

  return (
    <>
      <header className="top-header">
        <div className="left-section">
          <img
            src="/new-header-logo-removebg-preview.png"
            alt="Institute Logo"
            className="inst-logo"
          />
          <div className="inst-text">
            <h1>Sumatidevi Tompe Institute of Pharmaceutical Science & Research</h1>
            <p className="sub">Chandur Bazar, Amravati</p>
            <p className="sub-light">
              Approved by PCI & Government of Maharashtra & DTE
              <br />
              "developing good minds"
            </p>
          </div>
        </div>

        <button
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className="nav-bar" ref={navRef} aria-label="Main navigation">
        <ul className="nav-links">
          <li><Link to="/" onClick={navLinkClicked}>HOME</Link></li>

          <li
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("about")}
              aria-haspopup="true"
              aria-expanded={openDropdown === "about"}
            >
              ABOUT US <span className="caret">▾</span>
            </button>

            <ul className={`dropdown-menu ${openDropdown === "about" ? "open" : ""}`}>
              <li><Link to="/about-us/institute" onClick={navLinkClicked}>About</Link></li>
              <li><Link to="/about-us/vision-mission" onClick={navLinkClicked}>Vision & Mission</Link></li>
              <li><Link to="/about-us/gb-cdc" onClick={navLinkClicked}>GB/CDC</Link></li>
              <li><Link to="/about-us/organogram" onClick={navLinkClicked}>Organogram</Link></li>
              <li><Link to="/about-us/infrastructure" onClick={navLinkClicked}>Infrastructure</Link></li>
              <li><Link to="/about-us/statutory-committee" onClick={navLinkClicked}>Satuatory Commitee</Link></li>

            </ul>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("affiliation")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("affiliation")}
              aria-haspopup="true"
              aria-expanded={openDropdown === "affiliation"}
            >
              AFFILIATION <span className="caret">▾</span>
            </button>
            <ul className={`dropdown-menu ${openDropdown === "affiliation" ? "open" : ""}`}>
              <li><Link to="/affiliation/pci" onClick={navLinkClicked}>PCI</Link></li>
              <li><Link to="/affiliation/msbte" onClick={navLinkClicked}>MSBTE</Link></li>
              <li><Link to="/affiliation/gov-of-mah" onClick={navLinkClicked}>Govt Approvals</Link></li>
              <li><Link to="/affiliation/dte" onClick={navLinkClicked}>DTE</Link></li>
              <li><Link to="/affiliation/aishe" onClick={navLinkClicked}>AISHE</Link></li>
              <li><Link to="/affiliation/iso" onClick={navLinkClicked}>ISO</Link></li>
            </ul>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("courses")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("courses")}
              aria-haspopup="true"
              aria-expanded={openDropdown === "courses"}
            >
              COURSES <span className="caret">▾</span>
            </button>
            <ul className={`dropdown-menu ${openDropdown === "courses" ? "open" : ""}`}>
              <li><Link to="/dpharm" onClick={navLinkClicked}>D.Pharm</Link></li>
              <li><Link to="/bpharm" onClick={navLinkClicked}>B.Pharm</Link></li>
            </ul>
          </li>

          <li><Link to="/faculty" onClick={navLinkClicked}>FACULTY</Link></li>
          <li><Link to="/research" onClick={navLinkClicked}>R&D</Link></li>
          <li><Link to="/iqac" onClick={navLinkClicked}>IQAC</Link></li>
          <li><Link to="/alumni" onClick={navLinkClicked}>ALUMNI</Link></li>

          <li
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("events")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("events")}
              aria-haspopup="true"
              aria-expanded={openDropdown === "events"}
            >
              EVENTS <span className="caret">▾</span>
            </button>
            <ul className={`dropdown-menu ${openDropdown === "events" ? "open" : ""}`}>
              <li><Link to="/news" onClick={navLinkClicked}>News</Link></li>
              <li><Link to="/celebrations" onClick={navLinkClicked}>Celebrations</Link></li>
            </ul>
          </li>

          <li><Link to="/downloads" onClick={navLinkClicked}>DOWNLOADS</Link></li>

          <li>
            <Link className="faculty-btn" to="/faculty-login" onClick={navLinkClicked}>
              FACULTY LOGIN
            </Link>
          </li>
        </ul>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <aside
        className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
        ref={mobileRef}
        aria-hidden={!mobileMenuOpen}
      >
        <ul>
          <li><Link to="/" onClick={navLinkClicked}>HOME</Link></li>

          <li>
            <button
              className="mobile-toggle"
              onClick={() => toggleDropdown("m-about")}
              aria-expanded={openDropdown === "m-about"}
            >
              ABOUT US <span className="caret">▾</span>
            </button>
            <ul className={`mobile-sub ${openDropdown === "m-about" ? "open" : ""}`}>
              <li><Link to="/vision" onClick={navLinkClicked}>Vision & Mission</Link></li>
              <li><Link to="/principal" onClick={navLinkClicked}>Principal's Desk</Link></li>
              <li><Link to="/goals" onClick={navLinkClicked}>Goals</Link></li>
            </ul>
          </li>

          <li>
            <button
              className="mobile-toggle"
              onClick={() => toggleDropdown("m-affiliation")}
              aria-expanded={openDropdown === "m-affiliation"}
            >
              AFFILIATION <span className="caret">▾</span>
            </button>
            <ul className={`mobile-sub ${openDropdown === "m-affiliation" ? "open" : ""}`}>
              <li><Link to="/pci" onClick={navLinkClicked}>PCI</Link></li>
              <li><Link to="/dte" onClick={navLinkClicked}>DTE</Link></li>
              <li><Link to="/govt" onClick={navLinkClicked}>Govt Approvals</Link></li>
            </ul>
          </li>

          <li>
            <button
              className="mobile-toggle"
              onClick={() => toggleDropdown("m-courses")}
              aria-expanded={openDropdown === "m-courses"}
            >
              COURSES <span className="caret">▾</span>
            </button>
            <ul className={`mobile-sub ${openDropdown === "m-courses" ? "open" : ""}`}>
              <li><Link to="/dpharm" onClick={navLinkClicked}>D.Pharm</Link></li>
              <li><Link to="/bpharm" onClick={navLinkClicked}>B.Pharm</Link></li>
            </ul>
          </li>

          <li><Link to="/faculty" onClick={navLinkClicked}>FACULTY</Link></li>
          <li><Link to="/research" onClick={navLinkClicked}>R&D</Link></li>
          <li><Link to="/iqac" onClick={navLinkClicked}>IQAC</Link></li>
          <li><Link to="/alumni" onClick={navLinkClicked}>ALUMNI</Link></li>
          <li><Link to="/downloads" onClick={navLinkClicked}>DOWNLOADS</Link></li>

          <li>
            <Link className="faculty-btn" to="/faculty-login" onClick={navLinkClicked}>
              FACULTY LOGIN
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Header;
