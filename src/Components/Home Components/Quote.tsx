import { NavLink } from "react-router-dom";
import Button from "../Button";

const Quote = () => {
  return (
    <div>
      <div className="bg-secondary flex md:flex-row flex-col justify-around items-center min-h-[150px] border-2">
        <h3 className="text-white text-2xl font-bold text-center">
          Schedule a FREE On Site Security Assessment
        </h3>
        <NavLink to="/resources/quotation">
          <Button text="Get Free Quote" />
        </NavLink>
      </div>
    </div>
  );
};

export default Quote;
