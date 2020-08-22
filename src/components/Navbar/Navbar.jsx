import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="fixed flex flex-col w-full">
      <nav className="relative flex w-full p-3">
        <div className="w-9/12"></div>
        <div className="justify-end">
          <a href="/services" className="p-3">
            Services
          </a>
          <a href="/testimonials" className="p-3">
            Testimonials
          </a>
          <a href="/contact" className="p-3">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
