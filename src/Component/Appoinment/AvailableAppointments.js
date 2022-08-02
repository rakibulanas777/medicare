import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ dateset }) => {
	const [services, setServices] = useState([]);
	const [treatment, setTreatment] = useState(null);

	useEffect(() => {
		fetch("http://localhost:5000/appointment")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	console.log(treatment);
	return (
		<div className="availableAppoinments">
			<div className="container mx-auto">
				<div className="text-xl text-primary mt-14 mb-14 font-bold text-center">
					Available Services on April 30, 2022
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-14">
					{services.map((service) => (
						<Service
							key={service._id}
							service={service}
							setTreatment={setTreatment}
						></Service>
					))}
				</div>
				{treatment && (
					<BookingModal
						date={dateset}
						treatment={treatment}
						setTreatment={setTreatment}
					></BookingModal>
				)}
			</div>
		</div>
	);
};

export default AvailableAppointments;
