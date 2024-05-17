/* eslint-disable react/prop-types */
// import { features } from "../../assets/homepage/helper/helperButtons";
import { Courses } from "../../assets/homepage/helper/helperCourses";

// import homelogo from "../../assets/homepage/images/homelogo.png";

// import homeProfile from "../../assets/homepage/images/homeProfile.png";
import footerkids from "../../assets/homepage/images/footerkids.png";
import HeaderNav from "../HeaderNav";
import { Link } from "react-router-dom";
import HomeProfile from "./HomeProfile";

// flex flex-col h-dvh items-center rounded-r-[2.5rem]absolute top-0 left-0 gap-[3.125rem]ml-[22rem]
function HomePage() {
  return (
    <main className="">
      <HeaderNav />
      <HomeProfile />
      <p className="self-start font-bubble text-xl mb-[0.75rem] px-[50px]">
        Your recent activities
      </p>
      <ul className="flex justify-center gap-6">
        {Courses.map((course) => (
          <CourseItem key={course.courseName} courseObj={course} />
        ))}
      </ul>
      <footer className="flex justify-center items-center text-[#130E5D] mt-[3.4rem]">
        <img src={footerkids} alt="" />
        <div>
          <h1 className="font-bubble text-lg">Fun fact</h1>
          <p>Do you know that a square has four sides?</p>
        </div>
      </footer>
    </main>
  );
}

function CourseItem({ courseObj }) {
  const { image, courseName, summary } = courseObj;
  return (
    <Link className=" bg-white shadow-md flex flex-col items-center text-center rounded-lg md:pb-[2.88rem] md:px-[2.81rem] cursor-pointer hover:-translate-y-4 transition-all duration-300 ">
      <figure>
        <img src={image} alt={courseName} />
      </figure>
      <h1 className="text-3xl font-bubble text-[#130E5D] font-light">
        {courseName}
      </h1>
      <p className="text-base w-[160px] mt-[10px]">{summary}</p>
    </Link>
  );
}

export default HomePage;

// flex justify-center gap-[1.4rem]
