import { useDispatch } from "react-redux";
import { getContact, getAllUser } from "../../redux/actions";

type Data1 = {
  id: any;
};
const MenuContact = ({ id }: Data1) => {
  const dispatch = useDispatch();

  function handleAllContacts(e: any) {
    e.preventDefault();
    dispatch(getAllUser());
  }

  function handleMyContacts(e: any) {
    e.preventDefault();
    dispatch(getContact(e.target.value));
  }
  return (
    <div className="bg-gray-700 p-2 w-full h-9 grid grid-cols-2 justify-center items-center">
      <div>
        <button
          onClick={(e) => handleMyContacts(e)}
          value={id}
          className="w-full"
        >
          My Contacts
        </button>
      </div>
      <div>
        <button
          onClick={(e) => handleAllContacts(e)}
          value="all"
          className="w-full"
        >
          All contacts
        </button>
      </div>
    </div>
  );
};

export default MenuContact;
