/* eslint-disable react-hooks/rules-of-hooks */
import { Navigate, Link } from "react-router-dom";
import confetti from "../../assets/confetti.png";
import "../sign_up/Congrat.css";

function Congrat() {
  return (
    <div className="congrat-body">
      <div className="congrat-sub">
        <div className="text-col-2">
          <h3>
            {" "}
            <span className="congrat-text">
              {" "}
              Your account has been created Successfully
            </span>
          </h3>
          <img src={confetti} />
          <Link to="/Login">
            <button className="w-[600px] h-[78px] text-[32px] bg-[#FFD012] text-[#04031C] font-bold py-4 px-4 mb-2 rounded-xl">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Congrat;
