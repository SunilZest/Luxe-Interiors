import React from 'react';
import TeamCard from '../components/TeamCard';
import './Team.css';

// Import images
import FinancialAdvisorImg from '../assets/teams_photo/Financial Advisor.png';
import ProjectManagerImg from '../assets/teams_photo/Project Manager.png';
import SiteSupervisorImg from '../assets/teams_photo/Site Supervisor.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Nidhi Verma',
      role: 'Financial Advisor',
      bio: 'Expert in budget optimization and luxury investment strategies, ensuring every project stays on track financially while maintaining the highest standards of quality.',
      image: FinancialAdvisorImg
    },
    {
      name: 'Sunil Verma',
      role: 'Senior Project Manager',
      bio: 'Oversees complex interior transformations with precision, ensuring timely delivery and uncompromising quality from conceptualization to the final walkthrough.',
      image: ProjectManagerImg
    },
    {
      name: 'Prity Verma',
      role: 'Site Supervisor',
      bio: 'Master of technical execution and on-site management, bringing blueprints to life with expert craftsmanship and attention to detail that exceeds client expectations.',
      image: SiteSupervisorImg
    }
  ];

  return (
    <div className="team-page">
      <header className="page-header premium-header">
        <div className="container animate-fade-in">
          <span className="subtitle-top">Meet Our Experts</span>
          <h1>The Creative Minds</h1>
          <p className="section-subtitle">A collective of visionary designers, architects, and artists dedicated to transforming your space into a masterpiece.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="team-list">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
