import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { AiOutlineGithub, AiFillTwitterCircle } from "react-icons/ai";

import { BsFacebook } from "react-icons/bs";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
	const [registerData, setRegisterData] = useState({});
	const [check, setCheck] = useState(false);
	//create user
	// const [createUserWithEmailAndPassword, user, loading, error] =
	// 	useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
	// const [sendEmailVerification, sending, verifirderror] =
	// 	useSendEmailVerification(auth);

	//getting value from email and password field
	// const handleOnChange = (e) => {
	// 	const field = e.target.name;
	// 	const value = e.target.value;
	// 	const newRegisterData = { ...registerData };
	// 	newRegisterData[field] = value;
	// 	setRegisterData(newRegisterData);
	// 	e.preventDefault();
	// };

	const handleOnSubmit = async (e) => {
		const firstName = e.target.firstName.value;
		const lastName = e.target.lastName.value;
		const email = e.target.email.value;
		const Password = e.target.password.value;
		const confirmPassword = e.target.confirmPassword.value;
		const userData = { firstName, lastName, email, Password, confirmPassword };

		e.preventDefault();
		// e.preventDefault();
		// createUserWithEmailAndPassword(registerData.email, registerData.password);
		// if (user.emailVerified) {
		// 	<Navigate to="/foods" replace={true} />;
		// }
		// 	fetch("http://localhost:5000/register", {
		// 		method: "POST",
		// 		headers: {
		// 			"content-type": "application/json",
		// 		},
		// 		body: JSON.stringify(userData),
		// 	})
		// 		.then((res) => res.json())
		// 		.then((data) => {
		// 			console.log("success", data);
		// 			alert("users added successfully!!!");
		// 			e.target.reset();
		// 		});
		// 	console.log(userData);
		// };
	};
	return (
		<div className="register">
			<section className="text-gray-600 body-font relative">
				<div className="container px-5 py-14 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
							Register
						</h1>
					</div>
					<form onSubmit={handleOnSubmit}>
						<div className="lg:w-1/2 md:w-2/3 mx-auto">
							<div className="flex flex-wrap -m-2">
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											for="name"
											className="leading-7 text-sm text-gray-800 font-semibold"
										>
											First name
										</label>
										<input
											type="text"
											id="name"
											name="firstName"
											className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 glass focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											for="name"
											className="leading-7 text-sm text-gray-800 font-semibold"
										>
											Last name
										</label>
										<input
											type="text"
											id="name"
											name="lastName"
											className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 glass focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-full">
									<div className="relative">
										<label
											for="email"
											className="leading-7 text-sm text-gray-600"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											className="w-full glass bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											for="password"
											className="leading-7 text-sm text-gray-800 font-semibold"
										>
											Enter password
										</label>
										<input
											type="password"
											id="password"
											name="password"
											className="w-full glass bg-gray-100 bg-opacity-50 rounded border border-gray-300focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											for="passwordConfrim"
											className="leading-7 text-sm text-gray-800 font-semibold"
										>
											Confrim password
										</label>
										<input
											type="password"
											id="passwordConfrim"
											name="confirmPassword"
											className="w-full glass bg-gray-100 bg-opacity-50 rounded border border-gray-300focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="form-control">
									<label className="label cursor-pointer">
										<input
											type="checkbox"
											onChange={() => setCheck(!check)}
											name="checkbox"
											className="checkbox checkbox-accent checkbox-xs"
											id=""
										/>
										<span className="label-text font-semibold text-green-800 ml-3">
											Accept the terms and conditions
										</span>
									</label>
								</div>
								<div className="p-2 w-full">
									{check ? (
										<button
											className="btn btn-ghost bg-green-600  w-full rounded-md mt-6 text-white font-medium glass mx-auto text-center hover:bg-green-700"
											type="submit"
										>
											Sumit
										</button>
									) : (
										<button
											className="btn btn-ghost bg-green-600  w-full rounded-md mt-6 text-white font-medium glass mx-auto text-center hover:bg-green-700"
											disabled
											type="submit"
										>
											Sumit
										</button>
									)}
								</div>
							</div>

							<div className="right-part text-center mt-4 cursor-pointer text-sm text-green-400 font-semibold">
								<Link to="/login">Already account ?</Link>
							</div>
						</div>
					</form>
					<div className="text-xl text-center text-green-900 mt-2 font-semibold">
						or
					</div>
					<div className="flex justify-center mt-3 mb-3 items-center">
						<div className="icon btn btn-ghost glass bg-white w-14 h-14 rounded-full shadow mr-3">
							<FcGoogle className=" text-2xl" />
						</div>
						<div className="icon btn btn-ghost glass bg-white w-14 h-14 rounded-full shadow mr-3">
							<AiOutlineGithub className=" text-2xl" />
						</div>
						<div className="icon btn btn-ghost glass bg-white w-14 h-14 rounded-full shadow mr-3">
							<BsFacebook className=" text-2xl" />
						</div>
						<div className="icon btn btn-ghost glass bg-white w-14 h-14 rounded-full shadow mr-3">
							<AiFillTwitterCircle className=" text-2xl" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Register;
