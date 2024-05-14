import "./Hiparent.css";
import wave from "../../assets/wave.png";
import { Link } from "react-router-dom";

function Hiparent() {
    return (
        <div className="hiparent-body">
            <div className="hiparent-sub">
                <div className="text-col items-center">
                    <div className="flex justify-center mt-10">
                        <h3 className="hiparent-text">Hi Parent</h3>
                        <div className="ml-5">
                            <img src={wave} />
                        </div>
                    </div>

                    <div className="text-center">
                        <h4>Sign up with your account</h4>
                        <p>
                            Sign up with your own account to set up a profile
                            and get more parental controls.
                            <br /> If you don't want to sign in, you can skip
                            this step.
                        </p>
                    </div>
                    <div className="flex justify-between mt-5 me-32 ml-32">
                        <Link
                            to="/"
                            className="text-2xl font-bold no-underline text-[#130E5D] ml-2"
                        >
                            <button
                                type="button"
                                className="text-[#04031C] bg-white border-2 border-[#04031C] font-bold rounded-md text-xl p-2 me-5"
                            >
                                Back
                            </button>
                        </Link>
                        <Link
                            to="/Notice"
                            className="text-2xl font-bold no-underline text-[#130E5D]"
                        >
                            <button
                                type="button"
                                className="text-[#04031C] font-bold rounded-md text-xl p-2 me-5 bg-yellow-400"
                            >
                                Sign Up
                            </button>
                        </Link>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hiparent;
