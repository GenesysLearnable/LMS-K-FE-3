// import '../components/amaka.css'
import "../sign_up/ChildsAge.css";
import { Link } from "react-router-dom";

function Age() {
    return (
        <div className="age-body">
            <div className="age-sub">
                <div className="tex-col">
                    <h3>
                        <span className="age-text">How old is Amaka?</span>
                    </h3>
                    <h4>we'll personalise the experemce for this age</h4>

                    <div className="radio-group">
                        <label>
                            <input type="radio" value="age" name="how old" />
                            <span>5-8 years</span>
                        </label>
                        <br />
                        <label>
                            <input type="radio" value="age" name="how old" />
                            <span>9-12 years</span>
                        </label>

                        <Link to="/Login">
                            <button>Submit</button>
                        </Link>
                        <div className="age-btn">
                            <button className="BackBtn">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Age;
