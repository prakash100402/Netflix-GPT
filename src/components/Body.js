import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import NeedHelp from "./NeedHelp";

const Body = () => {

    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },

        {
            path: "/Browse",
            element: <Browse/>,
        },

        {
            path: "/help",
            element: <NeedHelp/>
        },
    ]);

    return(
        <RouterProvider router={appRoute}/>
    );
};

export default Body;