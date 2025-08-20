interface TitleProps {
  heading: string;
  des: string;
}

const Title: React.FC<TitleProps> = ({ heading, des }) => {
  return (
    <div className="sm:p-[50px] p-[10px] flex flex-col gap-2 text-secondary">
      <h2 className="sm:text-4xl text-2xl text-center font-bold">{heading}</h2>
      <p className="text-center">{des}</p>
    </div>
  );
};

export default Title;
