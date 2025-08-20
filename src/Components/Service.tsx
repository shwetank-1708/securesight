import { NavLink } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";

interface ServiceProps {
  src: string;
  heading: string;
  des: string;
  path: string;
}

const Service: React.FC<ServiceProps> = ({ src, heading, des, path }) => {
  return (
    <div className="sm:w-[300px] w-full sm:m-0 m-4">
      {/* <div
        style={{ backgroundImage: `url(${src})` }}
        className="bg-cover rounded-xl"
      >
        <div className="bg-white/20 w-[400px] h-[300px] rounded-xl flex flex-col justify-end p-4">
          <NavLink to={path}>
            <p className="text-secondary font-bold text-xl hover:text-primary">
              {des}
            </p>
          </NavLink>
        </div>
      </div> */}

      <div className="">
        <NavLink to={path}>
          <img src={src} className="rounded-xl" />
        </NavLink>
      </div>
      <div>
        <p className="font-bold text-secondary text-xl text-center">
          {heading}
        </p>
      </div>
      <div>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default Service;
