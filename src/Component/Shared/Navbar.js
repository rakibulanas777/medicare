import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import auth from "./firebaseinit";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const [user, loading, error] = useAuthState(auth);
	const logout = () => {
		signOut(auth);
	};
	return (
		<div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
			<div className="container mx-auto flex justify-between items-center">
				<div className="lg:hidden">
					<div className="dropdown">
						<label
							tabIndex="0"
							className="btn btn-ghost lg:hidden cursor-pointer"
							onClick={() => {
								setNavbar(!navbar);
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						{navbar && (
							<ul
								tabIndex="0"
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box glass w-40"
							>
								<li className="pr-2 mb-4">
									<CustomLink to="/">Home</CustomLink>
								</li>
								<li className="pr-2 mb-4">
									<CustomLink to="/about">About</CustomLink>
								</li>
								<li className="pr-2 mb-4">
									<CustomLink to="/appointment">Appointment</CustomLink>
								</li>
								<li className="pr-2 mb-4">
									<CustomLink to="/reviews">Reviews</CustomLink>
								</li>
								<li className="pr-2 mb-4">
									<CustomLink to="/contact">Contact Us</CustomLink>
								</li>
								<li className="pr-2 mb-4">
									<CustomLink to="/login">Login</CustomLink>
								</li>
								<li className="pr-2 mb-4">
									<CustomLink to="/register">Register</CustomLink>
								</li>
							</ul>
						)}
					</div>
				</div>
				<Link className="text-primary font-bold normal-case text-xl" to="/">
					medicare
				</Link>

				<div className=" hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						<li className="pr-2">
							<CustomLink to="/">Home</CustomLink>
						</li>
						<li className="pr-2">
							<CustomLink to="/about">About</CustomLink>
						</li>
						<li className="pr-2">
							<CustomLink to="/appointment">Appointment</CustomLink>
						</li>
						<li className="pr-2">
							<CustomLink to="/reviews">Reviews</CustomLink>
						</li>
						<li className="pr-2">
							<CustomLink to="/contact">Contact Us</CustomLink>
						</li>
						{user ? (
							<>
								<button className="btn" onClick={logout}>
									signOut
								</button>
							</>
						) : (
							<>
								<li className="pr-2">
									<CustomLink to="/login">Login</CustomLink>
								</li>
								<li className="">
									<CustomLink to="/register">Register</CustomLink>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
