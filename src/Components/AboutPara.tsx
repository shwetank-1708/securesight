interface AboutParaProps {
  para: String;
}

const AboutPara: React.FC<AboutParaProps> = ({ para }) => {
  return (
    <div>
      <div>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default AboutPara;
