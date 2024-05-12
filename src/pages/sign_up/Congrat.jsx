/* eslint-disable react-hooks/rules-of-hooks */
import { Navigate } from "react-router-dom";
import "../sign_up/Congrat.css";
// import cheers from "../components/image/Festive flags and hands with decorations.png";

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
          <img src="" className="cheers-image" />

          <button
            className="BackBtn-2"
            onClick={() => <Navigate to="/Login" replace={true} />}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
export default Congrat;
