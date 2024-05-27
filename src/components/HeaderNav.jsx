import profilePicture from ".././assets/homepage/profilePicture.png";
import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    // flex justify-between mb-6 items-center py-1 px-[50px] sticky top-0 left-0 right-0 drop-shadow-lg z-10 bg-white/85
    <header className="flex mx-auto justify-between items-center py-1 px-[50px] sticky left-0 right-0 top-0 drop-shadow-lg z-10 bg-white/85">
      <Link to="/ProfilePage" className="cursor-pointer ">
        <img src={profilePicture} alt="profilePicture" />
      </Link>
      <Link to="/PaymentPage" className="font-bold text-lg ">
        Free trial
      </Link>
    </header>
  );
}

export default HeaderNav;

// sticky top-0 flex justify-between py-2 px-[50px] items-center
