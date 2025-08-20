import Title from "../Title";
import Industry from "../Industry";
import commercial_offices from "../../assets/commercial_offices.png";
import university from "../../assets/university.png";
import healthcare from "../../assets/healthcare.png";
import manufacturing from "../../assets/manufacturing.png";
import warehouse from "../../assets/warehouse.png";
import shopping_centers from "../../assets/shopping_centers.png";

const Industries = () => {
  return (
    <div>
      <div className="">
        <div>
          <Title heading="Industries" des="" />
        </div>

        <div className="flex flex-wrap justify-center gap-11 2xl:w-[90%] w-full mx-auto pb-10">
          <div>
            <Industry src={commercial_offices} heading="Commercial Offices" />
          </div>
          <div>
            <Industry src={university} heading="University" />
          </div>
          <div>
            <Industry src={healthcare} heading="Healthcare" />
          </div>
          <div>
            <Industry src={manufacturing} heading="Manufacturing" />
          </div>
          <div>
            <Industry src={warehouse} heading="Warehouse" />
          </div>
          <div>
            <Industry src={shopping_centers} heading="Shopping Centers" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
