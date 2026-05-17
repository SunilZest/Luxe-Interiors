import React from 'react';
import './Legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <header className="page-header premium-header">
        <div className="container animate-fade-in">
          <span className="subtitle-top">Legal Framework</span>
          <h1>Terms & Conditions</h1>
          <p className="section-subtitle">Please read these terms carefully before using our services.</p>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="legal-content-wrapper animate-fade-in-up">
            <span className="last-updated">Last updated: May 15, 2026</span>
            <div className="legal-content">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using the Interior Studio website (the "Service"), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the Service.</p>

              <h2>2. Services & Consultations</h2>
              <p>Interior Studio provides interior design consultation, planning, and project management. All bookings made through the Service are subject to availability and confirmation by our team.</p>
              <ul>
                <li>Consultation fees are non-refundable once the session has commenced.</li>
                <li>Initial quotes are estimates and may vary based on material costs and site conditions.</li>
                <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
              </ul>

              <h2>3. Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Interior Studio and its licensors. Our designs, sketches, and 3D renders are protected by copyright laws.</p>
              <p>You may not use our designs for commercial purposes without an explicit licensing agreement signed by our lead designer.</p>

              <h2>4. Payment Terms</h2>
              <p>We accept major credit cards, bank transfers, and digital payments. For large-scale projects, a structured payment plan will be provided in the service agreement:</p>
              <ul>
                <li>40% Deposit to initiate the project.</li>
                <li>30% Upon completion of the Design Development phase.</li>
                <li>30% Final payment before the installation/styling phase.</li>
              </ul>

              <h2>5. Limitation of Liability</h2>
              <p>In no event shall Interior Studio, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from your access to or use of the Service.</p>

              <h2>6. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.</p>

              <h2>7. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at legal@Luxe Interiors.com.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
