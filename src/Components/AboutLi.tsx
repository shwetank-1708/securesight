interface AboutLiProps {
  bold: string;
  normal: string;
}

const AboutLi: React.FC<AboutLiProps> = ({ bold, normal }) => {
  return (
    <div className="flex items-center">
      <div>
        <p>
          {" "}
          <b>{bold}</b>
          {normal}
        </p>
      </div>
    </div>
  );
};

export default AboutLi;
