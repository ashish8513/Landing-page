import React from 'react';
import ProjectCard from '../molecules/ProjectCard';
import { designProjects } from 'utils/data';

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text b py-10">
        My Projects
      </h1>

      {/* Design Projects */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 lg:px-64">
        {designProjects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      {/* 👇 This is the button to GitHub profile */}
      {/* <div className="flex justify-center mt-8">
        <a
          href="https://www.linkedin.com/in/michael-tallada-6b316697/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-full transition duration-200"
        >
          Contact me for more projects (500+)
        </a>
      </div> */}
    </div>
  );
};

export default Projects;
