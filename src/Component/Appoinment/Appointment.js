import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
	const [date, setDate] = useState(new Date());
	return (
		<div>
			<AppointmentBanner dateset={date} setNewDate={setDate} />
			<AvailableAppointments dateset={date} setNewDate={setDate} />
		</div>
	);
};

export default Appointment;
