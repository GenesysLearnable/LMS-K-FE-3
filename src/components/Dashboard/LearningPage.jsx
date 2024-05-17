/* eslint-disable react/prop-types */
import { Link, Outlet, useLocation } from "react-router-dom";
import { Learning } from "../../assets/homepage/helper/helperLearning";
import HeaderNav from "../HeaderNav";
import HomeProfile from "./HomeProfile";
import { useEffect, useState } from "react";

function LearningPage() {
  return (
    <>
      <HeaderNav />
      <HomeProfile />
      <h1> Learning </h1>
      <div className="flex justify-center gap-24 mt-[4.36rem]">
        {Learning.map((learn, index) => (
          <LearningItem key={learn.courseName} learn={learn} index={index} />
        ))}
      </div>
      <Outlet />
    </>
  );
}
function LearningItem({ learn, index }) {
  const { image, courseName, path } = learn;
  const [selected, setIsSelected] = useState(null);

  const location = useLocation();

  useEffect(() => {
    Learning.forEach((feat, i) => {
      if (feat.path === location.pathname) {
        setIsSelected(i);
      }
    });
  }, [location.pathname, setIsSelected]);

  return (
    <Link className="text-center " to={path}>
      <span>
        <img
          className={` drop-shadow-lg p-4 rounded-full transition-colors duration-300 ease-in-out ${
            selected === index ? "bg-[#FFBA8A]" : " bg-white"
          } `}
          src={image}
          alt={courseName}
        />
      </span>
      <h1
        className={`font-bubble text-xl text-[#130E5D] mt-[0.5rem] px-6 rounded-full ${
          selected === index ? "bg-[#FFBA8A] " : ""
        }`}
      >
        {learn.courseName}
      </h1>
    </Link>
  );
}
export default LearningPage;
