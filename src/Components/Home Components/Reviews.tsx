import Title from "../Title";
import Review from "../Review";
import review_1 from "../../assets/review_1.png";
import review_2 from "../../assets/review_2.png";
import review_3 from "../../assets/review_3.png";

const Reviews = () => {
  return (
    <div>
      <div className="border-2">
        <Title
          heading="Happy Customers"
          des="We provide best customer service. Look at what our customers say about us"
        />

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-8 text-center justify-center xl:w-[75%] w-full mx-auto sm:px-10 px-8 sm:pb-10 p-4">
          <Review
            des="Secure Sight Inc has installed security cameras at BLS offices across GTA, Ontario. We are extremely satisfied with their prompt and efficient service."
            src={review_1}
            customer_name="Reagan Saphire"
            position="(IT Manager - Canada)"
          />
          <Review
            des="We (Global Analytical Laboratories) recently upgraded our Security System with Secure Sight, highly recommend their professional service."
            src={review_2}
            customer_name="Amandeep"
            position="(MD)"
          />
          <Review
            des="Secure Sight Inc has successfully installed security cameras at our Mississauga office in Greater Toronto Area (GTA), Ontario. We are thoroughly impressed services."
            src={review_3}
            customer_name="Rana Sajjad"
            position="(Management)"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
