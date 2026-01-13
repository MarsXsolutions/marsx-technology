export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
      <h1>Building Scalable Digital Solutions</h1>
          <p className="hero-subtitle">
        MarsX Technology helps startups and SMEs build powerful web, mobile,
            custom software, and RFID-enabled systems that drive business growth.
      </p>
          <div className="hero-buttons">
            <a href="#contact">
              <button className="btn-primary-large">Get a Free Consultation</button>
            </a>
            <a href="#services">
              <button className="btn-secondary-large">Our Services</button>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" 
            alt="Modern technology and digital solutions"
          />
        </div>
      </div>
    </section>
  );
}
