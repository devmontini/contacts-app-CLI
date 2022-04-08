import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { GetPerfil } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import { useHistory } from "react-router-dom";

const Status = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  let history = useHistory();
  const perfil = useSelector((state: AppState) => state.actionReducer.perfil);

  useEffect(() => {
    async function loadProducts() {
      await dispatch(GetPerfil(user?.email));

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
    console.log(user?.email);
    loadProducts();
    if (perfil) {
      history.push("/post");
    } else {
      history.push("/form");
    }
  });

  if (loading) {
    return <div>Loading ...</div>;
  }
};

export default Status;
