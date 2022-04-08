import { Link } from "react-router-dom";

type CardPops = {
  id: number;
  name: number;
  title: string;
  content: string;
};

const Cardpost = ({ id, name, title, content }: CardPops) => {
  return (
    <div>
      <Link to={`/contact/${id}`}>
        <button>{name}</button>
      </Link>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default Cardpost;
