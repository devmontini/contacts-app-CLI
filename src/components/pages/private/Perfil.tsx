import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPerfil } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import Cardperfil from "../../modules/Cardperfil";
import FormPost from "../../modules/FormPost";

const Perfil = () => {
  const dispatch = useDispatch();
  const perfil = useSelector((state: AppState) => state.actionReducer.perfil);
  const [loading, setLoading] = useState(true);
  const id = 1; //ID HARCODEADO

  useEffect(() => {
    async function loadProducts() {
      await dispatch(GetPerfil(id));

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
      <div>
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
  );
};

export default Perfil;
