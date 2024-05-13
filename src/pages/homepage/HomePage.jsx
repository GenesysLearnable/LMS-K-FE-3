/* eslint-disable react/prop-types */
import { features } from "../../components/helper/helperButtons";
import { Courses } from "../../components/helper/helperCourses";
import homelogo from "../../assets/homepage/homelogo.png";
import profilePicture from "../../assets/homepage/profilePicture.png";
import homeProfile from "../../assets/homepage/homeProfile.png";
import footerkids from "../../assets/homepage/footerkids.png";

// flex flex-col h-dvh items-center rounded-r-[2.5rem]absolute top-0 left-0 gap-[3.125rem]
function HomePage() {
  return (
    <main className=" flex font-quicksand">
      <aside className=" fixed top-0 left-0 flex h-screen flex-col items-center w-[22rem] bg-yellow-300  rounded-r-[2.5rem] py-7 justify-between ">
        <div className="flex flex-col items-center">
          <figure>
            <img src={homelogo} alt="Home Logo" />
          </figure>

          <ul className="mt-24">
            {features.map((feat) => (
              <Feature key={feat.feature} featObj={feat} />
            ))}
          </ul>
        </div>

        <footer className=" font-medium text-gray-600 mb-7 ">
          <small>2024 © Copyright Group3 learnable23</small>
        </footer>
      </aside>
      {/* px-[4.6875rem] pt-[0.437rem] pb-16 */}
      <section className=" px-[4.6rem] mx-auto flex-1 h-dvh overflow-y-auto ml-[22rem] max-w-[]">
        <header className="flex justify-between mt-6 mb-7">
          <figure className="cursor-pointer">
            <img src={profilePicture} alt="profilePicture" />
          </figure>
          <button className="font-bold text-lg ">Free trial</button>
        </header>
        <article className="flex flex-col items-center relative ">
          <figure className="mb-[3.75rem]">
            <img src={homeProfile} alt="homeProfile" />
          </figure>
          <p className="absolute inset-0 flex flex-col -ml-24 -mt-16 items-center justify-center font-bubble text-4xl text-center ">
            Happy learning, <br />
            <span className="text-[#FF6A00]">Amaka</span>
          </p>
          <p className="self-start font-bubble text-xl mb-[0.75rem] ">
            Your recent activities
          </p>
        </article>
        <article className=" flex justify-center gap-[1.4rem]">
          {Courses.map((course) => (
            <CourseItem key={course.courseName} courseObj={course} />
          ))}
        </article>
        <footer className="flex justify-center items-center text-[#130E5D] mt-[3.4rem]">
          <img src={footerkids} alt="" />
          <div>
            <h1 className="font-bubble text-lg">Fun fact</h1>
            <p>Do you know that a square has four sides?</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
function Feature({ featObj }) {
  const { image, feature: featureName } = featObj;
  return (
    <li className="rounded-lg w-[13.8rem]">
      <div className="flex gap-6 hover:bg-[#FF6A00] transition-all px-[1rem] py-2 rounded-full cursor-pointer">
        <img src={image} alt={featureName}></img>
        <h1 className="font-semibold">{featureName}</h1>
      </div>
    </li>
  );
}
function CourseItem({ courseObj }) {
  const { image, courseName, summary } = courseObj;
  return (
    <div className="bg-white shadow-md flex flex-col items-center text-center rounded-lg cursor-pointer px-[1.85rem] py-[2.91rem] hover:-translate-y-4 transition-all duration-300">
      <figure>
        <img src={image} alt={courseName} />
      </figure>
      <h1 className="text-3xl font-bubble text-[#130E5D] font-light">
        {courseName}
      </h1>
      <p className="text-base w-[160px] mt-[10px]">{summary}</p>
    </div>
  );
}

export default HomePage;
