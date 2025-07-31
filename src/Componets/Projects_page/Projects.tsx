import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

 const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills and projects. Built with React and Tailwind CSS, with additional styling from Bootstrap for enhanced design.",
    technologies: ["React", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com/saravananCodeExplorer/my-portfolio",
  },
  {
    title: "E-commerce Website with Frontend & Backend Integration",
    description:
      "A modern e-commerce application featuring seamless CRUD operations, user authentication, and admin dashboard. Built using React for the frontend, Node.js for the backend, and MySQL for the database.",
    technologies: ["React", "Node.js", "MySQL"],
    github: "https://github.com/saravananCodeExplorer/FullStack/tree/main/17.REACT-NODE-%20CRUD-APP",
  },
  {
    title: "Full-Stack E-Commerce Web App",
    description:
      "A full-stack application with React frontend, Node.js + Express backend, and MySQL database. Features customer & admin login (JWT), secure signup with bcrypt, product management with image upload using Multer.",
    technologies: ["React", "Express", "Node.js", "MySQL", "JWT", "Multer", "Bcrypt"],
    github: "https://github.com/saravananCodeExplorer/ecommerce-react", // update if needed
  }
];


  return (
    <div className="projects-section bg-black text-white py-20 px-6 min-h-screen">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2
          className="text-3xl font-bold text-yellow-400 mb-8 text-center"
          data-aos="fade-up"
        >
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <span className="font-semibold text-gray-300">Technologies:</span>{' '}
                {project.technologies.join(', ')}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-sm text-yellow-400 border border-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black transition-colors duration-300"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
