import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-blue-700 p-2 w-full h-12 grid grid-cols-3 justify-center items-center">
            <Link to="/post">
                <button className="w-full">Posts</button>
            </Link>
            <Link to="/contacts">
                <button className="w-full">Contacts</button>
            </Link>
            <Link to="/perfil">
                <button className="w-full">Perfil</button>
            </Link>
        </div>
    );
};

export default Navbar;
