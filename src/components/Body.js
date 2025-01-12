import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import NeedHelp from "./NeedHelp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { remove } from "../utils/movieSlice";

const Body = () => {
    const dispatch = useDispatch();
    const [userR,serUserR] = useState(false);

    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: userR ? <Browse /> : <Login/>,
        },

        {
            path: "/browse",
            element: userR ? <Browse /> : <Login/>,
        },

        {
            path: "/help",
            element: <NeedHelp />
        },

        {
            path: "*",
            element: <NeedHelp/>
        },
    ]);

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid:uid, email:email, displayName:displayName, photoURL:photoURL }));
                serUserR(true);      
            }
            else 
            {
                dispatch(removeUser());
                dispatch(remove());
                serUserR(false);
            }
        }); 

        return() => {
            unsubscribe();
        };

    },[dispatch]);

    return (
        <RouterProvider router={appRoute} />
    );
};

export default Body;