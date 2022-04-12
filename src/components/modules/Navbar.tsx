import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900 border-t-2 border-solid border-black rounded-b-lg p-2 w-full h-12 grid grid-cols-3 justify-center items-center">
      <Link to="/post">
        <button className="w-full border-x-2 border-black active:bg-gray-800">
          posts
        </button>
      </Link>
      <Link to="/contacts">
        <button className="w-full active:bg-gray-800">contacts</button>
      </Link>
      <Link to="/perfil">
        <button className="w-full border-x-2 border-black active:bg-gray-800">
          perfil
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
