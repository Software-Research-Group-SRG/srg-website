import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import srgLogo from "@/assets/srgLogo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "MEMBERS", path: "/members" },
    { label: "PROJECTS", path: "/projects" },
    { label: "CONTACT US", path: "/contact" },
  ];

  useEffect(() => {
    const current = menuItems.find(item => item.path === location.pathname);
    if (current) {
      setActive(current.label);
    }
  }, [location.pathname]);

  return (
    <header className="w-full sticky top-0 z-50 bg-transparent backdrop-blur-md text-white">

      <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 py-7 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/");
          }}
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
        >
          <img src={srgLogo} alt="SRG Logo" className="w-14 h-14 rounded-full" />
          <h1 className="text-sm md:text-base font-semibold tracking-wide uppercase font-['Oxanium'] leading-tight">
            The Software Research <br className="md:hidden" />
            Group
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium tracking-wide font-['Oxanium']">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate(item.path);
              }}
              className="relative group transition-all duration-300 ease-out hover:-translate-y-1 hover:text-blue-300"
            >
              {item.label}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-400 transition-all duration-300 origin-left 
                ${active === item.label
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
              key={item.label}
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate(item.path);
              }}
              className="text-left hover:text-blue-300 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;