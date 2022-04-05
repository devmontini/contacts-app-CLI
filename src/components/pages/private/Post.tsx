import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import Cardpost from "../../modules/Cardpost";
import FormPost from "../../modules/FormPost";
import MenuPost from "../../modules/MenuPost";

const Post = () => {
  const dispatch = useDispatch();
  const post = useSelector((state: AppState) => state.actionReducer.post);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div className="w-full h-full justify-center items-center">
      <FormPost />
      <MenuPost id={1} />
      {post ? (
        post.map((el: any) => {
          return (
            <Cardpost
              key={el.id}
              name={el.name}
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
