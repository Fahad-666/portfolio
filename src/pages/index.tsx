import * as ui from "@heroui/react"
import { Navbar } from "../components/navbar";
import "../styles/globals.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex bg-[##0f0f1a] flex-col items-center h-screen w-full md:w-1/2 lg:w-screen p-4">
      <Navbar/>
      <div className="flex flex-row items-center content-center">
        <p className="abosolute mt-[39%] mr-[18px] text-white sm:text-[28px] lg:text-[46px] font-bold">Hello! I'm</p>
        <pre className="name-main mt-[40%] rounded-2xl p-[3px] bg-gradient-to-r from-lime-600 to-blue-600 text-white sm:text-[30px] lg:text-[46px] font-bold">
          Fahad Asghar.
        </pre>    
      </div>
      <div className="ml-[13%] flex flex-col">
        <p className="index-p-info text-white max-w-[750px] mt-[50px]">
          I'm a Software Developer specializing in creating Fully Responsive Applications in React + Python. I create beautiful, functional, and user-friendly digital experiences.
        </p>
        <Link to={"/projects"}>
          <ui.Button variant="shadow" className="max-w-[150px] mt-[4%] view-my-work-index" color="warning">
            View My Work
          </ui.Button>
        </Link>
      </div>
    </div>
  )
}

export default Index;