import { Link, useLocation } from "react-router-dom";
import { Button } from '@heroui/button';
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white h-[70px] w-full flex items-center justify-between px-6 md:px-12 shadow-md fixed top-0 z-50">
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[50px]">
        {["/", "/services", "/projects", "/contact"].map((path, index) => (
          <Link 
            key={index} 
            to={path} 
            className={`nav-link ${location.pathname === path ? "nav-active" : ""}`}
          >
            {path === "/" ? "About" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-blue-500 md:hidden">
        {menuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-lg md:hidden">
          {["/", "/services", "/projects", "/contact"].map((path, index) => (
            <Link 
              key={index} 
              to={path} 
              className="nav-link" 
              onClick={() => setMenuOpen(false)}
            >
              {path === "/" ? "About" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      )}

      {/* "Hire Me" Button */}
      <Button variant="solid" color="primary" className="hidden md:block">
        <Link to="/contact">Hire Me</Link>
      </Button>
    </nav>
  );
}
