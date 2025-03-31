import Navbar from "@/components/Navbar/Navbar";
import "./projects.css";
/*import { Card, CardHeader, Image } from "@heroui/react";*/

{/*const projects = [
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by machine learning and NLP, providing real-time responses and automation.",
    image: "https://cdn.pixabay.com/photo/2021/02/02/16/45/chatbot-5970348_1280.jpg",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with secure payment integration, product recommendations, and a seamless UI.",
    image: "https://cdn.pixabay.com/photo/2017/08/06/11/59/ecommerce-2594683_1280.jpg",
  },
  {
    title: "Portfolio Website",
    description: "A sleek, responsive portfolio showcasing projects and experience, built with React and Tailwind.",
    image: "https://cdn.pixabay.com/photo/2016/11/22/19/14/software-development-1856279_1280.jpg",
  },
  {
    title: "Task Manager App",
    description: "A productivity app with task tracking, scheduling, and real-time notifications.",
    image: "https://cdn.pixabay.com/photo/2015/09/05/21/51/keyboard-926762_1280.jpg",
  },
];*/}

export default function Projects() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-white to-blue-700">
      <Navbar />
      <h1 className="page-title">My Projects</h1>

      {/*<div className="projects-grid">
        {projects.map((project, index) => (
          <Card key={index} className="project-card">
            <CardHeader className="absolute z-10 px-3 py-1 text-sm font-medium text-white rounded top-2 left-2 bg-black/60">
              {project.title}
            </CardHeader>
            <Image
              removeWrapper
              alt={project.title}
              className="project-image"
              src={project.image}
            />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </Card>
        ))}
      </div>*/}
    </div>
  );
}
