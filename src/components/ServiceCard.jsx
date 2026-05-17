import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
  const [currentImg, setCurrentImg] = useState(0);

  if (!service) return null;

  const { id = '', title = 'Service', price = '', shortDescription = '', images = [] } = service;

  const nextImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`service-card-horizontal ${index % 2 !== 0 ? 'reverse' : ''} animate-fade-in-up delay-${(index % 4) * 100}`}>
      <div className="service-img-column">
        <div className="card-slider">
          <div className="slider-wrapper" style={{ transform: `translateX(-${currentImg * 100}%)` }}>
            {images.map((img, i) => (
              <img key={i} src={img} alt={`${title} view ${i + 1}`} className="slider-img" />
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button className="slider-btn prev" onClick={prevImg} aria-label="Previous image">
                <ChevronLeft size={20} />
              </button>
              <button className="slider-btn next" onClick={nextImg} aria-label="Next image">
                <ChevronRight size={20} />
              </button>
              <div className="slider-dots">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${currentImg === i ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImg(i);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="service-content-column">
        <div className="card-content">
          <div className="card-header">
            <div className="card-category">Interior Design</div>
            <div className="card-price">{price}</div>
          </div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{shortDescription}</p>
          <Link to={`/services/${id}`} className="view-detail-btn">
            View Details <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
