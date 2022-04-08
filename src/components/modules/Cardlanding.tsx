type CardPops = {
  name: number;
  title: string;
  content: string;
};

const Cardlanding = ({ name, title, content }: CardPops) => {
  return (
    <div>
      <p>{name}</p>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default Cardlanding;
