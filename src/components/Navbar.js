import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#top" onClick={closeMobileMenu} src="images/BA.png">
            <img
              className="logo"
              src="BA.png"
              alt="Logo"
              style={{ width: "60px", paddingTop: "17px" }}
            ></img>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#projects"
                className="nav-links"
                data-text="Projects"
                onClick={closeMobileMenu}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#aboutMe"
                className="nav-links"
                data-text="About"
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-links"
                data-text="Contact"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
