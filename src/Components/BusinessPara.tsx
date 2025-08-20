interface BusinessParaProps {
  paraHeading: string;
  para: string;
}

const BusinessPara: React.FC<BusinessParaProps> = ({ paraHeading, para }) => {
  return (
    <div>
      <p className="text-justify">
        <b>{paraHeading}</b>
        {para}
      </p>
    </div>
  );
};

export default BusinessPara;
