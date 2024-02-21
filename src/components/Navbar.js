import "../css/btn.css";
import "../css/dropdown.css";
import "../css/search.css";

import logo from "../assets/Happyholi.png";
import { useState, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      "#logo",
      { opacity: 1, y: -10, duration: 0.3 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      "#searchBox",
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power1" }
    );
  }, []);

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <div className="flex items-center justify-between py-6 mx-32 sm:py-4 sm:mx-auto sm:w-screen navbar">
        <div className="flex items-center mr-auto">
          <ul className="flex items-center space-x-14">
            <li>About Us</li>
            <li>Packages</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <img className="h-16 sm:h-8 sm:mx-auto" id="logo" src={logo} alt="" />

        <div id="searchBox" className="search ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="sm:hidden"
            fill="none"
          >
            {/*... Your SVG path ...*/}
          </svg>
          <input
            type="text"
            className="max-w-xl py-1 pl-2 rounded-full sm:hidden search__input placeholder:overflow-visible focus-visible:outline-none"
            placeholder="Search Here..."
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
