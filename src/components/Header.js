import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/utilsLinks";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store)=>store.user);

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
        <div className="absolute py-3 px-8 z-10 pl-72 flex justify-between w-screen bg-gradient-to-b from-black ">
            <img className="w-44" src={LOGO} alt="logo" />
            {user && <div className="flex pr-72 self-center">
                <img className="w-10 h-10 self-center rounded" draggable="false" alt="img" src={user.photoURL} />
                <button className="bg-red-500 rounded m-2 p-2 h-[40px] text-white" onClick={logOut}>Log Out</button>
            </div>}
        </div>
    );
};

export default Header;