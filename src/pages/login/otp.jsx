import React, { useState, useRef } from 'react';

function Otp() {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [otpString, setOtpString] = useState("");
    const [message, setMessage] = useState("");
    const inputs = useRef([]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        let newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
        setOtpString(newOtp.join(""));

        // Focus on next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleStringChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 6) {
            setOtpString(value);
            setOtp([...value.padEnd(6, "").split("")]);
            if (value.length <= 6) {
                value.split("").forEach((digit, idx) => {
                    if (inputs.current[idx]) {
                        inputs.current[idx].value = digit;
                    }
                });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpValue = otpString;
        try {
            const response = await fetch(`https://lms-k-be-3.onrender.com/api/v1/validate-token?otp=${otpValue}`, {
                method: 'GET',
            });
            if (response.ok) {
                // Handle successful response
                setMessage("OTP verified successfully!");
            } else {
                // Handle error response
                setMessage("Failed to verify OTP. Please try again.");
            }
        } catch (error) {
            
            setMessage("Network error. Please try again.");
        }
    };

    const handleResendOtp = async () => {
        try {
            const response = await fetch('', {
                method: 'POST',
            });
            if (response.ok) {
                // Handle successful response
                setMessage("OTP resent successfully!");
            } else {
                // Handle error response
                setMessage("Failed to resend OTP. Please try again.");
            }
        } catch (error) {
            // Handle network error
            setMessage("Network error. Please try again.");
        }
    };

    return (
        <>
            <div>
                <header className="bg-[#FFE060] h-[20vh] z-[-5] fixed w-full "></header>
                <div className="w-full bg-transparent flex justify-center">
                    <div className="p-10 text-center space-y-10 border-[#FFD012] border-2 rounded-3xl w-[60vw] bg-white  text-[#130E5D] h-fit mt-16 ">
                        <div className="w-full flex justify-center">
                            <div className="justify-center items-center border-4 p-4 text-6xl size-24 border-[#FFD012] text-[#FFD012] rounded-full ">
                                !
                            </div>
                        </div>
                        <h1 className="text-[2rem] font-bold">
                            Reset Password
                        </h1>
                        <p className="text-[1.5rem] font-medium">
                            Enter the six digit OTP sent to your mail
                        </p>
                        <div className="flex justify-center space-x-2">
                            {otp.map((data, index) => {
                                return (
                                    <input
                                        className="w-12 h-12 text-center text-2xl border border-gray-300 rounded"
                                        type="text"
                                        name="otp"
                                        maxLength="1"
                                        key={index}
                                        value={data}
                                        onChange={e => handleChange(e.target, index)}
                                        onFocus={e => e.target.select()}
                                        ref={el => inputs.current[index] = el}
                                    />
                                );
                            })}
                        </div>
                        <div className="mt-4">
                            <input
                                className="w-full text-center text-2xl border border-gray-300 rounded p-2"
                                type="text"
                                name="otpString"
                                value={otpString}
                                onChange={handleStringChange}
                                maxLength="6"
                                placeholder="Enter OTP"
                            />
                        </div>
                        <p className="text-[1.2rem] mt-4">
                            You did not receive any code? <button onClick={handleResendOtp} className="text-blue-600">Resend OTP</button>
                        </p>
                        <button
                            type='submit'
                            className="bg-[#130E5D] text-white p-2 rounded-xl w-full h-[78px] px-4 py-2 text-[1.5rem] font-bold mb-2"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        {message && <p className="mt-4 text-red-500">{message}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Otp;
