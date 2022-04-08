import { useDispatch } from "react-redux";
import { getPostFollows, getPost } from "../../redux/actions";

type Data1 = {
  id: any;
};

const MenuPost = ({ id }: Data1) => {
  const dispatch = useDispatch();

  function handleFilterById(e: any) {
    e.preventDefault();
    dispatch(getPostFollows(e.target.value));
  }

  function handleFilterAll(e: any) {
    e.preventDefault();
    dispatch(getPost());
  }

  return (
    <div className="bg-gray-700 p-2 w-full h-9 grid grid-cols-2 justify-center items-center">
      <div>
        <button
          onClick={(e) => handleFilterAll(e)}
          value="all"
          className="w-full"
        >
          All
        </button>
      </div>
      <div>
        <button
          onClick={(e) => handleFilterById(e)}
          value={id}
          className="w-full"
        >
          Following
        </button>
      </div>
    </div>
  );
};

export default MenuPost;
