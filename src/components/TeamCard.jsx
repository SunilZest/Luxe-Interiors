import React from 'react';
import { Globe, Share2, Mail, MessageSquare } from 'lucide-react';

const TeamCard = ({ member, index }) => {
  const isEven = index % 2 !== 0;

  return (
    <div className={`team-card-horizontal ${isEven ? 'reverse' : ''} animate-fade-in-up delay-${(index % 4) * 100}`}>
      <div className="team-img-column">
        <img src={member.image} alt={member.name} loading="lazy" />
      </div>
      <div className="team-content-column">
        <span className="team-role">{member.role}</span>
        <h2 className="team-name">{member.name}</h2>
        <p className="team-bio">{member.bio}</p>
        <div className="team-socials">
          <a href="#" className="team-social-link" aria-label="Website"><Globe size={20} /></a>
          <a href="#" className="team-social-link" aria-label="Share"><Share2 size={20} /></a>
          <a href="#" className="team-social-link" aria-label="Message"><MessageSquare size={20} /></a>
          <a href="#" className="team-social-link" aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
