import React, { useState } from "react";
import axios from "axios";
// { Link, useHistory } from "react-router-dom";
import { getToken } from "../sign_up/auth.jsx";

function ChildsName() {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleInputChange = (e) => {
    setName(e.tarhet.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();

    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/submit-name",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      history.push("/childsAge");
    } catch (error) {
      console.error("Error submitting name:", error);
    }
  };

//   I'm sorry for being this late, light issues... this is what i have at JSP. Pleease help me fix themm..

  return (
    <div className="bg-[#ffd166] w-screen h-screen bg-fixed flex justify-center items-center">
      <div className="bg-white w-[1073px] h-[500px] rounded-lg">
        <div className="text-center">
          <p className="mt-9 text-5xl text-[#130E5D] font-bubble">
            What's your child's name
          </p>
          <p className="mt-8 text-[#130E5D] text-lg">
            They 'll learn how to write it themselves
          </p>
          <form>
            <input
              type="text "
              name="name"
              placeholder="Name"
              className="w-[676px] h-[78px] border border-solid border-black bg-yellow-100 mt-7 h-9 rounded-lg "
            />
          </form>
          <p className="text-lg text-[#130E5D] mt-14 ">
            By continuing, you agree to our{" "}
            <span className="font-bold">Terms</span> and{" "}
            <span className="font-bold">Privacy Policy</span>
          </p>
          <Link to="/ChildsAge">
            <button className="w-[676px] h-[78px] text-[32px] bg-yellow-500 font-bold mt-7 rounded-lg">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChildsName;
