type CardPops = {
  name: number;
  title: string;
  content: string;
};

const Cardlanding = ({ name, title, content }: CardPops) => {
  return (
    <div className="bg-gray-900 rounded-lg my-2 p-2 shadow-md shadow-black">
      <p className=" font-medium text-lg pl-2">{name}</p>
      <p className=" font-medium text-base pl-4 mt-1">{title}</p>
      <p className=" text-base pl-4">{content}</p>
    </div>
  );
};

export default Cardlanding;
