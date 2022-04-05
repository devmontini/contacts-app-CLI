import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../redux/actions";

type Data1 = {
  target: {
    name: string;
    value: string;
  };
};

const FormPost = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(postPost(1, input));
    setInput({
      title: "",
      content: "",
    });
  }

  function handleChange(e: Data1) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <form
        className="flex flex-col"
        action=""
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          name="title"
          value={input.title}
          onChange={(e) => handleChange(e)}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={input.content}
          onChange={(e) => handleChange(e)}
          placeholder="Content"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default FormPost;
