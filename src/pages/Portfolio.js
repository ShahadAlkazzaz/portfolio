import React from "react";

const projects = [
  {
    title: "E-handel",
    description: "En applikation byggd med React, Next.js och Tailwind CSS för att hantera produkter.",
    img: "/images/Modux-e-handel.png",
    tech: ["React", "Next.js", "Tailwind CSS"],
    source: "#",
  },
  {
    title: "Portföljwebbplats",
    description: "Min egen portfölj byggd med React och Tailwind CSS.",
    img: "/images/Travel.png",
    tech: ["React", "Tailwind CSS"],
    source: "#",
  },
  {
    title: "E-handelssystem",
    description: "En full-stack-applikation för e-handel med React och MongoDB.",
    img: "/images/e-handelssystem.png",
    tech: ["React", "MongoDB"],
    source: "#",
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
