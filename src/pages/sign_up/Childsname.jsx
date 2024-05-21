import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";

function ChildsName() {
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await axios.post('https://lms-k-be-3.onrender.com/api/v1/children', { name });
            if (response.status === 200) {
                setSuccessMessage('Name Saved');
                setTimeout(() => {
                    navigate('/ChildsAge');
                }, 2000);
            } else {
                setErrorMessage('Failed to save name');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again');
        }
    };

    return (
        <div className="bg-[#ffd166] w-screen h-screen bg-fixed flex justify-center items-center">
            <div className="bg-white w-[1073px] h-[500px] rounded-lg">
                <div className="text-center">
                    <p className="mt-9 text-5xl text-[#130E5D] font-bubble">
                        What's your child's name
                    </p>
                    <p className="mt-8 text-[#130E5D] text-lg">
                        They'll learn how to write it themselves
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-[676px] h-[78px] border border-solid border-black bg-yellow-100 mt-7 rounded-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button type="submit" className="w-[676px] h-[78px] text-[32px] bg-yellow-500 font-bold mt-7 rounded-lg">
                            Continue
                        </button>
                    </form>
                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                    <p className="text-lg text-[#130E5D] mt-14">
                        By continuing, you agree to our{" "}
                        <span className="font-bold">Terms</span> and{" "}
                        <span className="font-bold">Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChildsName;
