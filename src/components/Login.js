import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { BGLOGO, USERLOGO } from "../utils/utilsLinks";
import { useRef, useState } from "react";
import { validation } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const checkValidation = () => {
        const message = validation(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        //Authentication
        if (!isSignIn) {
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, { displayName: name.current.value, photoURL: USERLOGO })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                            navigate("/browse");
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage.substring(9, 16) + "-> " + errorCode.substring(5));
                });
        }
        else {
            //sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    //const errorMessage = error.message;
                    setErrorMessage("User Not Found :- " + errorCode.substring(5));
                });
        }

    };

    const switchForm = () => {
        setIsSignIn(!isSignIn);
        setErrorMessage(null);
    }

    return (
        <div>
            <Header />
            <div className="absolute ">
                <img src={BGLOGO} alt="backgroundLogo" className="brightness-50 object-cover w-screen h-screen" draggable="false" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black lg:w-[35%] w-[70%] sm:w-[60%] md:w-[50%] p-12 bg-opacity-75 sm:my-[120px] my-[80px] mx-auto right-0 left-0 rounded-sm">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-white lg:text-4xl md:text-2xl text-xl p-2 m-2 ">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn && <input ref={name} type="text" placeholder="Full Name" defaultValue="Prakash Kumar Sah" className="p-4 m-2 rounded w-[220px] sm:w-[320px]  md:w-[350px] bg-black bg-opacity-75 border-2 border-gray-800 text-gray-300 " />}
                    <input ref={email} type="text" placeholder="Email or Mobile number" defaultValue="avenjer2002@gmail.com" className="p-4 m-2 rounded w-[220px] sm:w-[320px]  md:w-[350px] bg-black bg-opacity-75 border-2 border-gray-800 text-gray-300 " />
                    <input ref={password} type="password" placeholder="Password" defaultValue="Sonu@2002" className="p-4 m-2 rounded w-[220px] sm:w-[320px] md:w-[350px] bg-black bg-opacity-75 border-2 border-gray-800 text-gray-300 " />

                    <h1 className="text-red-600 p-2">{errorMessage}</h1>

                    <button className="m-2 bg-red-600 rounded text-white w-[220px] sm:w-[320px] md:w-[350px] h-10" onClick={checkValidation}>
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                </div>
                <div className="text-gray-300 flex flex-col items-center justify-center pt-3 text-center">
                    <h1 className="hover:underline cursor-pointer" onClick={switchForm}>{isSignIn ? "Dont have Account? Sign Up Now." : "Already have an Account."}</h1>
                    <Link to="/help" className="pt-3">Need Help?</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;