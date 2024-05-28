import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // function clearField() {
  //   setEmail("");
  //   setPassword("");
  //   setConfirmPassword("");
  // }
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      try {
        const response = await PostData();

        const data = await response.json();
        console.log(data.status);
        if (data.status === "success") {
          sessionStorage.setItem("token", data.token);
          toast.success("Login successful!");
          navigate("/LearningPage");
        } else if (data.status.toLowerCase() === "fail") {
          setError(data.message);
          toast.error(data.message);
        } else {
          setError("Invalid email or password.");
          toast.error("Invalid email or password.", {
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  async function PostData() {
    try {
      const response = await fetch(
        `https://lms-k-be-3.onrender.com/api/v1/parent-signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );
      return response;
    } catch (error) {
      setError(error);
    }
  }
  return (
    <>
      <div className="flex items-center justify-center h-[1100px] w-full bg-yellow-300">
        <div className="px-[200px] py-[100px] rounded-xl bg-white">
          <div className="bg-white rounded-xl w-[676px]">
            <form action="/register" method="post" onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Email Address"
                  className="p-4 w-full font-medium text-[24px] mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="Password"
                  className="p-4 w-full font-medium text-[24px]  mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
                />
              </div>

              <Link to="/ForgotPassword">
                <p className="font-medium text-right text-2xl text-[#130E5D]">
                  Forgot password
                </p>
              </Link>

              <button
                type="submit"
                className="w-full h-[78px] mt-20 px-4 py-2 text-[32px] bg-[#FFD012] text-[#04031C] font-bold py-2 px-4 mb-2 rounded-xl"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
