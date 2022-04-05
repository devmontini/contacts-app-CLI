import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions";
import { AppState } from "../../redux/store";

type CardPops = {
  name: number;
  title: string;
  content: string;
};

const Cardpost = ({ name, title, content }: CardPops) => {
  const dispatch = useDispatch();
  const userName = useSelector((state: AppState) => state.actionReducer.user);

  useEffect(() => {
    dispatch(getUser(name));
  }, []);

  return (
    <div>
      <p>{userName.name}</p>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default Cardpost;
