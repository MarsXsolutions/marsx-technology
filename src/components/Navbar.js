import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">MarsX Technology</div>

        {/* Navigation */}
        <nav className="navbar-menu">
          <a href="#home">Home</a>

          {/* Services Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="dropdown-title">Services ▾</span>
            {servicesOpen && (
              <div className="dropdown-menu">
                <a href="#services">Web Application Development</a>
                <a href="#services">Mobile App Development</a>
                <a href="#services">Custom Software Solutions</a>
                <a href="#rfid">RFID Development</a>
              </div>
            )}
          </div>

          {/* Technologies Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setTechOpen(true)}
            onMouseLeave={() => setTechOpen(false)}
          >
            <span className="dropdown-title">Technologies ▾</span>
            {techOpen && (
              <div className="dropdown-menu">
                <a href="#technologies">React</a>
                <a href="#technologies">PHP & APIs</a>
                <a href="#technologies">MySQL</a>
                <a href="#technologies">RFID & IoT</a>
              </div>
            )}
          </div>

          <a href="#about">About</a>
          <a href="#contact" className="btn-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
}
