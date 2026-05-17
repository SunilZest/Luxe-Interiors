import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/serviceData';
import { ArrowLeft, ChevronDown, ChevronUp, ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomScale, setZoomScale] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [expandedSection, setExpandedSection] = useState(0);

  if (!service) {
    return (
      <div className="container section text-center">
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn-primary mt-4">Back to Services</Link>
      </div>
    );
  }

  const nextImage = () => setActiveImage((prev) => (prev + 1) % service.images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + service.images.length) % service.images.length);

  const handleZoomIn = () => setZoomScale(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomScale(prev => Math.max(prev - 0.5, 1));

  return (
    <div className="service-detail-page animate-fade-in">
      <div className="container">
        <div className="detail-navigation">
          <Link to="/services" className="back-btn">
            <ArrowLeft size={20} /> Back to Services
          </Link>
          <div className="detail-breadcrumb">
            Services / <span>{service.title}</span>
          </div>
        </div>

        <div className="grid-cols-2 gap-12 align-center" style={{ marginTop: '1rem' }}>
          <div className="about-content animate-fade-in-up">
            <div className="header-meta mb-4">
              <span className="category-tag" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>Premium Interior</span>
              <span className="price-tag" style={{ marginLeft: '1rem', fontWeight: 'bold' }}>{service.price}</span>
            </div>
            <h1 className="section-title text-left">{service.title}</h1>
            <p className="mb-8">{service.fullDescription}</p>

            <div className="feature-accordion mb-8">
              {service.features.map((feature, index) => (
                <div key={index} className={`feature-item ${expandedSection === index ? 'active' : ''}`}>
                  <button onClick={() => setExpandedSection(expandedSection === index ? -1 : index)}>
                    <h3>{feature.title}</h3>
                    {expandedSection === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <div className="feature-body">
                    <p>{feature.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="action-footer">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              {/* <p className="hint mt-2 text-muted" style={{ marginTop: '0.5rem' }}>Consultation is free of charge</p> */}
            </div>
          </div>

          <div className="about-images-layered">
            <div className="shape-bg-1"></div>
            {service.images[0] && <img src={service.images[0]} alt="Service Main" className="img-main" />}
            {service.images[1] ? (
              <img src={service.images[1]} alt="Service Detail" className="img-secondary" />
            ) : (
              service.images[0] && <img src={service.images[0]} alt="Service Secondary" className="img-secondary" style={{ opacity: 0.8 }} />
            )}
            <div className="shape-bg-2"></div>
          </div>
        </div>

        <div className="gallery-section" style={{ marginTop: '6rem', width: '100%' }}>
          {/* <h2 className="section-title text-center mb-8">Project Gallery</h2> */}
          {/* Large Slider Section */}
          <div className="detail-visuals" style={{ width: '100%' }}>
            <div className="main-slider" style={{ height: '600px' }}>
              <div className="slider-track" style={{ transform: `translateX(-${activeImage * 100}%)` }}>
                {service.images.map((img, i) => (
                  <div key={i} className="slide-item">
                    <img
                      src={img}
                      alt={service.title}
                      style={{ transform: i === activeImage ? `scale(${zoomScale})` : 'scale(1)', objectFit: 'cover' }}
                      onClick={() => { setIsZoomed(true); setZoomScale(1); }}
                    />
                  </div>
                ))}
              </div>

              <div className="slider-controls">
                <button className="ctrl-btn" onClick={prevImage}><ChevronLeft size={24} /></button>
                <div className="zoom-controls">
                  <button onClick={handleZoomOut} disabled={zoomScale <= 1}><ZoomOut size={20} /></button>
                  <span>{Math.round(zoomScale * 100)}%</span>
                  <button onClick={handleZoomIn} disabled={zoomScale >= 3}><ZoomIn size={20} /></button>
                </div>
                <button className="ctrl-btn" onClick={nextImage}><ChevronRight size={24} /></button>
              </div>

              <div className="image-indicators">
                {service.images.map((_, i) => (
                  <button
                    key={i}
                    className={`indicator ${activeImage === i ? 'active' : ''}`}
                    onClick={() => setActiveImage(i)}
                  />
                ))}
              </div>
            </div>

            <div className="thumbnail-strip" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
              {service.images.map((img, i) => (
                <div
                  key={i}
                  className={`thumb-box ${activeImage === i ? 'active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt="thumbnail" />
                </div>
              ))}
            </div>

            <div className="gallery-caption text-center mt-4 text-muted">
              <p>Explore the stunning visual details of our {service.title.toLowerCase()} service.</p>
            </div>
            <br />
          </div>
        </div>
      </div>

      {/* Lightbox Mode */}
      {isZoomed && (
        <div className="lightbox-overlay" onClick={() => setIsZoomed(false)}>
          <button className="close-lightbox"><X size={32} /></button>
          <img src={service.images[activeImage]} alt="Zoomed" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
