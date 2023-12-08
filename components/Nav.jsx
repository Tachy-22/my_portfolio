"use client";
import React, { useCallback, useState } from "react";

const Nav = () => {
  const navItems = [
    { label: "home", path: "/#" },
    { label: "stack", path: "/#my-stack" },
    { label: "projects", path: "/#my-projects" },
    { label: "experience", path: "/#my-experience" },
    { label: "contact", path: "/#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section
      id="#"
      className="w-full z-10 sticky top-0 lg:px-4 backdrop-blur-3xl"
    >
      <div className="border-b flex py-4 px-4 xl:px-0 justify-between">
        <p className="uppercase font-bold text-xl text-blue-300">
          Jeffery E <span className="text-white">.</span>{" "}
          <span className="text-purple-400">_</span>
        </p>
        <nav>
          <ul className="xl:flex hidden gap-4 cursor-pointer   ">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <a href={item.path}>
                  / {item.label}
                  <span className="w-full opacity-0 hover:opacity-100  transition-all duration-300 left-0 top-0 h-full flex justify-center items-center absolute">
                    <span className="h-[0.2rem] blur-[1px] translate-y-[3px]  w-full bg-red-400 rounded"></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile Nav */}
          <div className="xl:hidden">
            <button
              name={`toggle-button`}
              aria-label="toggle-button"
              onClick={toggleMobileMenu}
              className="block text-white hover:text-gray-300 focus:outline-none"
            >
              {/* You can use any icon for the hamburger menu */}
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <ul className="absolute top-full left-0 right-0 bg-gray-900">
                {navItems.map((item, index) => (
                  <a
                    onClick={() => {
                      toggleMobileMenu();
                    }}
                    href={item.path}
                    className="py-2 px-4 cursor-pointer block text-white hover:bg-gray-800"
                  >
                    {item.label}
                  </a>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
