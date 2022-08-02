// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyDs3bT27WCbjFVJou94xA2xzI5wbBGpz_U",
	authDomain: "medicare-7bc67.firebaseapp.com",
	projectId: "medicare-7bc67",
	storageBucket: "medicare-7bc67.appspot.com",
	messagingSenderId: "988095354490",
	appId: "1:988095354490:web:0972ff5be6f9e0cf9acdc3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
