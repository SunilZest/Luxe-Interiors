import { Star, Maximize, DollarSign } from 'lucide-react';
import './Project.css';

const Project = () => {
  const images = [
    '/hero.png',
    '/service.png',
    '/hero.png',
    '/service.png'
  ];

  return (
    <div className="project-page">
      <header className="page-header">
        <div className="container animate-fade-in-up">
          <h1>Modern Penthouse Renovation</h1>
          <p className="section-subtitle">A stunning transformation of a 3-bedroom penthouse in the heart of the city.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="project-layout">
            <div className="project-gallery">
              <div className="gallery-main animate-fade-in-up">
                <img src={images[0]} alt="Main view" />
              </div>
              <div className="gallery-grid">
                {images.slice(1).map((img, idx) => (
                  <div key={idx} className={`gallery-item animate-fade-in-up delay-${(idx + 1) * 100}`}>
                    <img src={img} alt={`Gallery view ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="project-details animate-fade-in-up delay-300">
              <div className="detail-card">
                <h2 className="mb-4">Project Overview</h2>
                <p className="text-muted mb-8" style={{lineHeight: 1.8}}>
                  This extensive renovation focused on creating an open-plan living space that maximizes natural light and city views. 
                  We utilized a sophisticated palette of deep charcoal, rich walnut woods, and champagne gold accents to achieve a 
                  timeless, luxurious aesthetic. Custom modular furniture and state-of-the-art smart home integration complete this 
                  modern masterpiece.
                </p>

                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Total Price</span>
                    <span className="stat-value text-primary">$120,000</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Price per sq ft</span>
                    <span className="stat-value text-primary">$150/sq.ft</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Area</span>
                    <span className="stat-value">800 sq.ft</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Client Rating</span>
                    <span className="stat-value flex items-center gap-1" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                      5.0 <Star size={16} fill="var(--color-primary)" color="var(--color-primary)" />
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-8" style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)'}}>
                  <button className="btn-primary w-full" style={{width: '100%'}}>Request Similar Design</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
