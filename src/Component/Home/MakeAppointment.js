import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
	return (
		<section
			style={{
				background: `url(${appointment})`,
			}}
		>
			<div className="conatiner flex justify-center items-center">
				<div className="flex-1 hidden lg:block">
					<img className="mt-[-100px]" src={doctor} alt="" />
				</div>
				<div className="flex-1 py-5 px-5">
					<h3 className="text-xl text-primary font-bold">Appointment</h3>
					<h2 className="text-3xl text-white py-5">
						Make an Appointment Today
					</h2>
					<p className="text-white pb-5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
						earum ab cupiditate autem accusantium expedita sequi, temporibus,
						aut illo doloribus quaerat explicabo, assumenda consectetur est vel
						ad sed maiores doloremque consequatur. Amet consequuntur quibusdam
						autem, quod maxime qui itaque quaerat.
					</p>
					<button className="bg-gradient-to-r from-secondary to-primary btn glass text-white hover:bg-secondary">
						Get Started
					</button>
				</div>
			</div>
		</section>
	);
};

export default MakeAppointment;
