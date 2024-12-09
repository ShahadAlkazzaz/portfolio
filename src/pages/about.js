import React from "react";

const About = () => {
  return (
    <section className="about-container">
      {/* Introduktion */}
      <div className="intro-section">
        <div className="profile-picture">
          <img
            src="https://via.placeholder.com/200"
            alt="Shahad Al-kazzaz"
          />
        </div>
        <div className="intro-text">
          <h1>Shahad Al-kazzaz</h1>
          <p>
            Jag är en passionerad frontend-utvecklare med erfarenhet av att
            bygga moderna och användarvänliga lösningar. Min expertis omfattar
            React, .NET och UX/UI-design, och jag älskar att skapa lösningar
            som kombinerar kreativitet och teknik. När jag inte kodar, utvecklar
            jag mina kunskaper eller experimenterar med nya verktyg och
            ramverk.
          </p>
        </div>
      </div>

      {/* Kompetenser */}
      <div className="skills-section">
        <h2>Kompetenser</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <i className="fas fa-code"></i>
            <h3>Frontend-utveckling</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>
          <div className="skill-item">
            <i className="fas fa-database"></i>
            <h3>Backend-utveckling</h3>
            <p>.NET, API-integrationer</p>
          </div>
          <div className="skill-item">
            <i className="fas fa-paint-brush"></i>
            <h3>Design</h3>
            <p>Figma, UX/UI-design</p>
          </div>
          <div className="skill-item">
            <i className="fas fa-globe"></i>
            <h3>Språk</h3>
            <p>Svenska, Engelska, Arabiska</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
