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
              <h3>Praktik hos Sprinto</h3>
              <p>April 2024 - Juni 2024</p>
              <p>Arbetade med att utveckla och förbättra digitala lösningar.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Praktik hos Swedcon</h3>
              <p>Januari 2024 - April 2024</p>
              <p>Hanterade projekt inom webbutveckling och integrationer.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Praktik hos Junico (IT-Konsulter)</h3>
              <p>Augusti 2023 - Oktober 2023</p>
              <p>Fick erfarenhet av konsulttjänster inom webbutveckling.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Biblioteksassistent/IT-värd</h3>
              <p>September 2020 - Januari 2021</p>
              <p>Arbetade på Stockholms stadsbibliotek med IT-support och kundtjänst.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Praktik hos Huawei</h3>
              <p>Juli 2014 - September 2014</p>
              <p>Jobbade inom nätverk och mobilkommunikation i Baghdad.</p>
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
