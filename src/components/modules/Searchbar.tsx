import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchName } from "../../redux/actions";

const Searchbar = () => {
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e: any) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(getSearchName(name, token));
    }
    loadProducts();
  }

  return (
    <div className="flex flex-col p-2 bg-gray-900 rounded-lg">
      <form className="flex flex-col rounded-xl">
        <input
          onChange={(e) => handleInputChange(e)}
          name=""
          className="m-1  rounded-lg"
          placeholder="Title"
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="active:bg-gray-800"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
