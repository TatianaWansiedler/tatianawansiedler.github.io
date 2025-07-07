import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code-icon lucide-code"
              >
                <path d="m16 18 6-6-6-6" />
                <path d="m8 6-6 6 6 6" />
              </svg>
            </span>
          </Link>

          <div className="d-flex align-items-center">
            <nav className="desktop__nav d-none d-md-flex nav_ac">
              <NavLink
                to="/"
                className={({ isActive }) => `${isActive ? "active_link" : ""}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => `${isActive ? "active_link" : ""}`}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `${isActive ? "active_link" : ""}`}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `${isActive ? "active_link" : ""}`}
              >
                Contact
              </NavLink>
            </nav>
            <Themetoggle />
            <button
              className="menu__button nav_ac d-md-none"
              onClick={handleToggle}
            >
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className="my-3"
                    >
                      {" "}
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  {/* <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      {" "}
                      Contact
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            {/* <p className="copyright m-0">copyright __ {logotext}</p> */}
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
