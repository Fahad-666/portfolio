import Navbar from "@/components/Navbar";
import './index.css';
import { Button } from "@heroui/button";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-white to-blue-600">
      <Navbar />

      <div className="about-box">
        <p className="about-info">Hi, I'm Fahad, a software developer specializing in AI & web applications.
        Currently building AI-driven products and working on freelance projects.</p>

        <Button className="contact-button" variant="solid" color="primary"><Link to='/contact'>Contact Me</Link></Button>

      </div>

    </div>
  )
}

export default Index;