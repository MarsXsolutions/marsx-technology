export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
      <h2>Our Services</h2>
        <p className="section-subtitle">
          Comprehensive technology solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-3">
        <div className="service-card">
          <div className="service-image">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
              alt="Web Application Development"
            />
          </div>
          <div className="service-content">
            <h3>Web Application Development</h3>
          <p>
            Custom dashboards, portals, and scalable web platforms tailored for
              startups and SMEs. Built with modern frameworks for optimal performance.
          </p>
            <ul className="service-features">
              <li>Responsive Design</li>
              <li>Cloud Integration</li>
              <li>API Development</li>
            </ul>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" 
              alt="Mobile App Development"
            />
          </div>
          <div className="service-content">
            <h3>Mobile App Development</h3>
          <p>
            Business-focused mobile applications designed for performance and
              growth. Native and cross-platform solutions for iOS and Android.
          </p>
            <ul className="service-features">
              <li>iOS & Android</li>
              <li>Cross-Platform</li>
              <li>App Store Optimization</li>
            </ul>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" 
              alt="Custom Software Solutions"
            />
          </div>
          <div className="service-content">
            <h3>Custom Software Solutions</h3>
          <p>
            Tailor-made software systems that perfectly match your business
              workflow. Enterprise-grade solutions for complex requirements.
          </p>
            <ul className="service-features">
              <li>Enterprise Solutions</li>
              <li>Workflow Automation</li>
              <li>System Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
