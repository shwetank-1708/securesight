interface IndustryProps {
  src: string;
  heading: string;
}

const Industry: React.FC<IndustryProps> = ({ src, heading }) => {
  return (
    <div className="sm:w-[400px] w-full flex flex-col gap-2 items-center">
      <div className="w-[30%]">
        <img src={src} className="" />
      </div>
      <div>
        <h3 className="font-bold">{heading}</h3>
      </div>
    </div>
  );
};

export default Industry;
