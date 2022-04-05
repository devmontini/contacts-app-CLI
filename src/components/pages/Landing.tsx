import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPost } from "../../redux/actions";
import { AppState } from "../../redux/store";
import Cardpost from "../modules/Cardpost";

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
              <Cardpost
                key={el.id}
                name={el.authorId}
                title={el.title}
                content={el.content}
              />
            );
          })
        ) : (
          <p>No post</p>
        )}
      </div>
      <div className="bg-blue-700 p-2 w-full h-12 grid grid-cols-2 justify-center items-center">
        <Link to="/post">
          <button className="w-full">Login</button>
        </Link>
        <Link to="/post">
          <button className="w-full">Guest</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
