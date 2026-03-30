import React, { useState } from "react";
import srgLogo from "@/assets/srgLogo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const menuItems = [
    "ABOUT",
    "LEADERS",
    "ROLES",
    "STRUCTURE",
    "PROJECTS",
    "CONTACTS",
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-transparent backdrop-blur-md text-white">
      
      <div className="max-w-7xl mx-auto px-3 py-7 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={srgLogo}
            alt="SRG Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-sm md:text-base font-semibold tracking-wide uppercase font-['Oxanium'] leading-tight">
            The Software Research <br className="md:hidden" />
            Group
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium tracking-wide font-['Oxanium']">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className="relative group transition-all duration-300 ease-out hover:-translate-y-1 hover:text-blue-300"
            >
              {item}

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-400 transition-all duration-300 origin-left 
                ${
                  active === item
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Burger Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-base font-medium font-['Oxanium'] bg-black/30 backdrop-blur-md">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
              className="text-left hover:text-blue-300 transition"
            >
              {item}
            </button>
          ))}
        </div>
      )}
      
    </header>
  );
};

export default NavBar;