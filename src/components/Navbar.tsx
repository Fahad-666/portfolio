import { Link, useLocation } from "react-router-dom";
import { Button } from '@heroui/button';

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="bg-white h-[70px] gap-[90px] items-center absolute w-[100%] justify-center flex flex-row">
        <h1 className={`text-blue-500 cursor-pointer font-[Poppins] text-[20px] ${location.pathname === '/' ? 'border-b-3 border-blue-500' : ''}`}><Link to='/'>About</Link></h1>
        <h1 className={`text-blue-500 text-[20px] cursor-pointer font-[Poppins] ${location.pathname === '/services' ? 'border-b-3 border-blue-500' : ''}`}><Link to='/services'>Services</Link></h1>
        <h1 className={`text-blue-500 text-[20px] cursor-pointer font-[Poppins] ${location.pathname === '/projects' ? 'border-b-3 border-blue-500' : ''}`}><Link to='/projects'>Projects</Link></h1>
        <h1 className={`text-blue-500 text-[20px] cursor-pointer font-[Poppins] ${location.pathname === '/contact' ? 'border-b-3 border-blue-500' : ''}`}><Link to='/contact'>Contact</Link></h1>
    
        <Button variant="solid" color="primary" className="absolute ml-[90%]"><Link to="/contact">Hire Me</Link></Button>

    </div>
  )
}