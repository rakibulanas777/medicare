import React from "react";

const PrimaryButton = ({ children }) => {
	return (
		<button className="bg-gradient-to-r from-secondary to-primary btn glass text-white hover:bg-secondary">
			{children}
		</button>
	);
};

export default PrimaryButton;
