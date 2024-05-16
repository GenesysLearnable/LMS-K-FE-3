import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/homepage/homelogo.svg";

export default function NavBar() {
  return (
    <>
      <header className="sticky top-0 z-50 shadow-md">
        <nav className="bg-white justify-center items-center flex sm:flex-row sm:text-left sm:justify-between px-6 py-2 w-full">
          <div className="sm:mb-0">
            <Link
              to="#"
              className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
            >
              <img src={logo} alt="learnable kids logo" />
            </Link>
          </div>
          <div className="flex gap-12">
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
          <div>
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

            <Link
              to="/Hiparent"
              className="text-2xl font-bold no-underline text-[#130E5D] ml-2"
            >
              <button
                type="button"
                className="text-[#04031C] border-2 border-yellow-400 font-bold rounded-md text-xl px-5 py-2.5 me-5 bg-yellow-400"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
