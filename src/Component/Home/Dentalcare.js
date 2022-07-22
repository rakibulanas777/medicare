import React from "react";
import dental from "../../assets/images/treatment.png";
const Dentalcare = () => {
	return (
		<div className="py-14">
			<div className="container mx-auto">
				<div className="hero min-h-screen">
					<div className="hero-content flex-col lg:flex-row">
						<img
							src={dental}
							className=" md:w-96 sm:w-11/12 rounded-lg shadow-2xl lg:mb-0 mb-8"
						/>
						<div className="lg:ml-10">
							<h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
							<button className="bg-gradient-to-r from-secondary to-primary btn glass text-white hover:bg-secondary">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dentalcare;
