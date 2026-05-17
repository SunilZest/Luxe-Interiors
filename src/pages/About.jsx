const About = () => {
  return (
    <div className="about-page">
      <header className="page-header">
        <div className="container animate-fade-in-up">
          <h1>About Luxe Interiors</h1>
          <p className="section-subtitle">Redefining luxury through innovative and timeless interior design.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid-cols-2" style={{alignItems: 'center'}}>
            <div className="about-image animate-fade-in-up">
              <img src="/hero.png" alt="Luxe Interiors Office" style={{borderRadius: '4px', boxShadow: '0 20px 40px var(--color-shadow)'}} />
            </div>
            <div className="about-content animate-fade-in-up delay-200" style={{paddingLeft: '2rem'}}>
              <h2 className="mb-4">Our Story</h2>
              <p className="text-muted mb-4" style={{lineHeight: 1.8}}>
                Founded in 2010, Luxe Interiors was born from a passion for creating spaces that resonate with elegance and character. 
                We believe that true luxury lies not just in opulence, but in the harmonious balance of aesthetics, comfort, and personalized details.
              </p>
              <p className="text-muted mb-8" style={{lineHeight: 1.8}}>
                Over the past decade, we have transformed hundreds of residential and commercial properties into breathtaking environments, 
                earning recognition as one of the premier interior design firms globally.
              </p>

              <div className="mission-vision-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                <div className="mission-card" style={{padding: '2rem', backgroundColor: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)'}}>
                  <h3 className="mb-2 text-primary">Our Mission</h3>
                  <p className="text-muted" style={{fontSize: '0.9rem'}}>To translate our clients' unique visions into exquisitely crafted spaces that enhance their lifestyle and wellbeing.</p>
                </div>
                <div className="mission-card" style={{padding: '2rem', backgroundColor: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)'}}>
                  <h3 className="mb-2 text-primary">Our Vision</h3>
                  <p className="text-muted" style={{fontSize: '0.9rem'}}>To be the global standard for innovative, sustainable, and luxurious interior design solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
