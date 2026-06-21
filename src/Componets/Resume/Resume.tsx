import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with 1-second animation duration
  }, []);

  return (
    <div className="font-sans text-white leading-relaxed p-6 bg-black">
      <h1
        className="text-3xl font-bold text-center  mb-6 text-yellow-500"
        data-aos="fade-in"
      >
        Resume
      </h1>

      <section className="mb-6" data-aos="fade-right">
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">Career Objective</h2>
        <p>
          I am a motivated  software developer with a strong foundation in React full-stack
          development and digital marketing. I am eager to leverage my technical skills and marketing
          insights to build innovative web applications that enhance user experience and drive business
          growth. I am committed to continuous learning and problem-solving to deliver efficient, user-
          friendly solutions. I am seeking a challenging role in a forward-thinking company where I can
          contribute to impactful projects and further develop my expertise.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-left">
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">Technical Skills</h2>
        <ul className="list-disc pl-6">
          <li><span className="font-bold">Programming Languages:</span> C, C++, Python, JavaScript, PHP</li>
          <li><span className="font-bold">Web Development:</span> HTML, CSS, Bootstrap, jQuery, React.js</li>
          <li><span className="font-bold">Databases:</span> MySQL,MongoDB</li>
          <li>
            <span className="font-bold">Digital Marketing:</span> SEO, Content Creation, SMM, Google Ads, Facebook & Meta Ads,
            LinkedIn Ads, Email Marketing, Ad Analytics & AI
          </li>
          <li><span className="font-bold">Version Control:</span> Git & GitHub</li>
          <li><span className="font-bold">Tools:</span> Visual Studio Code</li>
        </ul>
      </section>

    <section className="mb-6" data-aos="fade-up">
  <h2 className="text-xl font-semibold text-yellow-500 mb-2">Education</h2>

  <ul className="list-none">
    <li className="mb-3">
      <span className="font-bold">
        Alagappa University College of Education, Karaikudi:
      </span>{" "}
      Master of Computer Applications (MCA)
      <br />
      <span className="text-gray-400">
        Alagappa University | 2024 - 2026
      </span>
    </li>

    <li className="mb-3">
      <span className="font-bold">
        Raja Serfoji Government College:
      </span>{" "}
      BSc Computer Science (72.09% - CGPA: 7.7)
      <br />
      <span className="text-gray-400">
        Bharathidasan University, Thanjavur | 2020 - 2023
      </span>
    </li>

    <li>
      <span className="font-bold">
        Government HR Sec School, Elakurichi:
      </span>{" "}
      Higher Secondary Certificate (72.33%)
      <br />
      <span className="text-gray-400">Year: 2020</span>
    </li>
  </ul>
</section>
      <section className="mb-6" data-aos="fade-up">
  <h2 className="text-xl font-semibold text-yellow-500 mb-2">Projects</h2>
  <div className="mb-4">
  <h3 className="font-bold text-lg">
    Identity and Access Management (IAM) Platform
  </h3>

  <p>
    Built a full-stack Identity and Access Management (IAM) platform featuring
    JWT authentication, Multi-Factor Authentication (MFA), and Role-Based
    Access Control (RBAC).
  </p>

  <ul className="list-disc pl-6 mt-2">
    <li>
      Developed multi-tenant organization management, invitation-based
      onboarding, and secure session handling using Redis and MongoDB.
    </li>
    <li>
      Implemented asynchronous email processing and background job queues with
      Redis and Bull for scalable notification delivery.
    </li>
    <li>
      Created responsive authentication and administration interfaces using
      Next.js, React, Tailwind CSS, and shadcn/ui.
    </li>
    <li>
      Implemented secure authentication workflows and permission management
      across organizations and users.
    </li>
    <li>
      Designed scalable backend architecture with REST APIs and database
      integration.
    </li>
  </ul>

  <p className="mt-2">
    <span className="font-bold">Technologies:</span> Next.js, React, Node.js,
    Express.js, PostgreSQL, Redis, Bull, JWT, Tailwind CSS, shadcn/ui
  </p>

 
</div>

  <div className="mb-4">
    <h3 className="font-bold text-lg">Portfolio Website</h3>
    <p>
      A personal portfolio website showcasing my skills and projects. Built with React and Tailwind CSS,
      with additional styling from Bootstrap for enhanced design.
    </p>
    <p className="mt-1">
      <span className="font-bold">Technologies:</span> React, Tailwind CSS, Bootstrap
    </p>
    <a
      href="https://github.com/saravananCodeExplorer/my-portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 underline"
    >
      View on GitHub
    </a>
  </div>

  <div className="mb-4">
    <h3 className="font-bold text-lg">E-commerce Website with Frontend & Backend Integration</h3>
    <p>
      A modern e-commerce application featuring seamless CRUD operations, user authentication, and admin dashboard.
      Built using React for the frontend, Node.js for the backend, and MySQL for the database.
    </p>
    <p className="mt-1">
      <span className="font-bold">Technologies:</span> React, Node.js, MySQL
    </p>
    <a
      href="https://github.com/saravananCodeExplorer/FullStack/tree/main/17.REACT-NODE-%20CRUD-APP"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 underline"
    >
      View on GitHub
    </a>
  </div>

  <div>
    <h3 className="font-bold text-lg">Full-Stack E-Commerce Web App</h3>
    <p>
      A full-stack application with React frontend, Node.js + Express backend, and MySQL database.
      Features customer & admin login (JWT), secure signup with bcrypt, product management with image upload using Multer.
    </p>
    <p className="mt-1">
      <span className="font-bold">Technologies:</span> React, Express, Node.js, MySQL, JWT, Multer, Bcrypt
    </p>
      <a
      href="https://github.com/saravananCodeExplorer/ecommerce-react"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 underline">  View on GitHub</a>
  </div>
</section>


     <section className="mb-6" data-aos="zoom-in">
  <h2 className="text-xl font-semibold text-yellow-500 mb-2">
    Work Experience
  </h2>

  <h3 className="font-semibold text-lg">
    Software Developer
  </h3>

  <p className="text-gray-400">
    May 2024 – Present
  </p>

  <ul className="list-disc pl-6 mt-2">
    <li>
      Designed and maintained scalable, responsive web applications using
      HTML5, CSS3, JavaScript (ES6+), and React.js.
    </li>
    <li>
      Built reusable React components and managed application state using
      Zustand.
    </li>
    <li>
      Developed and integrated RESTful APIs using Node.js and Express.js.
    </li>
    <li>
      Managed relational data with MySQL, including schema design and CRUD
      operations.
    </li>
    <li>
      Implemented efficient data fetching and caching using TanStack Query
      (React Query).
    </li>
    <li>
      Collaborated with cross-functional teams to improve UI/UX, performance,
      and cross-browser compatibility.
    </li>
    <li>
      Followed clean code practices, performed debugging, and participated in
      code reviews to ensure high-quality deliverables.
    </li>
  </ul>
</section>
      <section className="mb-6" data-aos="fade-right">
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">Certifications</h2>
        <p>Web Development Professional Certificate<br />Issued by <span className="font-bold">T4TEQ Software Solutions</span></p>
      </section>

      <section className="mb-6" data-aos="fade-left">
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">Personal Details</h2>
        <ul className="list-none">
          <li><span className="font-bold">Name:</span> S. Saravanan</li>
          <li><span className="font-bold">Father's Name:</span> S. Sekar</li>
          <li><span className="font-bold">Date of Birth:</span> 19/06/2003</li>
          <li><span className="font-bold">Religion:</span> Hindu</li>
          <li><span className="font-bold">Nationality:</span> Indian</li>
          <li><span className="font-bold">Languages Known:</span> English and Tamil</li>
        </ul>
      </section>

      <section className="mb-6" data-aos="zoom-in">
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">Contact</h2>
        <ul className="list-none">
          <li><span className="font-bold">Email:</span> <a href="mailto:saravanansekar434@gmail.com" className="text-yellow-500 underline">saravanansekar434@gmail.com</a></li>
          
          <li><span className="font-bold">LinkedIn:</span> <a href="https://linkedin.com/in/saravanansekar2003" target="_blank" rel="noopener noreferrer" className="text-yellow-500 underline">linkedin.com/in/saravanansekar2003/</a></li>
           <li><span className="font-bold">GitHub:</span> <a href="https://github.com/saravananCodeExplorer/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 underline">https://github.com/saravananCodeExplorer/</a></li>
          
          
          <li><span className="font-bold">Phone:</span> +91 6380190949</li>
        </ul>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">Declaration</h2>
        <p>
          I hereby declare that all the statements made here are true and complete to the best of my
          knowledge.
        </p>
        <p className="mt-4 font-bold">S. Saravanan</p>
      </section>
    </div>
  );
};

export default Resume;
