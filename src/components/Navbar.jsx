import React, { Component, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="relative flex flex-wrap items-center   px-1 py-1 nav ">
        <div className=" w-full px-4  flex flex-wrap  items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto  lg:static  ">
            <Link
              to={"/"}
              className=" font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-5xl text-white title"
            >
              The RPG Repositorium
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuIcon />
            </button>
          </div>
          <div
            className={
              "lg:flex   items-center " + (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col px-10 py-10 lg:py-0 lg:flex-row list-none subtitle gap-10 font-bold ">
              <li className="nav-item">
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to={"/library"}
                  className="px-3 py-2 flex items-center    text-white hover:opacity-95"
                >
                  <i className="    text-white opacity-90"></i>
                  <span className="ml-2">The Library</span>
                </Link>
              </li>
              <div className="nav-item drop">
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to={"/metier"}
                  className="px-3 py-2 flex items-center    text-white hover:opacity-95"
                >
                  <i className="   text-white opacity-90"></i>
                  <span className="ml-2">Notre Métier</span>
                </Link>
              </div>

              <li className="nav-item">
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to={"/references"}
                  className="px-3 py-2 pt-44 lg:py-2 flex items-center    text-white hover:opacity-95"
                >
                  <i className="   text-white opacity-90"></i>
                  <span className="ml-2">Nos Références</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to={"/contact"}
                  className="px-3 py-2 flex items-center   text-white hover:opacity-95"
                >
                  <i className="  text-white opacity-90"></i>
                  <span className="ml-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
