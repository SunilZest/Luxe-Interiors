import ServiceCard from '../components/ServiceCard';
import { services } from '../data/serviceData';

const Services = () => {
  return (
    <div className="services-page">
      <header className="page-header premium-header">
        <div className="container animate-fade-in">
          <span className="subtitle-top">Exquisite Solutions</span>
          <h1>Our Design Services</h1>
          <p className="section-subtitle">
            From conceptual sketches to the final touch, we offer a comprehensive suite of interior design 
            solutions tailored to your unique lifestyle and aesthetic preferences.
          </p>
        </div>
      </header>

      <section className="section services-grid-section">
        <div className="container">
          <div className="grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
