import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteContact } from "../../redux/actions";

type UnFollow = {
  followId: string;
};

const ButonUnfollow = ({ followId }: UnFollow) => {
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  function handleDelete(e: any) {
    e.preventDefault();
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(deleteContact(followId, token));
    }
    loadProducts();
    history.push("/contacts");
  }

  return (
    <div className="p-2">
      <button onClick={(e) => handleDelete(e)}>Unfollow</button>
    </div>
  );
};

export default ButonUnfollow;
