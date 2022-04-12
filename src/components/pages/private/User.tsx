import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getFollowers,
  getPerfil,
  getUser,
  postContact,
} from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import { useAuth0 } from "@auth0/auth0-react";
import Cardpost from "../../modules/Cardpost";

const User = (props: any) => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const users = useSelector((state: AppState) => state.actionReducer.user);
  const perfil = useSelector((state: AppState) => state.actionReducer.perfil);
  const follow = useSelector((state: AppState) => state.actionReducer.follow);
  const ids = props.match.params.id;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getUser(ids));
    dispatch(getPerfil(user?.email));
    function loadProducts() {
      dispatch(getFollowers(ids, user?.email));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    loadProducts();
  }, [dispatch, ids, user?.email]);

  function handleChange(e: any) {
    e.preventDefault();
    dispatch(postContact(users.id, perfil.id));
  }

  function handleDelete(e: any) {
    e.preventDefault();
    dispatch(deleteContact(follow[0].id));
  }
  const post = users.post;
  return (
    <div className="w-full h-full justify-center items-center">
      {loading ? (
        <div className="w-full h-full justify-center items-center">
          Loading...
        </div>
      ) : (
        <>
          <div>
            <p>{users.name}</p>
            <p>{users.description}</p>
            {follow.length > 0 ? (
              <button onClick={(e) => handleDelete(e)}>Diss</button>
            ) : (
              <button onClick={(e) => handleChange(e)}>Follow</button>
            )}
          </div>
          <div>
            {post.length !== 0 ? (
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
        </>
      )}
    </div>
  );
};

export default User;
