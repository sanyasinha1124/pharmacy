
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
             <p className="sub-light animated-tagline">
              developing good minds
              </p>

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

               <li><Link to="/about-us/messages" onClick={navLinkClicked}>Message</Link></li>


           
              
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
              <li><Link to="/affiliation/govt-of-mah" onClick={navLinkClicked}>Govt Approvals</Link></li>
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
              <li><Link to="/courses/d-pharm" onClick={navLinkClicked}>D.Pharm</Link></li>
             
            </ul>
          </li>

          <li><Link to="/faculty" onClick={navLinkClicked}>FACULTY</Link></li>

           <li
            className="dropdown"
            onMouseEnter={() => handleMouseEnter("rd")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("rd")}
              aria-haspopup="true"
              aria-expanded={openDropdown === "rd"}
            >
          R&D <span className="caret">▾</span>
            </button>
            <ul className={`dropdown-menu ${openDropdown === "rd" ? "open" : ""}`}>
              <li><Link to="/r&d/publication" onClick={navLinkClicked}>Publication</Link></li>
              <li><Link to="/r&d/patent" onClick={navLinkClicked}>Patent</Link></li>
               <li><Link to="/r&d/copyright" onClick={navLinkClicked}>Copyright</Link></li>
            </ul>
          </li>
          


         
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
              <li><Link to="/events/cultural" onClick={navLinkClicked}>Cultural</Link></li>
              <li><Link to="/events/sports" onClick={navLinkClicked}>Sports</Link></li>
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
              <li><Link to="/about-us/institute" onClick={navLinkClicked}>About Institute</Link></li>
              <li><Link to="/about-us/vision-mission" onClick={navLinkClicked}>Vison & Mission</Link></li>
              <li><Link to="/about-us/messages" onClick={navLinkClicked}>Message</Link></li>
              <li><Link to="/about-us/gb-cdc" onClick={navLinkClicked}>GB/CDC</Link></li>
              <li><Link to="/about-us/organogram" onClick={navLinkClicked}>Organogram</Link></li>
              <li><Link to="/about-us/infrastructure" onClick={navLinkClicked}>Infrastructure</Link></li>
               <li><Link to="/about-us/statutory-committee" onClick={navLinkClicked}>Statutory Committee</Link></li>
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
               <li><Link to="/affiliation/pci" onClick={navLinkClicked}>PCI</Link></li>
                <li><Link to="/affiliation/msbte" onClick={navLinkClicked}>MSBTE</Link></li>
                 <li><Link to="/affiliation/govt-of-mah" onClick={navLinkClicked}>GOVT OF MAH</Link></li>
              <li><Link to="/affiliation/dte" onClick={navLinkClicked}>DTE</Link></li>
              <li><Link to="/affiliation/aishe" onClick={navLinkClicked}>AISHE</Link></li>
              <li><Link to="/affiliation/iso" onClick={navLinkClicked}>ISO</Link></li>
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
              <li><Link to="/courses/d-pharm" onClick={navLinkClicked}>D.Pharm</Link></li>

            </ul>
          </li>

          <li><Link to="/faculty" onClick={navLinkClicked}>FACULTY</Link></li>
          
          <li>
            <button
              className="mobile-toggle"
              onClick={() => toggleDropdown("m-rd")}
              aria-expanded={openDropdown === "m-rd"}
            >
              R&D <span className="caret">▾</span>
            </button>
            <ul className={`mobile-sub ${openDropdown === "m-rd" ? "open" : ""}`}>
              <li><Link to="/r&d/publication" onClick={navLinkClicked}>Publication</Link></li>
               <li><Link to="/r&d/patent" onClick={navLinkClicked}>Patent</Link></li>
               <li><Link to="/r&d/copyright" onClick={navLinkClicked}>Copyright</Link></li>
              

            </ul>
          </li>
          <li><Link to="/iqac" onClick={navLinkClicked}>IQAC</Link></li>
          <li><Link to="/alumni" onClick={navLinkClicked}>ALUMNI</Link></li>

              <li>
            <button
              className="mobile-toggle"
              onClick={() => toggleDropdown("m-events")}
              aria-expanded={openDropdown === "m-events"}
            >
              EVENTS <span className="caret">▾</span>
            </button>
            <ul className={`mobile-sub ${openDropdown === "m-events" ? "open" : ""}`}>
              <li><Link to="/events/cultural" onClick={navLinkClicked}>Cultural</Link></li>
               <li><Link to="/events/sports" onClick={navLinkClicked}>Sports</Link></li>
               

            </ul>
          </li>
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
