interface ReviewProps {
  des: string;
  src: string;
  customer_name: string;
  position: string;
}

import { FaStar } from "react-icons/fa";

const Review: React.FC<ReviewProps> = ({
  des,
  src,
  customer_name,
  position,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="bg-white sm:p-10 p-4 shadow-custom min-h-[100px] rounded-md">
        {des}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 w-[70%]">
          <img src={src} className="w-[20%] h-[20%] rounded-full" />
          <div className="flex flex-col justify-center">
            <p className="text-left font-bold">{customer_name}</p>
            <p className="text-left">{position}</p>
          </div>
        </div>

        <div className="text-yellow-500 flex flex-wrap">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  );
};

export default Review;
