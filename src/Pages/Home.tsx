import Hero from "../Components/Home Components/Hero";
import OurServices from "../Components/Home Components/OurServices";
import Quote from "../Components/Home Components/Quote";
import Features from "../Components/Home Components/Features";
import Industries from "../Components/Home Components/Industries";
import Reviews from "../Components/Home Components/Reviews";
import BlogHome from "../Components/Home Components/BlogHome";

const Home = () => {
  return (
    <div className="border-2">
      <Hero />
      <OurServices />
      <Quote />
      <Features />
      <Industries />
      <BlogHome />
      <Reviews />
    </div>
  );
};

export default Home;
