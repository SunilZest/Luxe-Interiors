import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

// Theme Images
import HeroBg from '../assets/WebSite6646068/images/fgg-min.jpg';
import AboutImg1 from '../assets/WebSite6646068/images/gh.jpg';
import AboutImg2 from '../assets/WebSite6646068/images/fdf.jpg';
import FeatureImg from '../assets/WebSite6646068/images/sdc.jpg';

import { services } from '../data/serviceData';

const Home = () => {
  const featuredServices = services.slice(0, 6);

  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${HeroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content animate-fade-in-up">
            <h1 className="hero-title">Designing Interiors That Reflect Your Lifestyle</h1>
            <p className="hero-subtitle">
              We design & deliver beautiful hotels, luxury homes and innovative workplace interiors. Creating spaces that inspire and elevate.
            </p>
            <div className="hero-actions">
              <Link to="/project" className="btn-primary">View Projects</Link>
              <Link to="/contact" className="btn-outline">Consult Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-studio">
        <div className="container">
          <div className="grid-cols-2 gap-12 align-center">
            <div className="about-content animate-fade-in-up">
              <h2 className="section-title text-left">About Our Interior Studio</h2>
              <p className="mb-8">At Luxe Interiors, we are committed to delivering thoughtfully designed spaces that combine style, comfort, and functionality. Our approach focuses on creating interiors that not only look beautiful but also enhance everyday living and usability.</p>
              <p className="mb-8">We strive to provide a seamless and positive design experience, ensuring every project reflects quality, creativity, and attention to detail. With a focus on innovation and client satisfaction, we turn ideas into elegant, practical spaces that stand out.</p>
              <p className="mb-8">Our goal is to bring value through smart design solutions, making every space unique, inspiring, and perfectly tailored to your needs.</p>
              <Link to="/about" className="btn-primary">Learn More</Link>
            </div>
            <div className="about-images-layered">
              <div className="shape-bg-1"></div>
              <img src={AboutImg1} alt="Studio Design" className="img-main" />
              <img src={AboutImg2} alt="Studio Work" className="img-secondary" />
              <div className="shape-bg-2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">Real-time Visualization</h2>
          <p className="section-subtitle mb-12">
            Explore our curated selection of premium interior transformations that blend aesthetics with functionality.
          </p>
          <div className="grid-cols-3">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn-outline">All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
