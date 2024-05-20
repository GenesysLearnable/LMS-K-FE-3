import { Link } from "react-router-dom";
import { useState } from "react";
//import axios from  'axios'

export default function ForgotPassword() {

const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [errormessage , setErrorMessage] = useState('');

const handleSubmit= async (e) => {
	e.preventDefault()
	setErrorMessage('')
	setMessage ('');

	try {
		const response = await axios.post( 'https://lms-k-be-3.onrender.com/api/v1/forgot-password',{email})
		if (response.status === 200){
			setMessage('Reset email sent successfully!');
		}
	}
		catch (error){
			setErrorMessage('Invalid Email or does not exist!!')
		}
		
	}





	return (
		<>
			<div>
				<header className="bg-[#FFE060] h-[20vh] z-[-5] fixed w-full "></header>
				<div className="w-full bg-transparent flex justify-center">
					<div className="p-10 text-center space-y-10 border-[#FFD012] border-2 rounded-3xl w-[60vw] bg-white  text-[#130E5D] h-fit mt-16 ">
						<div className="w-full flex justify-center">
							<div className=" justify-center items-center border-4 p-4 text-6xl size-24 border-[#FFD012] text-[#FFD012] rounded-full ">
								!
							</div>
						</div>
						<h1 className="text-[2rem] font-bold">
							Forgot Password
						</h1>
						<p className="text-[1.5] font-medium">
							Enter your email and we will send you an OTP to
							reset your password.
						</p>
						<form action="" method="post" className="" onSubmit={handleSubmit}>
							<input
								type="email"
								name="email"
								placeholder="Email Address"
								id="user-email"
								className="p-4 w-full font-medium text-[1.5rem] mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>

							<button type='submit' className="bg-[#130E5D] text-white p-2 rounded-xl w-full h-[78px] px-4 py-2 text-[1.5rem] font-bold mb-2">
								Submit
							</button>
						</form>
					</div>
				</div>
				{message && <p className="text-green-400">{message}</p>}
				{errormessage && <p className="text-red-700">{errormessage}</p>}
			</div>
		</>
	);
}
