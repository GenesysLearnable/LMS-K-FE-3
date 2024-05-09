import React from "react";
import kids_1 from "../assets/kids_1.png";
import kids_2 from "../assets/kids_2.png";
import kids_3 from "../assets/kids_3.png";
import kids_4 from "../assets/kids_4.png";
import logo from "../assets/logo.png";
import phonics from "../assets/phonics.png";
import reasoning from "../assets/reasoning.png";
import math from "../assets/math.png";
import vocabulary from "../assets/vocabulary.png";

export default function MainSection() {
	return (
		<>
			<main>
				<section className="curve">
					<div className="custom-shape-divider-top-1715259054">
						<svg
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
								className="shape-fill"
							></path>
						</svg>
					</div>
					<div className="mt-10 flex flex-col items-center justify-center">
						<div className="flex gap-x-28 w-[1034px]">
							<div className="space-y-5">
								<p className="text-5xl font-bold text-[#130E5D]">
									Learning can be hard <br /> we make it{" "}
									<span className="text-[#FF6A00]">fun!</span>
								</p>
								<p className="text-base text-[#04031C]">
									Engage children in learning mapped to
									approved <br /> school curriculum with
									visually rich and interactive <br /> content
								</p>
								<div className="flex flex-col items-center justify-center">
									<button
										type="button"
										className="text-xl text-white bg-white bg-[#130E5D] rounded-md p-3"
									>
										Get started
									</button>
								</div>
							</div>
							<div>
								<img src={kids_1} alt="" />
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="flex flex-col items-center justify-center">
						<div className="flex gap-x-28 h-screen items-center w-[1034px]">
							<div>
								<img src={kids_2} alt="" />
							</div>
							<div className="space-y-5">
								<h1 className="text-5xl font-bold text-[#130E5D]">
									Learning to read through <br />{" "}
									<span className="text-[#FF6A00]">play</span>
								</h1>
								<p className="text-base text-[#04031C]">
									A comprehensive phonics curriculum that
									feels like a game
								</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="flex flex-col items-center justify-center">
						<div className="flex gap-x-28 h-screen items-center w-[1034px]">
							<div className="space-y-5">
								<h1 className="text-5xl font-bold text-[#130E5D]">
									Solve problems through <br />{" "}
									<span className="text-[#FF6A00]">
										games
									</span>
								</h1>
								<p className="text-base text-[#04031C]">
									Fun character-driven exercises that help
									kids experience the joy of learning.
								</p>
							</div>
							<div>
								<img src={kids_3} alt="" />
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="flex justify-center">
						<div className="flex flex-col items-center justify-center w-[1034px]">
							<div className="space-y-5 text-center">
								<h1 className="text-5xl font-bold text-[#130E5D]">
									What will kids learn
								</h1>
								<p className="text-base text-[#04031C]">
									Our curriculum is based on recommendations
									by the National Education Board
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="flex justify-center">
					<div className="flex justify-center gap-x-10 w-[1034px]">
						<div className="text-center shadow-lg py-10 rounded-xl my-10 flex flex-col items-center w-1/4">
							<img src={phonics} alt="" />
							<div>
								<h1 className="text-[45px] font-bold text-[#130E5D]">
									Phonics
								</h1>
								<p className="text-[#04031C]">
									Learn letter sounds <br /> and decoding with{" "}
									<br /> bite-sized lessons
								</p>
							</div>
						</div>

						<div className="text-center shadow-lg py-10 rounded-xl my-10 flex flex-col items-center w-1/4">
							<img src={math} alt="" />
							<div>
								<h1 className="text-[45px] font-bold text-[#130E5D]">
									Math
								</h1>
								<p className="text-[#04031C]">
									Learn problem <br /> solving techniques to{" "}
									<br /> approach common <br /> tricky math
									problems
								</p>
							</div>
						</div>

						<div className="text-center shadow-lg py-10 rounded-xl my-10 flex flex-col items-center w-1/4">
							<img src={vocabulary} alt="" />
							<div>
								<h1 className="text-[45px] font-bold text-[#130E5D]">
									Vocabulary
								</h1>
								<p className="text-[#04031C]">
									Build reading <br /> comprehension and{" "}
									<br /> word knowledge
								</p>
							</div>
						</div>

						<div className="text-center shadow-lg py-10 rounded-xl my-10 flex flex-col items-center w-1/4">
							<img src={reasoning} alt="" />
							<div>
								<h1 className="text-[45px] font-bold text-[#130E5D]">
									Reasoning
								</h1>
								<p className="text-[#04031C]">
									Build ability to <br /> tackle basic <br />{" "}
									quantitative problems
								</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="flex flex-col items-center justify-center">
						<div className="flex gap-x-28 items-center w-[1034px]">
							<div className="space-y-5">
								<h1 className="text-5xl font-bold text-[#130E5D]">
									We have a
									<span className="text-[#FF6A00]">
										{" "}
										vision
									</span>
								</h1>
								<p className="text-[#04031C]">
									Learnable kids aims to make learning with
									fun educational games, activities and
									quizzes.
								</p>
							</div>
							<div>
								<img src={kids_4} alt="" />
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
