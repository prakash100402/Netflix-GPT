import { Link } from "react-router-dom";
import { BGLOGO } from "../utils/utilsLinks";
import Header from "./Header";
import { useRef, useState } from "react";
import { validation } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const checkValidation = () => {
        const message = validation(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignIn) {
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    //setErrorMessage();
                });
        }
        else {
            //sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage("User Not Found :- " + errorCode.substring(5));
                });
        }

    };

    const switchForm = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute ">
                <img src={BGLOGO} alt="backgroundLogo" className="brightness-50" draggable="false" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black w-3/12 p-12 bg-opacity-75 my-36 mx-auto right-0 left-0 pl-16 rounded-sm">
                <h1 className="text-white text-4xl p-2 m-2 ">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type="text" placeholder="Full Name" className="p-4 m-2 rounded w-[320px] bg-black bg-opacity-75 border-2 border-gray-800 text-gray-300 " />}
                <input ref={email} type="text" placeholder="Email or Mobile number" className="p-4 m-2 rounded w-[320px] bg-black bg-opacity-75 border-2 border-gray-800 text-gray-300 " />
                <input ref={password} type="password" placeholder="Password" className="p-4 m-2 rounded w-[320px] bg-black bg-opacity-75 border-2 border-gray-800 text-gray-300 " />

                <h1 className="text-red-600 p-2">{errorMessage}</h1>

                <button className="m-2 bg-red-600 rounded text-white w-[320px] h-10" onClick={checkValidation}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <div className="text-gray-300 flex flex-col pl-3 pr-9 pt-3 text-center">
                    <h1 className="hover:underline cursor-pointer" onClick={switchForm}>{isSignIn ? "Dont have Account? Sign Up Now." : "Already have an Account."}</h1>
                    <Link to="/help" className="pt-3">Need Help?</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;