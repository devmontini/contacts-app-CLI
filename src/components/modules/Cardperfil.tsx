import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../redux/actions";

type CardPops = {
  id: number;
  name: string;
  title: string;
  content: string;
  idModal: number;
};

const Cardperfil = ({ id, name, title, content, idModal }: CardPops) => {
  const dispatch = useDispatch();
  function handleDelete(e: any) {
    e.preventDefault();
    dispatch(deletePost(idModal));
    alert("Post deleted");
  }

  return (
    <div className="flex flex-col bg-orange-500 mb-2">
      <Link to={`/contact/${id}`}>
        <button>{name}</button>
      </Link>
      <p>{title}</p>
      <p>{content}</p>
      <div>
        <button onClick={(e) => handleDelete(e)}>X</button>
      </div>
    </div>
  );
};

export default Cardperfil;
