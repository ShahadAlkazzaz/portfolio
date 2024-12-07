import React from 'react';
import AnimatedText from './AnimatedText';

const Timeline = () => {
  return (
    <section className="timeline">
      <h2 className="timeline-header">Min Bakgrund</h2>
      <div className="timeline-container">
        <div className="timeline-left">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Frontend Developer på XYZ</h3>
              <p>Jan 2023 - Dec 2024</p>
              <p>Arbetade med React och skapade användarvänliga webblösningar.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Utbildning på IT-Högskolan</h3>
              <p>2022 - 2023</p>
              <p>Studerade webbutveckling med fokus på .NET och React.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Intern på Digital Engine</h3>
              <p>Sommar 2022</p>
              <p>Lärde mig om API-integrationer och modern frontend-utveckling.</p>
            </div>
          </div>
        </div>
        <div className="timeline-right">
          <AnimatedText />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
