import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPost } from "../../redux/actions";
import { AppState } from "../../redux/store";
import Cardlanding from "../modules/Cardlanding";
import LoginButton from "./private/assets/LogInButton";

const Landing = () => {
  const dispatch = useDispatch();
  const post = useSelector((state: AppState) => state.actionReducer.post);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div className="bg-gray-700 flex flex-col rounded-xl p-3 h-full w-full max-w-md">
      <div className="no-scrollbar bg-slate-500 h-full w-full overflow-x-auto">
        {post ? (
          post.map((el: any) => {
            return (
              <Cardlanding
                key={el.id}
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
      <div className="bg-blue-700 p-2 w-full h-12 justify-center items-center">
        <LoginButton />
      </div>
    </div>
  );
};

export default Landing;
