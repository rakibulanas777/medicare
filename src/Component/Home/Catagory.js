import React, { useEffect, useState } from "react";

const Catagory = () => {
	const [value, setValue] = useState([]);
	useEffect(() => {
		fetch("../../../catagory.json")
			.then((res) => res.json())
			.then((data) => setValue(data));
	}, []);
	return (
		<div className="catagory">
			<div class="container px-5 py-24 mx-auto">
				<div class="text-center mb-10">
					<h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
						Catagory
					</h1>
				</div>
				<div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
					{value.map((item) => (
						<div class="p-2 sm:w-1/2 w-full">
							<div className="rounded flex p-4 h-full items-center bg-gradient-to-r from-secondary to-primary text-white cursor-pointer">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="3"
									class="text-white w-6 h-6 flex-shrink-0 mr-4"
									viewBox="0 0 24 24"
								>
									<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
									<path d="M22 4L12 14.01l-3-3"></path>
								</svg>
								<span class="title-font font-medium">{item.catagoryName}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Catagory;
