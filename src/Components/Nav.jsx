import React from "react";
import logo from "../image/logo.png";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <img
        src={logo}
        alt="logo"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="2000"
      />

      <div className="navlinks">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link" : null)}
        >
          <p>Home</p>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link" : null)}
        >
          <p>About</p>
        </NavLink>

        {/* <p>Service</p>
        <p>Portfolio</p> */}
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "link" : null)}
        >
          <p>Contact Us</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
