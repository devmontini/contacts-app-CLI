import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postContact } from "../../redux/actions";

type Follow = {
  userId: string;
  perfilId: string;
};

const ButonFollow = ({ userId, perfilId }: Follow) => {
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  function handleChange(e: any) {
    e.preventDefault();
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(postContact(token, userId, perfilId));
    }
    loadProducts();
    history.push("/contacts");
  }

  return (
    <div className="p-2">
      <button onClick={(e) => handleChange(e)}>Follow</button>
    </div>
  );
};

export default ButonFollow;
