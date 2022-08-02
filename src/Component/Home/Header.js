import React from "react";
import "./Header.css";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div className="header">
			<div className="container mx-auto">
				<div className="hero min-h-screen mb-10">
					<div className="hero-content flex-col lg:flex-row-reverse gap-10">
						<img
							src={chair}
							className="max-w-sm rounded-lg shadow-2xl lg:mb-0 mb-8"
							alt=""
						/>
						<div className="py-10 px-7 bg-white shadow-2xl rounded-lg">
							<h1 className="text-4xl font-bold">Enter your Symdom</h1>

							<div className="form-control">
								<label className="label mt-3">
									<span className="label-text font-medium">
										How many days are you suffering?
									</span>
								</label>
								<input
									type="text"
									placeholder="write"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label mt-3">
									<span className="label-text  font-medium">
										Write your Sysmdoms
									</span>
								</label>
								<textarea
									class="textarea textarea-bordered"
									placeholder="Write your Sysmdoms"
								></textarea>
							</div>
							<div className="form-control mt-6">
								<PrimaryButton>Enter</PrimaryButton>
							</div>

							{/* <Link to="/appointment">
								<PrimaryButton>Get Started</PrimaryButton>
							</Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
