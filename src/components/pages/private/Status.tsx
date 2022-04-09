import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getPerfil } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import { Link, useHistory } from "react-router-dom";
import Perfil from "./Perfil";
import Form from "./Form";

const Status = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  let history = useHistory();
  const perfil = useSelector((state: AppState) => state.actionReducer.perfil);

  useEffect(() => {
    dispatch(getPerfil(user?.email));

    function loadProducts() {
      setTimeout(() => {
        if (perfil === undefined || null) {
          history.push("/form");
        } else {
          history.push("/post");
        }
      }, 2000);
    }
    loadProducts();
  }, [perfil.length]);

  return <div>Loading ...</div>;
};

export default Status;
