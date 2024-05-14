/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function signup_form() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
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

		if (password !== confirmPassword) {
			setError("Passwords do not match");
		} else if (!email || !password || !confirmPassword) {
			setError("Please fill in all fields");
		} else if (password.length < 6) {
			setError("Password must be at least 6 characters");
		} else {
			try {
				const response = await PostData();

				const data = await response.json();
				if (data.status === "Success") {
					toast.success(
						"Sign up was successful",
						navigate("/Congrat"),
					);
				} else if (data.status === "fail") {
					toast.error(data.message);
					setError(data.message);
				} else {
					throw new Error(data.message);
				}
			} catch (error) {
				setError(error.message);
			}
		}
	};

	async function PostData() {
		try {
			const response = await fetch(
				`https://lms-kids.onrender.com/api/v1/parent-signup`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email,
						password,
						confirm_password: confirmPassword,
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
						<form
							action="/register"
							method="post"
							onSubmit={handleSubmit}
						>
							<div className="mb-2">
								<input
									type="email"
									id="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email Address"
									className="p-4 w-full font-medium text-[24px] mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
								/>
							</div>
							<div className="mb-2">
								<input
									type="password"
									id="password"
									name="password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									placeholder="Password"
									className="p-4 w-full font-medium text-[24px] mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
								/>
							</div>
							<div className="mb-10">
								<input
									type="password"
									id="retype_password"
									name="password"
									value={confirmPassword}
									onChange={(e) =>
										setConfirmPassword(e.target.value)
									}
									placeholder="Retype Password"
									className="p-4 w-full font-medium text-[24px] mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
								/>
							</div>
							<ToastContainer />
							{error && <ErrorMessage message={error} />}
							<button
								type="submit"
								className="w-full h-[78px] text-[32px] bg-[#FFD012] text-[#04031C] font-bold py-4 px-4 mb-2 rounded-xl"
							>
								Continue
							</button>
							<a
								href="#"
								className="text-2xl font-bold no-underline text-[#130E5D] ml-2"
							>
								<button
									onClick={() => navigate(-1)}
									type="button"
									className="mt-5 text-[#04031C] bg-white border-2 border-[#04031C] font-bold rounded-md text-xl p-2 me-5"
								>
									Back
								</button>
							</a>
						</form>
						<div className="flex items-center justify-center mb-7">
							<div className="border-[2px] border-[#130E5D]"></div>
							<p className="text-[32px] font-medium">or</p>
							<div className="border-[2px] border-[#130E5D]"></div>
						</div>
						<div className="border-dashed border-2 rounded-xl border-[#1877F2] p-5">
							<button className="w-full h-[78px] mb-5 rounded-xl bg-white border-2 border-[#292D32] font-medium text-[24px] text-[#010A1A]">
								Continue with Google
							</button>
							<button className="w-full h-[78px] rounded-xl bg-white border-2 border-[#292D32] font-medium text-[24px] text-[#010A1A]">
								Continue with Facebook
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function ErrorMessage({ message }) {
	return (
		<p className="text-red-500 text-2xl font-medium italic mb-4">
			{message}
		</p>
	);
}
