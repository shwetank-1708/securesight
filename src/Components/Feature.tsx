import { NavLink } from "react-router-dom";
import Button from "./Button";

interface FeatureProps {
  src: string;
  heading: string;
  des: string;
  path: string;
}

const Feature: React.FC<FeatureProps> = ({ src, heading, des, path }) => {
  return (
    <div className="text-[#434343] px-4 py-8 rounded-2xl shadow-2xl text-center sm:w-[400px] w-full sm:m-0 m-4">
      <div className="flex flex-col gap-4 items-center">
        <NavLink to={path}>
          <img src={src} className="w-[85%] m-[25px] rounded-2xl" />
        </NavLink>
        <h3 className="font-bold text-2xl">{heading}</h3>
        <p>{des}</p>
        <NavLink to={path}>
          <Button text="Read More" />
        </NavLink>
      </div>
    </div>
  );
};

export default Feature;
