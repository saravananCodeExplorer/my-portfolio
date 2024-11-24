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
        className="text-3xl font-bold text-center underline mb-6 text-yellow-500"
        data-aos="fade-in"
      >
        Resume
      </h1>

      <section className="mb-6" data-aos="fade-right">
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">Career Objective</h2>
        <p>
          I am a motivated junior software developer with a strong foundation in React full-stack
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
          <li><span className="font-bold">Databases:</span> MySQL</li>
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
            <span className="font-bold">Raja Serfoji Government College:</span> BSc Computer Science (75% - CGPA: 7.5)<br />
            <span className="text-gray-400">Bharathidasan University, Thanjavur | 2020-2023</span>
          </li>
          <li>
            <span className="font-bold">Government HR Sec School, Elakurichi:</span> Higher Secondary Certificate (72.33%)<br />
            <span className="text-gray-400">Year: 2020</span>
          </li>
        </ul>
      </section>

      <section className="mb-6" data-aos="zoom-in">
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">Experience</h2>
        <h3 className="font-semibold text-lg">Junior Software Trainer</h3>
        <p className="text-gray-400"><strong>ISYSWAY Technologies</strong><br />May 2024 - Present</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Experienced in building and maintaining responsive websites and web applications.</li>
          <li>Proficient in HTML, CSS, JavaScript, and React, with a strong focus on creating intuitive, user-friendly designs.</li>
          <li>Conducted training sessions to educate junior developers and clients on web development best practices, technical concepts, and project workflows.</li>
          <li>Successfully balanced development responsibilities with instructional roles, maintaining the company's website and ensuring project goals are met with high standards.</li>
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
          <li><span className="font-bold">Father's Name:</span> R. Sekar</li>
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
