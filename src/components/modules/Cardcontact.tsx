import { Link } from "react-router-dom";

type CardPops = {
  id: number;
  name: string;
  description: string;
};

const Cardcontact = ({ id, name, description }: CardPops) => {
  return (
    <div className="bg-gray-900 rounded-lg my-2 p-2 shadow-md shadow-black">
      <Link to={`/contact/${id}`}>
        <p className=" hover:underline font-medium text-lg pl-2">{name}</p>
      </Link>
      <p className=" text-base pl-4">{description}</p>
    </div>
  );
};

export default Cardcontact;
