/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import { features } from "../components/helper/helperButtons";
import homelogo from "../assets/homepage/homelogo.svg";
import { useState, useEffect } from "react";

function AppNavbar() {
  const [selected, setIsSelected] = useState(null);
  // fixed top-0 left-0 flex h-screen flex-col items-center w-[22rem] bg-yellow-300 rounded-r-[2.5rem] py-7 justify-between
  // sticky top-0 bg-[#FFE060] h-screen  pt-7 pb-7 w-[15.57rem]
  return (
    <aside className=" sticky top-0 left-0 bg-[#FFE060] row-span-3  h-screen">
      <div className="flex flex-col items-center px-4 pt-[2.18rem] pb-4">
        <figure className="self-start mb-20">
          <img src={homelogo} alt="Home Logo" />
        </figure>

        <ul className="">
          {features.map((feat, index) => (
            <Feature
              key={index}
              index={index}
              featObj={feat}
              selected={selected}
              setIsSelected={setIsSelected}
            />
          ))}
        </ul>
        <footer className="text-xs font-normal text-gray-500 mt-[13.52rem]">
          <p>2024 © Copyright Group3 learnable23</p>
        </footer>
      </div>
    </aside>
  );
}
function Feature({ featObj, index, selected, setIsSelected }) {
  const { image, feature: featureName, path } = featObj;
  const location = useLocation();

  useEffect(() => {
    features.forEach((feat, i) => {
      if (feat.path === location.pathname) {
        setIsSelected(i);
      }
    });
  }, [location.pathname, setIsSelected]);
  return (
    <li className="flex">
      <NavLink
        to={path}
        className={`flex p-2 rounded-full cursor-pointer items-center font-bubble gap-[1.575rem]
         text-[#04031C] text-base font-normal hover:text-sky-700 w-[13.55rem] ${
           selected === index ? "bg-[#FF6A00]" : ""
         } `}
      >
        <span className="pl-3.5 text-neutral-950 ">
          <img src={image} alt={featureName} />
        </span>

        <h1 className="font-semibold ">{featureName}</h1>
      </NavLink>
    </li>
  );
}
// "flex gap-6 hover:bg-[#FF6A00] transition-all px-[1rem] py-2 rounded-full cursor-pointer"
export default AppNavbar;
