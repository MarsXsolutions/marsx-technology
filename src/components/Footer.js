export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MarsX Technology</h3>
          <p>
            Building scalable digital solutions for startups and SMEs. 
            Transforming businesses through innovative technology.
          </p>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">Mobile Apps</a></li>
            <li><a href="#services">Custom Software</a></li>
            <li><a href="#services">RFID Solutions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: <a href="mailto:contact@marsxtechnology.com">contact@marsxtechnology.com</a></li>
            <li>Available 24/7</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MarsX Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}
