import Navbar from "./Component/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Appointment from "./Component/Appoinment/Appointment";
import Reviews from "./Component/Reviews";
import Contact from "./Component/Contact";
import Login from "./Component/LogIn/Login";
import "./App.css";
import Footer from "./Component/Shared/Footer";
import Register from "./Component/Register/Register";
function App() {
	return (
		<div className="App" data-theme="mytheme">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/appointment" element={<Appointment />} />
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
