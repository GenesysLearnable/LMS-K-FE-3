import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="justify-center flex flex-col sm:flex-row sm:text-left sm:justify-between px-6 w-full">
          <div className="sm:mb-0">
            <Link
              to="#"
              className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
            >
              <img src={logo} alt="learnable kids logo" />
            </Link>
          </div>
          <div className="mt-3 flex gap-12">
            <Link
              to="#"
              className="text-2xl font-bold no-underline text-[#130E5D] ml-2"
            >
              Courses
            </Link>
            <Link
              to="#"
              className="text-2xl font-bold no-underline text-[#130E5D] ml-2"
            >
              Contact
            </Link>
            <Link
              to="#"
              className="text-2xl font-bold no-underline text-[#130E5D] ml-2"
            >
              Price
            </Link>
          </div>
          <div className="flex align-top mt-2">
            <Link
              to="/Login"
              className="text-2xl font-bold no-underline text-[#130E5D] ml-2"
            >
              <button
                type="button"
                className="text-[#04031C] bg-white border-2 border-[#04031C] font-bold rounded-md text-xl px-5 py-2.5 me-5"
              >
                Log In
              </button>
            </Link>

            <button
              type="button"
              className="text-[#04031C] font-bold rounded-md text-xl px-5 py-2.5 me-5 bg-yellow-400"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
