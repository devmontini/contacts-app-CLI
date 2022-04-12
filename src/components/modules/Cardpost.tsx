import { Link } from "react-router-dom";

type CardPops = {
  id: number;
  name: number;
  title: string;
  content: string;
};

const Cardpost = ({ id, name, title, content }: CardPops) => {
  return (
    <div className="bg-gray-900 rounded-lg my-2 p-2 shadow-md shadow-black">
      <Link to={`/contact/${id}`}>
        <button className=" hover:underline font-medium text-lg pl-2">
          {name}
        </button>
      </Link>
      <p className=" font-medium text-base pl-4 mt-1">{title}</p>
      <p className=" text-base pl-4">{content}</p>
    </div>
  );
};

export default Cardpost;
