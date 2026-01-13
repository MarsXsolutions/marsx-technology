export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <div className="section-header">
      <h2>About MarsX Technology</h2>
            <p className="section-subtitle">
              Leading the digital transformation journey for businesses worldwide
            </p>
          </div>
      <p>
            MarsX Technology is a premier software development company focused on building
            scalable digital solutions for startups and SMEs. With expertise in modern web,
            mobile, custom software, and RFID-based systems, we help businesses transform
            their operations and achieve sustainable growth.
      </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
            alt="MarsX Technology Team"
          />
        </div>
      </div>
    </section>
  );
}
