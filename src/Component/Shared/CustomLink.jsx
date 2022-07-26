import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const CustomLink = ({ children, to, ...props }) => {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });
	return (
		<>
			<Link
				style={{
					backgroundColor: match ? "#3A4256" : "transparent",
					color: match ? "white" : "",
				}}
				to={to}
				{...props}
			>
				{children}
			</Link>
		</>
	);
};

export default CustomLink;
