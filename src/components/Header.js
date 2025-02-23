import { Link, useNavigate } from "react-router-dom";
import { LOGO } from "../utils/utilsLinks";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import GptSearchButton from "../utils/gptSearchButton";
import SignOutButton from "../utils/signOutButton";


const Header = () => {
    const loc = window.location.pathname;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser());
            navigate('/');
        }).catch((error) => {
            // An error happened.
        });
    };

    return (
        <div className="absolute py-3 px-8 z-10 pl-72 flex justify-between w-screen bg-gradient-to-b from-black gap-[5px]">
            <img className="w-44" src={LOGO} alt="logo" />
            {user && <div className="flex pr-72 self-center">
                <Link to={loc === "/browse/GPTsearch" ? "/browse" : "/browse/GPTsearch"}>
                    <GptSearchButton text={loc === "/browse/GPTsearch" ? "Home" : "GPT Search"} />
                </Link>
                <img className="w-10 h-10 self-center rounded mr-[5px]" draggable="false" alt="img" src={user.photoURL} />
                <SignOutButton onClick={logOut} />
            </div>}
        </div>
    );
};

export default Header;