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

  useEffect(() => {
    dispatch(getContact(id));
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
        <p>No contats</p>
      )}
    </div>
  );
};

export default Contacts;
