import React from "react";

const projects = [
  {
    title: "E-handel",
    description: "En applikation byggd med React, Next.js och Tailwind CSS för att hantera produkter.",
    img: "/images/Modux-e-handel.png",
    tech: ["React", "Next.js", "Tailwind CSS"],
    source: "https://github.com/ShahadAlkazzaz/E-handel",
  },
  {
    title: "Travel",
    description: "En hemsidan byggd med React som man kan söka efterr en resa och se vår erbjusdande.",
    img: "/images/Travel.png",
    tech: ["React", "CSS"],
    source: "https://github.com/ShahadAlkazzaz/Travel2",
  },
  {
    title: "Chat-App",
    description: "En full-stack-applikation (grupp-arbete) för Chat-app med React och postgreSQL.",
    img: "/images/chat-app.png",
    tech: ["React", "postgreSQL"],
    source: "https://github.com/igge88/Chat-App",
  },
  {
    title: "Aventuras",
    description: "En webbplats (grupparbete) som inspirerar till resor och främjar förståelse och empati genom nya upplevelser.",
    img: "/images/aventuras.png",
    tech: ["Vue", "CSS"],
    source: "https://github.com/vikluund/Team1",
  },
  {
    title: "Gomoku",
    description: "En webbplats (grupparbete) för att spela Go!moku online mot vänner eller andra spelare ",
    img: "/images/gomoku.png",
    tech: ["React", "CSS"],
    source: "https://github.com/vikluund/Grupp5-Gomoku",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="section-header">Mina Projekt</h2>
      <p className="section-description">
        Här är några av de projekt jag har arbetat med. Klicka på GitHub-länkarna för att se koden.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="tech-badge" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.source} className="project-link source-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
