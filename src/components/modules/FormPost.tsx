import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

type Data1 = {
  target: {
    name: string;
    value: string;
  };
};

const FormPost = () => {
  const history = useHistory();
  const { user, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    async function loadProducts() {
      const token = await getAccessTokenSilently();
      dispatch(postPost(user?.email, input, token));
    }
    loadProducts();
    setInput({
      title: "",
      content: "",
    });
    history.push("/post");
  }

  function handleChange(e: Data1) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="p-2 bg-gray-900 rounded-lg">
      <form
        className="flex flex-col rounded-xl"
        action=""
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          name="title"
          value={input.title}
          onChange={(e) => handleChange(e)}
          placeholder="Title"
          className="m-1  rounded-lg"
        />
        <textarea
          name="content"
          value={input.content}
          onChange={(e) => handleChange(e)}
          placeholder="Content"
          className="m-1 rounded-lg"
        />
        <button type="submit" className="active:bg-gray-800">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormPost;
