import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../PicesForPages/headerLogo.png";
import menuButton from "../../PicesForPages/menu.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="headerParent">
      <div className="headerBox">
        <Link to="/" className="headerLogoDiv">
          <img src={Logo} alt="Logo" className="headerLogo" />
        </Link>
        <div className="headerMenu">
          <a href="/" className="headerMenuUI_Header">
            HOME
          </a>
          <ul className="headerMenuUI">
            <span className="headerMenuUI_Header">INSURANCE &#x025BF;</span>
            <span className="headerMenuUI_LI">
              <li>
                <Link to="/auto">Auto</Link>
              </li>
              <li>
                <Link to="/home-owner">HomeOwner</Link>
              </li>
              {/* <li>How Much Can I Borrow?</li> */}
              <li>
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/life">Life</Link>
              </li>
              <li>
                <Link to="/specialty">Speciality</Link>
              </li>
              <li>
                <Link to="/landlord-tenant">Landlord/Tenant</Link>
              </li>
            </span>
          </ul>
          <a href="/quotes" className="headerMenuUI_Header">
            QUOTES
          </a>
          <a href="/service" className="headerMenuUI_Header">
            SERVICE
          </a>
          <a href="/blog" className="headerMenuUI_Header">
            BLOG
          </a>
          <a href="/about-us" className="headerMenuUI_Header">
            ABOUT US
          </a>
          <a href="/contact" className="headerMenuUI_Header">
            CONTACT
          </a>
          {/* <a href="tel:+1-513-999-2324" className="headerMenu_Tel">
            <i class="ri-phone-fill"></i> (513)-999-2324
          </a> */}
          <button className="headerMenuButton">
            <Link
              to="https://ezymtg.my1003app.com/"
              className="headerMenuButtonLink"
            >
              Get a Quote
            </Link>
          </button>

          {/* Deleted-Testing code for customr details are sent Gmail through FORM  */}
          {/* <span className='headerMenuUI_Header'><Link to="/test-mail-through-form">TestMailThroughForm</Link></span> */}
        </div>
        <div className="headerMenuMobileView">
          {/* <ul className='headerMenuUI headerMenuUI00'>
                        <span className='headerMenuUI_Header'>Tools &#x025BF;</span>
                        <span className='headerMenuUI_LI headerMenuUI_LI00' >
                            <li><Link to="/free-reports">Access Detailed Free Reports</Link></li>
                            <li><Link to="/how-much-can-i-afford-calculator">How Much Can I Borrow?</Link></li>
                            <li><Link to="/what-will-my-monthly-payment-be-calculator">What’s My Monthly Installment?</Link></li>
                            <li><Link to="renting-versus-buying-calculator">Rent vs. Buy Comparison Tool</Link></li>
                            <li><Link to="/refinance-analysis-calculator">Refinance Evaluation Tool</Link></li>
                            <li><Link to="/debt-consolidation-calculator">Debt Consolidation Calculator</Link></li>
                            <li><Link to="/paper-work">Necessary Paperwork</Link></li>
                            <li><Link to="/the-loan-process">Steps in the Loan Process</Link></li>
                            <li><Link to="/glossary-terms">Mortgage Terms Glossary</Link></li>
                        </span>
                    </ul> */}
          {!menuOpen ? (
            <img
              src={menuButton}
              alt="Menu Button"
              id="menubtn"
              onClick={toggleMenu}
            />
          ) : (
            <span id="closebtn" onClick={toggleMenu}>
              X
            </span>
          )}
          {menuOpen && (
            <div
              className="headerMenuMobileView headerMenuMobileViewlist"
              ref={menuRef}
            >
              <a href="/" className="headerMenuUI_Header">
                HOME
              </a>
              <ul className="headerMenuUI">
                <span className="headerMenuUI_Header">INSURANCE &#x025BF;</span>
                <span className="headerMenuUI_LI">
                  <li>
                    <Link to="/auto">Auto</Link>
                  </li>
                  <li>
                    <Link to="/home-owner">HomeOwner</Link>
                  </li>
                  {/* <li>How Much Can I Borrow?</li> */}
                  <li>
                    <Link to="/business">Business</Link>
                  </li>
                  <li>
                    <Link to="/life">Life</Link>
                  </li>
                  <li>
                    <Link to="/specialty">Speciality</Link>
                  </li>
                  <li>
                    <Link to="/landlord-tenant">Landlord/Tenant</Link>
                  </li>
                </span>
              </ul>
              <a href="/quotes" className="headerMenuUI_Header">
                QUOTES
              </a>
              <a href="/service" className="headerMenuUI_Header">
                SERVICE
              </a>
              <a href="/blog" className="headerMenuUI_Header">
                BLOG
              </a>
              <a href="/about-us" className="headerMenuUI_Header">
                ABOUT US
              </a>
              <a href="/contact" className="headerMenuUI_Header">
                CONTACT
              </a>
              {/* <a href="tel:+1-513-999-2324" className="headerMenu_Tel">
                <i class="ri-phone-fill"></i> (513)-999-2324
              </a> */}
              <button className="headerMenuButton">
                <Link
                  to="https://ezymtg.my1003app.com/"
                  className="headerMenuButtonLink"
                >
                  Get a Quote
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
