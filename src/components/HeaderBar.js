import "../App.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/LogoPortfolio.svg";
import { useState } from "react";

const HeaderBar = () => {
  const [showDisplay, setShowDisplay] = useState(false);

  return (
    <header className="HeaderBar z-50">
      <nav className="bg-gray-darkest">
        <div className="flex flex-row w-full justify-between">
          <div className="flex items-center pl-5">
            <img
              src={Logo}
              alt="Logo"
              className="h-20 w-20 stroke-gray-lightest"
            />
            <h1 className="text-gray-lightest text-2xl pl-2">Charles Welch</h1>
          </div>
          <div className="hidden md:flex flex-row items-center justify-evenly divide-x-2 divide-gray-lightest">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-lightest text-center px-2 text-xl ${
                  isActive && `underline`
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `text-gray-lightest text-center px-2 text-xl ${
                  isActive && `underline`
                }`
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-gray-lightest text-center px-2 text-xl ${
                  isActive && `underline`
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-lightest text-center px-2 pr-5 text-xl ${
                  isActive && `underline`
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="absolute md:hidden right-5 top-5">
            <div className="flex justify-end items-center w-full">
              <FontAwesomeIcon
                icon={faBars}
                className="w-full h-full text-gray-lightest cursor-pointer"
                size="lg"
                onClick={() => setShowDisplay(!showDisplay)}
              />
            </div>
            {showDisplay && (
              <div className="z-50 flex flex-col w-full bg-gray-lightest rounded border-2 border-gray-dark">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-gray-darkest text-center text-xl mx-2 py-2 border-b-2 border-gray-darkest ${
                      isActive && `underline`
                    }`
                  }
                  exact
                >
                  Home
                </NavLink>
                <NavLink
                  to="/experience"
                  className={({ isActive }) =>
                    `text-gray-darkest text-center text-xl mx-2 py-2 border-b-2 border-gray-darkest ${
                      isActive && `underline`
                    }`
                  }
                >
                  Experience
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `text-gray-darkest text-center text-xl mx-2 py-2 border-b-2 border-gray-darkest ${
                      isActive && `underline`
                    }`
                  }
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-gray-darkest text-center text-xl mx-2 py-2 ${
                      isActive && `underline`
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderBar;
