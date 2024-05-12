import React from "react";

export default function Login() {
	const navigate = useNavigate();

	return (
		<>
			<div className="flex items-center justify-center h-[1100px] w-full bg-yellow-300">
				<div className="px-[200px] py-[100px] rounded-xl bg-white">
					<div className="bg-white rounded-xl w-[676px]">
						<form action="/register" method="post">
							<div className="mb-2">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Email Address"
									className="p-4 w-full font-medium text-[24px] p-2 mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
								/>
							</div>
							<div className="mb-2">
								<input
									type="password"
									id="password"
									name="password"
									placeholder="Password"
									className="p-4 w-full font-medium text-[24px] p-2 mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
								/>
							</div>

							<p className="font-medium text-right text-2xl text-[#130E5D]">
								Forgot password
							</p>

							<button
								type="submit"
								className="w-full h-[78px] mt-20 px-4 py-2 text-[32px] bg-[#FFD012] text-[#04031C] font-bold py-2 px-4 mb-2 rounded-xl"
							>
								Continue
							</button>
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
