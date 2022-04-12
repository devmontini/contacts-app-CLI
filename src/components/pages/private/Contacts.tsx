import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import Cardcontact from "../../modules/Cardcontact";
import MenuContact from "../../modules/MenuContact";
import Searchbar from "../../modules/Searchbar";
import { useAuth0 } from "@auth0/auth0-react";

const Contacts = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const contact = useSelector((state: AppState) => state.actionReducer.contact);
  const id = user?.email;
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(getContact(id, token));
    }
    loadProducts();
  }, [dispatch, id]);

  return (
    <div className="w-full h-full justify-center items-center">
      <Searchbar />
      <MenuContact id={id} />
      {contact.length > 0 ? (
        contact.map((el: any) => {
          return (
            <Cardcontact
              key={el.id}
              id={el.id}
              name={el.name}
              description={el.description}
            />
          );
        })
      ) : (
        <div className=" flex justify-center items-center">
          <p>No contacts</p>
        </div>
      )}
    </div>
  );
};

export default Contacts;
