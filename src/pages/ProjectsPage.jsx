import React from "react";

const webDevProjects = [
  {
    title: "Project 1",
    description: "This is the first project.",
    image: "https://picsum.photos/200/300",
    link: "https://www.google.com",
  },
  {
    title: "Project 2",
    description: "This is the second project.",
    image: "https://picsum.photos/200/300",
    link: "https://www.google.com",
  },
  {
    title: "Project 3",
    description: "This is the third project.",
    image: "https://picsum.photos/200/300",
    link: "https://www.google.com",
  },
];

function ProjectsSection() {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {webDevProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} height={100} />
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div>
      <ProjectsSection />
    </div>
  );
}
