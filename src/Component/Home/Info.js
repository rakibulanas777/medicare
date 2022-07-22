import React from "react";
import clock from "../../assets/icons/clock.svg";
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/marker.svg";
const Info = () => {
	return (
		<div className="info">
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto  gap-5 -m-5">
					<div className="p-2  text-white w-full">
						<div className="h-full flex items-center bg-gradient-to-r from-secondary to-primary  p-4 rounded-lg">
							<img
								alt="team"
								className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-5"
								src={clock}
							/>
							<div className="flex-grow">
								<h2 className="text-white title-font font-medium">
									Opening Hours
								</h2>
								<p className="text-white">UI Designer</p>
							</div>
						</div>
					</div>
					<div className="p-2  text-white w-full">
						<div className="h-full flex items-center bg-accent  p-4 rounded-lg">
							<img
								alt="team"
								className="object-cover object-center flex-shrink-0 rounded-full mr-5"
								src={location}
							/>
							<div className="flex-grow">
								<h2 className="text-white title-font font-medium">
									Visit our location
								</h2>
								<p className="text-white">Brooklyn, NY 10036</p>
							</div>
						</div>
					</div>
					<div className="p-2  text-white w-full">
						<div className="h-full flex items-center bg-gradient-to-r from-primary to-secondary  p-4 rounded-lg">
							<img
								alt="team"
								className=" object-cover object-center flex-shrink-0 rounded-full mr-5"
								src={phone}
							/>
							<div className="flex-grow">
								<h2 className="text-white title-font font-medium">
									Contact us now
								</h2>
								<p className="text-white">+000 123 456789</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
