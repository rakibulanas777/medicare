import Navbar from "./Component/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About";
import Appointment from "./Component/Appointment";
import Reviews from "./Component/Reviews";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
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
			</Routes>
		</div>
	);
}

export default App;
