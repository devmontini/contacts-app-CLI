import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import Cardpost from "../../modules/Cardpost";
import FormPost from "../../modules/FormPost";
import MenuPost from "../../modules/MenuPost";
import { useAuth0 } from "@auth0/auth0-react";

const Post = () => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const post = useSelector((state: AppState) => state.actionReducer.post);
  const [loading, setLoading] = useState(true);
  const id = user?.email;

  useEffect(() => {
    dispatch(getPost());
    function loadProducts() {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }

    loadProducts();
  }, [dispatch]);

  return (
    <div className="w-full h-full justify-center items-center">
      <FormPost />
      <MenuPost id={id} />
      {loading ? (
        <div className="w-full h-full justify-center items-center">
          Loading...
        </div>
      ) : post.length > 0 ? (
        post.map((el: any) => {
          return (
            <Cardpost
              key={el.id}
              id={el.authorId}
              name={el.nameUser}
              title={el.title}
              content={el.content}
            />
          );
        })
      ) : (
        <p>No post</p>
      )}
    </div>
  );
};

export default Post;
