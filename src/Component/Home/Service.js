import React from "react";
import cavity from "../../assets/images/cavity.png";
import img2 from "../../assets/images/fluoride.png";
import img3 from "../../assets/images/whitening.png";
const Service = () => {
	return (
		<div className="service py-14">
			<div className="container mx-auto">
				<div className="service_title text-sm font-medium text-secondary text-center">
					OUR SERVICES
				</div>
				<div className="text-2xl font-medium text-accent text-center mb-10">
					Services We Provide
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
					<div className="bg-base-100 py-4 text-center shadow-md rounded-md">
						<img src={cavity} alt="Shoes" className="rounded-xl mx-auto mt-3" />
						<div className="card-body items-center text-center">
							<h2 className="card-title text-accent">Fluoride Treatment</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</div>
					</div>
					<div className="bg-base-100 py-4 text-center shadow-md rounded-md">
						<img src={img2} alt="Shoes" className="rounded-xl mx-auto mt-3" />
						<div className="card-body items-center text-center">
							<h2 className="card-title text-accent">Fluoride Treatment</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</div>
					</div>
					<div className="bg-base-100 py-4 text-center rounded-md shadow-md">
						<img src={img3} alt="Shoes" className="rounded-xl mx-auto mt-3" />
						<div className="card-body items-center text-center">
							<h2 className="card-title text-accent">Fluoride Treatment</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
