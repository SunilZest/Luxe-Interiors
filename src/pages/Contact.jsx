import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const SERVICE_OPTIONS = [
  'Home Interior',
  'Restaurant Interior',
  'Office Interior',
  'Other',
];

const initialForm = {
  name: '',
  email: '',
  services: SERVICE_OPTIONS[0],
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: null, text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (feedback.type) setFeedback({ type: null, text: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback({ type: null, text: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setFeedback({
          type: 'error',
          text: data.message || 'Something went wrong. Please try again.',
        });
        return;
      }

      setFeedback({
        type: 'success',
        text: data.message || 'Message sent successfully!',
      });
      setForm(initialForm);
    } catch {
      setFeedback({
        type: 'error',
        text: 'Could not reach the server. Make sure the API is running.',
      });
    } finally {
      setSubmitting(false);
    }
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

                {feedback.type && (
                  <div
                    className={`form-feedback form-feedback--${feedback.type}`}
                    role="alert"
                  >
                    {feedback.text}
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-control"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-control"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-services">Service of Interest</label>
                  <select
                    id="contact-services"
                    name="services"
                    className="form-control"
                    required
                    value={form.services}
                    onChange={handleChange}
                    disabled={submitting}
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-control"
                    rows="5"
                    required
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%' }}
                  disabled={submitting}
                >
                  {submitting ? 'Sending…' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
