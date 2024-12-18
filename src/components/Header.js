import { LOGO } from "../utils/utilsLinks";

const Header = () => {
    return(
        <div className="absolute py-3 px-8 z-10 pl-72">
            <img className="w-44" src={LOGO} alt="logo"/>
        </div>
    );
};

export default Header;