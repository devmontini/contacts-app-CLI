import { Link } from "react-router-dom";

type CardPops = {
  id: number;
  name: string;
  description: string;
};

const Cardcontact = ({ id, name, description }: CardPops) => {
  return (
    <div>
      <Link to={`/contact/${id}`}>
        <p>{name}</p>
      </Link>
      <p>{description}</p>
    </div>
  );
};

export default Cardcontact;
