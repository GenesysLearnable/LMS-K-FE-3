import React from "react";
import footerlogo from "../../assets/footerlogo.svg";

export default function footer() {
	return (
		<>
			<footer>
				<div className="h-[320px] pb-0">
					<div className="custom-shape-divider-bottom-1715286013">
						<svg
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
								className="shape-fill"
							></path>
						</svg>
					</div>
					<div className="text-center text-white bg-[#130E5D] h-full">
						<p className="font-bold text-5xl pt-8">Contact Us</p>
						<p className="text-base font-bold mt-5">
							Reach out at learnablekids-feedback@learnable.com
						</p>
						<div className="flex justify-center items-center mt-5 mb-10">
							<div className="flex gap-x-5">
								<a href="">1</a>
								<a href="">2</a>
								<a href="">3</a>
								<a href="">4</a>
								<a href="">5</a>
							</div>
						</div>
						<div className="flex gap-x-20 justify-center items-center">
							<div className="flex font-bold gap-x-5 mt-5">
								<a href="">About</a>
								<a href="">Careers</a>
								<a href="">Apps</a>
								<a href="">Help</a>
								<a href="">Terms</a>
								<a href="">Privacy</a>
							</div>
							<img src={footerlogo} alt="learnable kids logo" />
						</div>
						<div>
							<p>2024 © Copyright Group 3 learnable23</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
