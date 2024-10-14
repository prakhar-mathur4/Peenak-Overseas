import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home", name: "home" },
    { id: 2, link: "about", name: "about us" },
    { id: 3, link: "products", name: "products" },
    { id: 4, link: "contact", name: "contact us" },
  ];

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };
  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex flex-col items-center space-x-3 rtl:space-x-reverse"
        >
          {/* Your logo or brand element goes here */}
          <NavLink to="/">
            <img
              src="data:image/jpeg;base64,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"
              className="h-20"
              alt="Flowbite Logo"
            />
          </NavLink>
          {/* <img src="your_logo_image_src_here" className="h-20" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl md:text-2xl font-semibold whitespace-nowrap">
            Peeank Overseas
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-xl"
              >
                {link === "about" || link === "contact" ? (
                  <ScrollLink to={link} smooth duration={500}>
                    {name}
                  </ScrollLink>
                ) : (
                  <NavLink to={`/${link}`}>{name}</NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Responsive Navigation Toggle */}
        <div
          onClick={toggleNav}
          className="cursor-pointer z-10 text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Responsive Navigation Menu */}
      {nav && (
        <ul className="flex flex-col relative justify-center items-center top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-xl"
              onClick={closeNav}
            >
              {link === "about" || link === "contact" ? (
                <ScrollLink to={link} smooth duration={500}>
                  {name}
                </ScrollLink>
              ) : (
                <NavLink to={`/${link}`}>{name}</NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
