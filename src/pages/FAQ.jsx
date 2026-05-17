import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: "Process",
      question: "What is your interior design process?",
      answer: "Our process begins with an initial consultation, followed by conceptual design, material selection, technical drawings, and final execution/styling. We ensure you are involved at every critical stage."
    },
    {
      category: "Process",
      question: "How long does a typical project take?",
      answer: "Timeline varies based on scope. A single room makeover might take 4-6 weeks, while a full residential project can span 4-8 months from concept to completion."
    },
    {
      category: "Services",
      question: "Do you handle the construction and renovation as well?",
      answer: "Yes, we offer end-to-end services. We work with trusted contractors and site supervisors to ensure our designs are implemented with precision and safety."
    },
    {
      category: "Billing",
      question: "What is your pricing structure?",
      answer: "We offer both fixed-fee packages and percentage-based fees depending on the project complexity. During our first consultation, we provide a transparent breakdown of expected costs."
    },
    {
      category: "Services",
      question: "Can I keep some of my existing furniture?",
      answer: "Absolutely! We love incorporating meaningful pieces into our new designs. We'll find the best way to integrate your existing furniture so it complements the new aesthetic."
    },
    {
      category: "Process",
      question: "Do you offer virtual consultations?",
      answer: "Yes, we provide high-quality virtual design consultations for clients outside our primary location or those who prefer a remote start."
    },
    {
      category: "Legal",
      question: "Are you insured and licensed?",
      answer: "Yes, Interior Studio is fully licensed and carries comprehensive professional liability and workers' compensation insurance."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <header className="page-header premium-header">
        <div className="container animate-fade-in">
          <span className="subtitle-top">Common Inquiries</span>
          <h1>Frequently Asked Questions</h1>
          <p className="section-subtitle">Everything you need to know about working with Interior Studio.</p>
          
          <div className="search-bar-wrapper mt-8" style={{ maxWidth: '600px', margin: '2rem auto 0', position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="form-control"
              style={{ borderRadius: '40px', paddingLeft: '3rem' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} size={20} />
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="feature-accordion" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className={`feature-item ${activeIndex === index ? 'active' : ''}`}>
                  <button onClick={() => toggleAccordion(index)}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className="text-primary" style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{faq.category}</span>
                      <h3>{faq.question}</h3>
                    </div>
                    {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <div className="feature-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted">No results found for "{searchQuery}". Try a different keyword.</p>
              </div>
            )}
          </div>

          <div className="help-cta mt-12 text-center animate-fade-in">
            <div style={{ background: 'var(--color-bg-light)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--color-border)' }}>
              <MessageCircle className="text-primary mb-4" size={48} style={{ margin: '0 auto' }} />
              <h3>Still have questions?</h3>
              <p className="mb-8 mt-2">If you couldn't find the answer you're looking for, our help desk is available 24/7.</p>
              <Link to="/help" className="btn-primary">Visit Help Desk</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
