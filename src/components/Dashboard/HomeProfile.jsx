import homeProfile from "../../assets/homepage/images/homeProfile.png";

function HomeProfile() {
  return (
    <div className=" flex flex-col items-center relative mt-20 px-[50px] max-w-8xl mx-auto">
      <figure className="mb-[1.375rem]">
        <img src={homeProfile} alt="homeProfile" />
      </figure>
      <p className="absolute inset-0 flex flex-col -ml-24 -mt-15 items-center justify-center font-bubble text-4xl text-center ">
        Happy learning, <br />
        <span className="text-[#FF6A00]">Amaka</span>
      </p>
    </div>
  );
}

export default HomeProfile;
