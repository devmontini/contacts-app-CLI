import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { user } = useAuth0();
  const [input, setInput] = useState({
    auth: user?.email,
    name: "",
    description: "",
  });

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
    <div className="bg-gray-700 flex flex-col rounded-xl p-3 h-full w-full max-w-md">
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
    </div>
  );
};

export default Form;
