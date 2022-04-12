import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { getPostFollows, getPost } from "../../redux/actions";

type Data1 = {
  id: any;
};

const MenuPost = ({ id }: Data1) => {
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  function handleFilterById(e: any) {
    e.preventDefault();
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(getPostFollows(e.target.value, token));
    }
    loadProducts();
  }

  function handleFilterAll(e: any) {
    e.preventDefault();
    dispatch(getPost());
  }

  return (
    <div className="bg-gray-900 rounded-lg my-2 p-2 w-full h-9 grid grid-cols-2 justify-center items-center">
      <div>
        <button
          onClick={(e) => handleFilterAll(e)}
          value="all"
          className="w-full  border-r-2 border-black active:bg-gray-800"
        >
          All
        </button>
      </div>
      <div>
        <button
          onClick={(e) => handleFilterById(e)}
          value={id}
          className="w-full  border-l-2 border-black active:bg-gray-800"
        >
          Following
        </button>
      </div>
    </div>
  );
};

export default MenuPost;
