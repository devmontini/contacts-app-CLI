import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerfil, postUser } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import Cardperfil from "../../modules/Cardperfil";
import FormPost from "../../modules/FormPost";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./assets/LogOutButton";
import { useHistory } from "react-router-dom";
import Loader from "./assets/Loader";

const Perfil = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const perfil = useSelector((state: AppState) => state.actionReducer.perfil);
  const [loading, setLoading] = useState(true);
  const { user, getAccessTokenSilently } = useAuth0();
  const [input, setInput] = useState({
    auth: user?.email,
    name: "",
    description: "",
  });
  const id = user?.email;

  useEffect(() => {
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(getPerfil(id, token));
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
    loadProducts();
  }, [dispatch, id]);

  function handleSubmit(e: any) {
    e.preventDefault();
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(postUser(input, token));
    }
    loadProducts();
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
        <div className="p-2 bg-gray-900 rounded-lg">
          <form
            className="flex flex-col rounded-xl"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              className="m-1  rounded-lg"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={input.description}
              onChange={(e) => handleChange(e)}
              className="m-1 rounded-lg"
            />
            <button type="submit" className="active:bg-gray-800">
              Send
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="p-2 bg-gray-900 rounded-lg mb-2">
            <div>
              <div className="flex w-full justify-center items-center">
                <p className="w-full pl-4 ">{perfil.name}</p>
                <LogoutButton />
              </div>
              <p className="p-4">{perfil.description}</p>
            </div>
          </div>
          <FormPost />
          <div>
            {loading ? (
              <div className="w-full h-full justify-center items-center">
                <Loader />
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
              <div className=" flex justify-center items-center">
                <p>No post</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Perfil;
