import { Navbar } from "@/components/navbar";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Chat App",
    description: "Online Group Chat App With Firebase and Firestore using React.",
    github: "https://github.com/Fahad-666/chat-app",
    demo: "https://chat.techiefahad.site",
  },
  {
    title: "College Progress Tracker",
    description: "A system to track student progress using Python, React, and SQLite, now upgraded with Firebase.",
  },
  {
    title: "Music Player",
    description: "An eye-catching online music player built with React, Vite, and Tailwind CSS.",
  },
];

const Projects = () => {
  return (
    <div className="flex bg-[#0f0f1a] flex-col items-center h-screen text-white">
      <Navbar />
      <section className="skills">
        <h2 className="section-title">My Projects</h2>
        <div className="gap-8 skill-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="skill-item bg-[#1a1a2e] p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="mb-2 text-xl skill-title">{project.title}</h3>
              <p className="mb-4 skill-desc">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-600">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" className="flex items-center gap-2 text-green-400 transition-colors hover:text-green-600">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
