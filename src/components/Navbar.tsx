import { Link, useLocation } from "react-router-dom";
import { Button } from '@heroui/button';
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5"; // Import icons

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white h-[70px] w-full flex items-center justify-between px-6 md:px-12 shadow-md fixed top-0 z-50">
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[50px]">
        <h1 className={`text-blue-500 cursor-pointer font-[Poppins] text-[20px] ${location.pathname === '/' ? 'border-b-2 border-blue-500' : ''}`}>
          <Link to='/'>About</Link>
        </h1>
        <h1 className={`text-blue-500 text-[20px] cursor-pointer font-[Poppins] ${location.pathname === '/services' ? 'border-b-2 border-blue-500' : ''}`}>
          <Link to='/services'>Services</Link>
        </h1>
        <h1 className={`text-blue-500 text-[20px] cursor-pointer font-[Poppins] ${location.pathname === '/projects' ? 'border-b-2 border-blue-500' : ''}`}>
          <Link to='/projects'>Projects</Link>
        </h1>
        <h1 className={`text-blue-500 text-[20px] cursor-pointer font-[Poppins] ${location.pathname === '/contact' ? 'border-b-2 border-blue-500' : ''}`}>
          <Link to='/contact'>Contact</Link>
        </h1>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-blue-500 md:hidden">
        {menuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-lg md:hidden">
          <Link to='/' className="text-xl text-blue-500" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to='/services' className="text-xl text-blue-500" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to='/projects' className="text-xl text-blue-500" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to='/contact' className="text-xl text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* "Hire Me" Button */}
      <Button variant="solid" color="primary" className="hidden md:block">
        <Link to="/contact">Hire Me</Link>
      </Button>
    </nav>
  );
}
