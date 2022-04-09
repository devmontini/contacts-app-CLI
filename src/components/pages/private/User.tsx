import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getFollowContact,
  getUser,
  postContact,
} from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import { useAuth0 } from "@auth0/auth0-react";
import Cardpost from "../../modules/Cardpost";

const User = (props: any) => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const perfil = useSelector((state: AppState) => state.actionReducer.user);
  const follow = useSelector((state: AppState) => state.actionReducer.follow);
  const ids = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({
    auth: user?.email,
    id: perfil.auth,
  });

  useEffect(() => {
    async function loadProducts() {
      await dispatch(getUser(ids));

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
    loadProducts();
  }, []);

  // useEffect(() => {
  //   async function loadProducts2() {
  //     const payload = { auth: user?.email, id: perfil.auth };
  //     await dispatch(getFollowContact(payload));

  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2500);
  //   }
  //   loadProducts2();
  // }, [perfil.auth]);

  if (loading) {
    return (
      <div className="w-full h-full justify-center items-center">
        Loading...
      </div>
    );
  }

  function handleChange(e: any) {
    e.preventDefault();
    const asd = { auth: perfil.auth };
    dispatch(postContact(user?.email, asd));
  }

  function handleDelete(e: any) {
    e.preventDefault();
    dispatch(deleteContact(follow.id));
  }

  function handlePrueba(e: any) {
    e.preventDefault();
    dispatch(getFollowContact(input));
    setInput({
      auth: user?.email,
      id: perfil.auth,
    });
  }

  const post = perfil.post;

  return (
    <div className="w-full h-full justify-center items-center">
      <div>
        <p>{perfil.name}</p>
        <p>{perfil.description}</p>
        <button onClick={(e) => handlePrueba(e)}>LALALAL</button>
        {follow.followed === true ? (
          <button onClick={(e) => handleDelete(e)}>Diss</button>
        ) : (
          <button onClick={(e) => handleChange(e)}>Follow</button>
        )}
      </div>
      <div>
        {perfil.post ? (
          post.map((el: any) => {
            return (
              <Cardpost
                key={el.id}
                name={el.nameUser}
                title={el.title}
                content={el.content}
                id={el.id}
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

export default User;
