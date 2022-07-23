import React from "react";
import "./Header.css";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="header">
			<div className="container mx-auto">
				<div className="hero min-h-screen">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<img
							src={chair}
							className="max-w-sm rounded-lg shadow-2xl lg:mb-0 mb-8"
							alt=""
						/>
						<div>
							<h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
							<Link to="/appointment">
								<PrimaryButton>Get Started</PrimaryButton>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
