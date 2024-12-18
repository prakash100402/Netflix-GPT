import { Link } from "react-router-dom";

const NeedHelp = () =>{
    return(
        <div className="bg-slate-500 h-screen text-center p-10 text-gray-300 text-2xl">
            <h1>Contact: 000-000-000-0000</h1>
            <Link to="/" className="hover:underline">Back to Sign In</Link>
        </div>
    );
}

export default NeedHelp;