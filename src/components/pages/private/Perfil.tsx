import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerfil } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import Cardperfil from "../../modules/Cardperfil";
import FormPost from "../../modules/FormPost";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./assets/LogOutButton";

const Perfil = () => {
  const dispatch = useDispatch();
  const perfil = useSelector((state: AppState) => state.actionReducer.perfil);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  const id = user?.email;

  useEffect(() => {
    async function loadProducts() {
      await dispatch(getPerfil(id));

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }

    loadProducts();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="w-full h-full justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full h-full justify-center items-center">
      <div>
        <p>{perfil.name}</p>
        <p>{perfil.description}</p>
      </div>
      <FormPost />
      <div className="w-full h-full justify-center">
        <div className="no-scrollbar bg-slate-500 h-full w-full overflow-x-auto">
          {perfil.post ? (
            perfil.post.map((el: any) => {
              return (
                <Cardperfil
                  key={el.id}
                  id={el.id}
                  name={el.nameUser}
                  title={el.title}
                  content={el.content}
                  idModal={el.id}
                />
              );
            })
          ) : (
            <p>No post</p>
          )}
        </div>
      </div>
      <LogoutButton />
    </div>
  );
};

export default Perfil;
