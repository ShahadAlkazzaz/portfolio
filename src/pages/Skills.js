import React from "react";

const skillsData = [
  { name: "HTML", icon: "/images/html-icon.png" },
  { name: "CSS", icon: "/images/css-icon.png" },
  { name: "React", icon: "/images/react-icon.png" },
  { name: "Node.js", icon: "/images/node-icon.png" },
  { name: "MongoDB", icon: "/images/mongodb-icon.png" },
  { name: "MySQL", icon: "/images/mysql-icon.png" },
  { name: "Figma", icon: "/images/figma-icon.png" },
  { name: ".NET", icon: "/images/dotnet-icon.png" },
  { name: "Vue", icon: "/images/vue-icon.png" },
  { name: "CMS", icon: "/images/cms-icon.png" },
  { name: "Gatsby", icon: "/images/gatsby-icon.png" },
  { name: "TypeScript", icon: "/images/typescript-icon.png" },
  { name: "Next.js", icon: "/images/nextjs-icon.png" },
  { name: "Tailwind CSS", icon: "/images/tailwind-icon.png" },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-header">Mina Kunskaper</h2>
      <p className="section-description">
        Här är de teknologier och verktyg jag använder för att bygga
        professionella lösningar.
      </p>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img
              src={skill.icon}
              alt={`${skill.name} Icon`}
              className="skill-icon"
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
