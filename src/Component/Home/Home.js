import React from "react";
import Catagory from "./Catagory";
import Contact from "./Contact";
import Dentalcare from "./Dentalcare";
import Docters from "./Docters";
import Header from "./Header";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Service from "./Service";
import Testimonials from "./Testimonials";

const Home = () => {
	return (
		<div>
			<Header />
			<Info />
			<Catagory />
			<Docters />
			<Service />

			<Dentalcare />
			<MakeAppointment />
			<Testimonials />
			<Contact />
		</div>
	);
};

export default Home;
