import React, { useState } from "react";
import { NAV_LINKS } from "./const";
import NavLink from "./shared/nav";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2 font-inter">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        {/* Logo */}
        <a href="/" className="text-yellow-400 text-2xl font-inter font-bold">
          ReelsClub
        </a>
        {/* Nav link  */}
        <ul className=" hidden md:flex flex-wrap justify-center items-center gap-8  w-full font-inter ">
          {NAV_LINKS.map((item, index) => (
            <li key={index}>
              <NavLink href={item.link} name={item.name} />
            </li>
          ))}
        </ul>

        {/* CTA  */}
        <button className="hidden md:flex bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-white transition duration-300 ">
          <a href="#pricing">Qo'shilish</a>
        </button>
        {/* Mobile button  */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-white cursor-pointer hover:opacity-65"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full flex flex-col items-center gap-6 text-neutral-500 bg-black/85 md:hidden p-6 rounded-xl border border-neutral-800">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <NavLink href={item.link} name={item.name} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
