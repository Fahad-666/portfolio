import { Button } from "@heroui/button";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/globals.css";

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <HeroUINavbar 
      className="w-full px-4 py-2 bg-transparent" 
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Mobile menu toggle - only visible on small screens */}
      <div className="flex md:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </div>

      {/* Desktop navigation - hidden on mobile */}
      <NavbarContent className="justify-center hidden w-full md:flex md:justify-end">
        {navItems.map((item) => (
          <NavbarItem key={item.path}>
            <Link to={item.path}>
              <Button
                className={`item.path === "/" ? "home-button" : "" mx-1`}
                variant={location.pathname === item.path ? "ghost" : "light"}
                color="success"
                size="sm"
              >
                {item.label}
              </Button>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile menu - only appears when toggled */}
      <NavbarMenu className="pt-6 bg-slate-900 bg-opacity-95">
        {navItems.map((item) => (
          <NavbarMenuItem key={`mobile-${item.path}`}>
            <Link 
              to={item.path}
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button
                variant={location.pathname === item.path ? "ghost" : "light"}
                color="success"
                className="justify-start w-full"
              >
                {item.label}
              </Button>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};