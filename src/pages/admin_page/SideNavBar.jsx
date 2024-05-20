import { Link } from "react-router-dom";
import { useState } from "react";
import home from "../../assets/homepage/home.svg";
import learning from "../../assets/homepage/learning.svg";
import settings from "../../assets/homepage/settings.svg";
import payment from "../../assets/homepage/payment.svg";
import feedback from "../../assets/homepage/feedback.svg";
import logout from "../../assets/homepage/logout.svg";
import logo from "../../assets/homepage/homelogo.svg";

export default function SideNavBar() {
	const [activePage, setActivePage] = useState("Dashboard"); // State for active page

	const handleClick = (page) => {
		setActivePage(page);
	};

	return (
		<>
			<div
				id="sidenav"
				className="fixed rounded-xl z-40 bg-yellow-300 w-[352px] h-screen shadow-md transition duration-300 ease-in-out"
			>
				<div className="flex justify-center w-[245px] mt-5 mb-[70px]">
					<Link to="#" className="text-xl font-bold">
						<img src={logo} alt="Learnable kids logo" />
					</Link>
				</div>
				<nav className="w-[226px] m-auto text-black font-bubble space-y-1">
					<Link
						to="/Dashboard"
						className="flex items-center space-x-6 text-xl hover:bg-[#FF6A00] rounded-full px-[14px] py-[6px]"
						onClick={() => handleClick("Dashboard")}
					>
						<img src={home} alt="home icon" />
						<p className="pt-1">Dashboard</p>
					</Link>
					<Link
						to="/Course"
						className="flex items-center space-x-6 text-xl hover:bg-[#FF6A00] rounded-full px-[14px] py-[6px]"
						onClick={() => handleClick("Course")}
					>
						<img src={learning} alt="home icon" />
						<p className="pt-1">Course</p>
					</Link>
					<Link
						to="#"
						className="flex items-center space-x-6 text-xl hover:bg-[#FF6A00] rounded-full px-[14px] py-[6px]"
					>
						<img src={payment} alt="home icon" />
						<p className="pt-1">Manage Subscribers</p>
					</Link>
					<Link
						to="#"
						className="flex items-center space-x-6 text-xl hover:bg-[#FF6A00] rounded-full px-[14px] py-[6px]"
					>
						<img src={payment} alt="home icon" />
						<p className="pt-1">Manage Rewards</p>
					</Link>
					<Link
						to="#"
						className="flex items-center space-x-6 text-xl hover:bg-[#FF6A00] rounded-full px-[14px] py-[6px]"
					>
						<img src={feedback} alt="home icon" />
						<p className="pt-1">Feedback</p>
					</Link>
					<Link
						to="#"
						className="flex items-center space-x-6 text-xl hover:bg-[#FF6A00] rounded-full px-[14px] py-[6px]"
					>
						<img src={settings} alt="home icon" />
						<p className="pt-1">Settings</p>
					</Link>
					<Link
						to="#"
						className="flex items-center space-x-6 text-xl hover:bg-[#FF6A00] rounded-full px-[14px] py-[6px]"
					>
						<img src={logout} alt="home icon" />
						<p className="pt-1">Logout</p>
					</Link>
				</nav>
				<div className="flex justify-center mt-48">
					<p className="text-gray">
						2024 © Copyright Group3 learnable23
					</p>
				</div>
			</div>
		</>
	);
}
