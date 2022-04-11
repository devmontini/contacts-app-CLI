import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerfil, postUser } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import Cardperfil from "../../modules/Cardperfil";
import FormPost from "../../modules/FormPost";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./assets/LogOutButton";
import { useHistory } from "react-router-dom";

const Perfil = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const perfil = useSelector((state: AppState) => state.actionReducer.perfil);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  const [input, setInput] = useState({
    auth: user?.email,
    name: "",
    description: "",
  });
  const id = user?.email;

  useEffect(() => {
    dispatch(getPerfil(id));
    function loadProducts() {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
    loadProducts();
  }, [dispatch, id]);

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(postUser(input));
    setInput({ auth: user?.email, name: "", description: "" });
    history.push("/post");
  }

  function handleChange(e: any) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="w-full h-full justify-center items-center">
      {perfil === null ? (
        <div className="no-scrollbar bg-slate-500 h-full w-full overflow-x-auto">
          <div className="w-full h-full justify-center items-center">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
              <textarea
                name="description"
                value={input.description}
                onChange={(e) => handleChange(e)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div>
            <LogoutButton />
          </div>
          <div>
            <p>{perfil.name}</p>
            <p>{perfil.description}</p>
          </div>
          <FormPost />
          <div className="w-full h-full justify-center">
            <div className="no-scrollbar bg-slate-500 h-full w-full overflow-x-auto">
              {loading ? (
                <div className="w-full h-full justify-center items-center">
                  Loading...
                </div>
              ) : perfil.post.length > 0 ? (
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
        </>
      )}
    </div>
  );
};

export default Perfil;
