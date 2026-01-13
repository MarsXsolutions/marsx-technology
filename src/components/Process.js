export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="section-header">
      <h2>How We Work</h2>
        <p className="section-subtitle">
          A proven methodology that delivers results
        </p>
      </div>
      <div className="process-steps">
        <div className="process-card">
          <div className="process-number">01</div>
          <div className="process-icon">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" 
              alt="Discovery & Planning"
            />
          </div>
          <h3>Discovery & Planning</h3>
          <p>
            We start by understanding your business needs, goals, and challenges. 
            Through comprehensive analysis, we create a strategic roadmap for success.
          </p>
          <ul className="process-details">
            <li>Requirements Analysis</li>
            <li>Stakeholder Interviews</li>
            <li>Project Roadmap</li>
          </ul>
        </div>
        <div className="process-card">
          <div className="process-number">02</div>
          <div className="process-icon">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" 
              alt="Design & Architecture"
            />
          </div>
          <h3>Design & Architecture</h3>
          <p>
            We design scalable solutions tailored to your requirements. Our architecture 
            ensures performance, security, and future scalability.
          </p>
          <ul className="process-details">
            <li>System Architecture</li>
            <li>UI/UX Design</li>
            <li>Technical Specifications</li>
          </ul>
        </div>
        <div className="process-card">
          <div className="process-number">03</div>
          <div className="process-icon">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80" 
              alt="Development & Launch"
            />
          </div>
          <h3>Development & Launch</h3>
          <p>
            We build and deploy your solution with ongoing support. Our agile methodology 
            ensures timely delivery and continuous improvement.
          </p>
          <ul className="process-details">
            <li>Agile Development</li>
            <li>Quality Assurance</li>
            <li>Deployment & Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
