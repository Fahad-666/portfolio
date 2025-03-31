import Navbar from "@/components/Navbar/Navbar";
import "./index.css";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUsers, FaCheckCircle, FaWrench } from "react-icons/fa";

function Index() {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-gradient-to-b from-white to-blue-600">
      <Navbar />

      <div className="about-box">
        <p className="about-info">
          Hi, I'm Fahad, a software developer specializing in AI & web applications.
          Currently building AI-driven products and working on freelance projects.
        </p>

        <Button className="contact-button" variant="solid" color="primary">
          <Link to="/contact">Contact Me</Link>
        </Button>
      </div>

      {/* Footer with Stats */}
      <Footer />
    </div>
  );
}

function Footer() {
  const [stats, setStats] = useState({ clients: 0, projects: 0, ongoing: 0 });

  useEffect(() => {
    let interval = setInterval(() => {
      setStats((prev) => ({
        clients: Math.min(prev.clients + 1, 10),
        projects: Math.min(prev.projects + 1, 3),
        ongoing: Math.min(prev.ongoing + 1, 3),
      }));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="stat">
        <FaUsers className="stat-icon" />
        <h2 className="stat-number">{stats.clients}+</h2>
        <p className="stat-text">Satisfied Clients</p>
      </div>
      <div className="stat">
        <FaCheckCircle className="stat-icon" />
        <h2 className="stat-number">{stats.projects}+</h2>
        <p className="stat-text">Projects Completed</p>
      </div>
      <div className="stat">
        <FaWrench className="stat-icon" />
        <h2 className="stat-number">{stats.ongoing}</h2>
        <p className="stat-text">Projects Under Construction</p>
      </div>
    </footer>
  );
}

export default Index;
