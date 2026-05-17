import React from 'react';
import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <header className="page-header premium-header">
        <div className="container animate-fade-in">
          <span className="subtitle-top">Data Protection</span>
          <h1>Privacy Policy</h1>
          <p className="section-subtitle">How we collect, use, and protect your personal information.</p>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="legal-content-wrapper animate-fade-in-up">
            <span className="last-updated">Last updated: May 15, 2026</span>
            <div className="legal-content">
              <h2>1. Information We Collect</h2>
              <p>We collect information that you provide directly to us when you fill out a contact form, request a quote, or subscribe to our newsletter. This information may include:</p>
              <ul>
                <li>Name and contact information (Email, Phone Number).</li>
                <li>Property details and design preferences.</li>
                <li>Billing and payment information.</li>
                <li>Communications between you and our design team.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the collected data for various purposes, including:</p>
              <ul>
                <li>To provide and maintain our Service.</li>
                <li>To notify you about changes to our projects or services.</li>
                <li>To provide customer support and respond to inquiries.</li>
                <li>To gather analysis or valuable information so that we can improve our Service.</li>
                <li>To send you marketing communications (you can opt-out at any time).</li>
              </ul>

              <h2>3. Data Security</h2>
              <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

              <h2>4. Sharing of Data</h2>
              <p>We do not sell your personal data. We may share your information with trusted third-party contractors (e.g., furniture suppliers, specialized artisans) who assist us in executing your project. These parties are obligated not to disclose or use the information for any other purpose.</p>

              <h2>5. Your Rights</h2>
              <p>You have the right to access, update, or delete the information we have on you. If you wish to exercise these rights, please contact our data protection officer at privacy@Luxe Interiors.com.</p>

              <h2>6. Cookies</h2>
              <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

              <h2>7. Changes to This Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
