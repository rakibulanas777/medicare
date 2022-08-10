import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Docters = () => {
	const [doctors, setDoctor] = useState([]);
	useEffect(() => {
		fetch("../../../doctor.json")
			.then((res) => res.json())
			.then((data) => setDoctor(data));
	}, []);
	return (
		<div className="docter">
			<div className="container mx-auto w-11/12">
				<div className="text-2xl font-medium text-accent text-center mb-10">
					Online active Doctors
				</div>
				<div className="grid grid-cols-5 gap-8">
					{doctors.map((doctor) => (
						<div class="card bg-base-100 py-5 shadow-md">
							<img src={doctor.photo} className="h-52 w-full" alt="Shoes" />
							<div className="text-center text-xl text-secondary mb-5 -mt-4">
								{doctor.name}
							</div>
							<div className="text-center  text-secondary mb-2 -mt-4">
								{doctor.catagory}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Docters;
