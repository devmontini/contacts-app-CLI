import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowers, getPerfil, getUser } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import { useAuth0 } from "@auth0/auth0-react";
import Cardpost from "../../modules/Cardpost";
import ButonUnfollow from "../../modules/ButonUnfollow";
import ButonFollow from "../../modules/ButonFollow";
import Loader from "./assets/Loader";

const User = (props: any) => {
  const dispatch = useDispatch();
  const { user, getAccessTokenSilently } = useAuth0();
  const users = useSelector((state: AppState) => state.actionReducer.user);
  const perfil = useSelector((state: AppState) => state.actionReducer.perfil);
  const follow = useSelector((state: AppState) => state.actionReducer.follow);
  const ids = props.match.params.id;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const token: any = await getAccessTokenSilently();
      dispatch(getUser(ids, token));
      dispatch(getPerfil(user?.email, token));
      dispatch(getFollowers(ids, user?.email, token));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    loadProducts();
  }, [dispatch, ids, user?.email]);

  const post = users.post;

  return (
    <div className="w-full h-full justify-center items-center">
      {loading ? (
        <div className="w-full h-full justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="p-2 bg-gray-900 rounded-lg mb-2">
            <div className="flex w-full my-2">
              <p className="w-full font-medium text-lg pl-2">{users.name}</p>
              {follow.length > 0 ? (
                <ButonUnfollow followId={follow[0].id} />
              ) : (
                <ButonFollow userId={users.id} perfilId={perfil.id} />
              )}
            </div>
            <p className=" font-normal text-base pl-4 mt-1">
              {users.description}
            </p>
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

export default User;
