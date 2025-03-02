import { Button } from "@heroui/button";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Link, useLocation } from "react-router-dom";
import "../styles/globals.css"

export const Navbar = () => {

  const location = useLocation();

  return (
    <HeroUINavbar className="lg:block pl-[30%] bg-[rgba(0,0,0,0)]">
        <NavbarContent>

          <NavbarItem>
            <Link to="/">
              <Button className="home-button" variant={location.pathname == "/"? "ghost": "light"} color="success">
                Home
              </Button>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link to="/about">
            <Button variant={location.pathname == "/about"? "ghost": "light"} color="success">
              About
            </Button>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link to="/skills">
            <Button variant={location.pathname == "/skills"? "ghost": "light"} color="success">
              Skills
              </Button>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link to="/projects">
            <Button variant={location.pathname == "/projects"? "ghost": "light"} color="success">
              Projects
            </Button>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link to="/contact">
            <Button variant={location.pathname == "/contact"? "ghost": "light"} color="success">
              Contact
            </Button>
            </Link>
          </NavbarItem>

        </NavbarContent>
    </HeroUINavbar>
  );
};
