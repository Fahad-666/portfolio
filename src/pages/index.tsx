import * as ui from "@heroui/react";
import { Navbar } from "../components/navbar";
import "../styles/globals.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4 bg-slate-900">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center w-full mt-8 text-center md:text-left md:justify-start md:mt-0">
          <p className="mr-2 text-2xl font-bold text-white md:text-3xl lg:text-5xl">
            Hello! I'm
          </p>
          <div className="p-1 mt-2 rounded-2xl bg-gradient-to-r from-lime-600 to-blue-600 md:mt-0">
            <span className="block px-2 text-2xl font-bold text-white md:text-3xl lg:text-5xl">
              Fahad Asghar.
            </span>
          </div>
        </div>
        
        <div className="flex flex-col items-center w-full max-w-3xl px-4 mt-8 md:items-start md:mt-12">
          <p className="text-base text-center text-white md:text-left md:text-lg lg:text-xl">
            I'm a Software Developer specializing in creating Fully Responsive Applications in React + Python. I create beautiful, functional, and user-friendly digital experiences.
          </p>
          
          <Link to="/projects" className="mt-6 md:mt-8">
            <ui.Button 
              variant="shadow" 
              color="warning"
              className="px-6 py-2 text-sm md:text-base"
            >
              View My Work
            </ui.Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;