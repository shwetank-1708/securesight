interface FooterHeadingProps {
  heading: string;
}

const FooterHeading: React.FC<FooterHeadingProps> = ({ heading }) => {
  return (
    <div>
      <h3 className="text-xl font-bold">{heading}</h3>
    </div>
  );
};

export default FooterHeading;
