import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="container animate-fade-in-up">
          <h1>Contact Us</h1>
          <p className="section-subtitle">Let's discuss how we can transform your space into a luxurious masterpiece.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info animate-fade-in-up">
              <h2 className="mb-8">Get In Touch</h2>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-content">
                  <h3>Our Studio</h3>
                  <p className="text-muted">201, Prominent East Wind, Whitefield, Bengaluru<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p className="text-muted">+91 7541951162  <br /> +91 7795284532  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p className="text-muted">sunilkumarsbg@hotmail.com<br />support@luxeinteriors.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock size={24} />
                </div>
                <div className="info-content">
                  <h3>Working Hours</h3>
                  <p className="text-muted">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: By Appointment Only</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper animate-fade-in-up delay-200">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="mb-8">Send a Message</h2>

                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" required placeholder="John Doe" />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" required placeholder="john@example.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Service of Interest</label>
                  <select className="form-control">
                    <option>Home Interior</option>
                    <option>Restaurant Interior</option>
                    <option>Office Interior</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5" required placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
