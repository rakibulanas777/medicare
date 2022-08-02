import React from "react";
import { FcGoogle } from "react-icons/fc";

import { AiOutlineGithub, AiFillTwitterCircle } from "react-icons/ai";

import { BsFacebook } from "react-icons/bs";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import auth from "../Shared/firebaseinit";

const SocialLogin = () => {
	const [signInWithGoogle, userGoogle, loading, error] =
		useSignInWithGoogle(auth);
	const handleGoogleSignIn = () => {
		signInWithGoogle();
		console.log(userGoogle);
		if (userGoogle) {
			<Navigate to="/" replace={true} />;
		}
	};
	return (
		<>
			<div className="flex justify-center mt-3 mb-3 items-center">
				<div className="icon btn btn-ghost glass bg-white w-14 h-14 rounded-full shadow mr-3">
					<FcGoogle className=" text-2xl" onClick={handleGoogleSignIn} />
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
		</>
	);
};

export default SocialLogin;
