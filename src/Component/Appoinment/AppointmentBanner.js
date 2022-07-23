import React, { useState } from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import { format } from "date-fns";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./AppoinmentBanner.css";
const AppointmentBanner = ({ dateset, setNewDate }) => {
	return (
		<div className="appoinmentBanner">
			<div className="container mx-auto">
				<div className="hero min-h-screen">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<img
							src={chair}
							className="max-w-sm rounded-lg shadow-2xl lg:mb-0 mb-8"
							alt=""
						/>
						<div className="flex-center">
							<DayPicker
								mode="single"
								selected={dateset}
								onSelect={setNewDate}
							/>
							<p className="text-xl text-accent">
								Your selected Date : {format(dateset, "PP")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentBanner;
