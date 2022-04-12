import { useAuth0 } from "@auth0/auth0-react";
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
  const { getAccessTokenSilently } = useAuth0();

  function handleDelete(e: any) {
    e.preventDefault();
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(deletePost(idModal, token));
    }
    loadProducts();
    alert("Post deleted");
  }

  return (
    <div className="bg-gray-900 rounded-lg my-2 p-2 shadow-md shadow-black">
      <div className="flex w-full my-2">
        <p className="w-full font-medium text-base pl-4">{title}</p>
        <div className="px-2">
          <button onClick={(e) => handleDelete(e)}>X</button>
        </div>
      </div>

      <p className=" text-base pl-4">{content}</p>
    </div>
  );
};

export default Cardperfil;
