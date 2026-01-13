export default function Technologies() {
  return (
    <section id="technologies" className="technologies-section">
      <div className="section-header">
        <h2>Technologies We Use</h2>
        <p className="section-subtitle">
          Cutting-edge tools and frameworks for modern software development
        </p>
      </div>
      <div className="tech-grid">
        <div className="tech-card">
          <div className="tech-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="60" alt="React logo" />
          </div>
          <h3>React</h3>
          <p>Modern, fast, and scalable frontend development with component-based architecture.</p>
        </div>

        <div className="tech-card">
          <div className="tech-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="60" alt="PHP logo" />
          </div>
          <h3>PHP & APIs</h3>
          <p>Robust backend systems and RESTful API integrations for seamless connectivity.</p>
        </div>

        <div className="tech-card">
          <div className="tech-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="60" alt="MySQL logo" />
          </div>
          <h3>Databases</h3>
          <p>Reliable data storage, optimized queries, and efficient database management.</p>
        </div>

        <div className="tech-card">
          <div className="tech-icon">
            <img src="https://img.icons8.com/fluency/96/rfid-sensor.png" width="60" alt="RFID icon" />
          </div>
          <h3>RFID Development</h3>
          <p>
            RFID-based tracking, access control, inventory systems, and hardware-software integration.
          </p>
        </div>

        <div className="tech-card">
          <div className="tech-icon">
            <img src="https://img.icons8.com/color/96/iot.png" width="60" alt="IoT icon" />
          </div>
          <h3>IoT Integration</h3>
          <p>Smart devices, sensors, and real-time data systems for connected solutions.</p>
        </div>
      </div>
    </section>
  );
}
