interface AboutImageProps {
  src: string;
}

const AboutImage: React.FC<AboutImageProps> = ({ src }) => {
  return (
    <div>
      <img src={src} />
    </div>
  );
};

export default AboutImage;
