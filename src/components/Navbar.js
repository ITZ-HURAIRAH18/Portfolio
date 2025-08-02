import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types"; // Prop types are not used in this example but are a good practice.
import { NavLink } from "react-router-dom";

// This is a placeholder for the actual useDarkSide hook.
// In a real application, this hook would manage the dark mode state.
const useDarkSide = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkMode, setDarkMode] = useState(colorTheme === "light" ? true : false);
 
  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkMode(!darkMode); 
  };

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
    ${isActive
      ? "bg-emerald-500 text-white shadow-lg"
      : "text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500"
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300
    ${isActive
      ? "bg-emerald-500 text-white shadow-lg"
      : "text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500"
    }`;
 
  return (
    <header className="fixed top-0 w-full z-50 shadow-md">
      <nav className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-500
                hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            {/* Desktop menu links */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-2 lg:space-x-4">
                  <NavLink to="/" className={linkClasses}>Home</NavLink>
                  <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
                  {/* <NavLink to="/blog" className={linkClasses}>Blog</NavLink> */}
                  <NavLink to="/about" className={linkClasses}>About Me</NavLink>
                  <a
                    href="https://github.com/ITZ-HURAIRAH18
"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
                     text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Dark mode toggle button */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                onClick={toggleDarkMode}
                className="rounded-full bg-gray-100 dark:bg-gray-800 p-1 text-gray-500
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800"
              >
                <span className="sr-only">Toggle dark mode</span>
                {darkMode ? (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state. */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink to="/" className={mobileLinkClasses}>Home</NavLink>
            <NavLink to="/projects" className={mobileLinkClasses}>Projects</NavLink>
            {/* <NavLink to="/blog" className={mobileLinkClasses}>Blog</NavLink> */}
            <NavLink to="/about" className={mobileLinkClasses}>About Me</NavLink>
            <a
              href="https://github.com/Ridwanullahi-code"
              target="_blank"
              rel="noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300
               text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
