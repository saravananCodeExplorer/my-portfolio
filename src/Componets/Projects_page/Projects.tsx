import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce website built using PHP, MySQL, Bootstrap, HTML, and CSS. Features include user authentication, product catalog, and secure payment integration.",
      technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills and projects. Built with React and Tailwind CSS, with additional styling from Bootstrap for enhanced design.",
      technologies: ["React", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "E-commerce Website with Frontend & Backend Integration",
      description:
        "A modern e-commerce application featuring seamless CRUD operations, user authentication, and admin dashboard. Built using React for the frontend, Node.js for the backend, and MySQL for the database.",
      technologies: ["React", "Node.js", "MySQL"],
    },
  ];

  return (
    <div className="projects-section bg-gray-700 text-white py-20 px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="technologies text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Technologies:</span>{' '}
                {project.technologies.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
