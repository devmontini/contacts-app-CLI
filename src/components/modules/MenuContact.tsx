import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { getContact, getAllUser } from "../../redux/actions";

type Data1 = {
  id: any;
};
const MenuContact = ({ id }: Data1) => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  function handleAllContacts(e: any) {
    e.preventDefault();
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(getAllUser(token));
    }
    loadProducts();
  }

  function handleMyContacts(e: any) {
    e.preventDefault();
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(getContact(e.target.value, token));
    }
    loadProducts();
  }
  return (
    <div className="bg-gray-900 rounded-lg my-2 p-2 w-full h-9 grid grid-cols-2 justify-center items-center">
      <div>
        <button
          onClick={(e) => handleMyContacts(e)}
          value={id}
          className="w-full  border-r-2 border-black active:bg-gray-800"
        >
          My Contacts
        </button>
      </div>
      <div>
        <button
          onClick={(e) => handleAllContacts(e)}
          value="all"
          className="w-full  border-l-2 border-black active:bg-gray-800"
        >
          All contacts
        </button>
      </div>
    </div>
  );
};

export default MenuContact;
