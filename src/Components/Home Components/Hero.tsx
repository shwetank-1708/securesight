import home_main from "../../assets/home_main.jpg";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const Hero = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${home_main})` }}
        className="bg-cover bg-center bg-no-repeat w-full text-secondary flex items-center justify-center"
      >
        <div className="h-[80vh] xl:w-[70%] w-[90%] flex">
          <div className="md:w-[50%] flex flex-col justify-center gap-8 text-white">
            <h1 className="xl:text-[45px] sm:text-[40px] text-[30px] font-bold text-left">
              Securing Your World - Trusted Security Solutions for Homes and
              Businesses
            </h1>
            <p className="font-bold sm:text-2xl text-[20px]">
              Residential and Commercial Security Alarm and Alert Systems
            </p>
            <div className="flex gap-4">
              <NavLink to="/resources/contact">
                {" "}
                <Button text="Contact Us" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
