import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Share2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              Luxe <span> Interiors</span>
            </Link>
            <p className="footer-desc">
              Luxe Interiors is a modern interior design service brand focused on transforming spaces into stylish, functional, and personalized environments.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Social"><Globe size={20} /></a>
              <a href="#" aria-label="Social"><Share2 size={20} /></a>
              <a href="#" aria-label="Social"><Globe size={20} /></a>
              <a href="#" aria-label="Social"><Share2 size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Studio</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Studio</Link></li>
              <li><Link to="/project">Our Projects</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/contact">Landing</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/help">Help Desk</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>201, Prominent East Wind, Whitefield, Bengaluru</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+91 75419 51162</span>
              </li>
              <li>
                <Mail size={18} />
                <span>sunilkumarsahibganj@gmail.com</span>
              </li>
              <li>
                <Mail size={18} />
                <span>sunilkumarsbg@hotmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p> Luxe Interiors |   Copyright © {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
