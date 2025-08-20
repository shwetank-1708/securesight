import Title from "../Title";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../Button";

interface BlogHomeProps {
  blogTitle: string;
  imageUrl: string;
  _id: string;
}

const BlogHome = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3, // Default number of slides
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024, // Large screens (≤ 1024px)
  //       settings: {
  //         slidesToShow: 2, // Show 2 slides
  //       },
  //     },
  //     {
  //       breakpoint: 768, // Medium screens (≤ 768px)
  //       settings: {
  //         slidesToShow: 1, // Show 1 slide
  //       },
  //     },
  //     {
  //       breakpoint: 480, // Small screens (≤ 480px)
  //       settings: {
  //         slidesToShow: 1, // Show 1 slide
  //       },
  //     },
  //   ],
  // };

  const [blogDetails, setBlogDetails] = useState<BlogHomeProps[]>([]);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await axios.get(`${config.BASE_URL}/blog/getBlogDetails`);
        setBlogDetails(res.data);
        console.log(res.data);
        console.log(blogDetails);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchBlogDetails();
  }, []);

  return (
    <div>
      {/* <div className="bg-gray-100 flex flex-col items-center z-10">
        <Title
          heading="Our Blogs"
          des="Take a look at what happens around Alarm 24 Hours"
        />

        <div className="w-3/4 min-h-[200px]">
          <Slider {...settings}>
            {blogDetails.map((blog, index) => (
              <div key={index} className="">
                <div className="flex flex-col justify-center md:p-8 p-2">
                  <NavLink to={`/blogs/${blog._id}`}>
                    <img src={blog.imageUrl} className="" />
                  </NavLink>
                  <p>{blog.blogTitle}</p>
                  <NavLink
                    to={`/blogs/${blog._id}`}
                    className="flex items-center gap-1"
                  >
                    Read More <FaLongArrowAltRight />{" "}
                  </NavLink>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}

      <div className="bg-gray-100 flex flex-col items-center z-10">
        <Title
          heading="Our Blogs"
          des="Take a look at what happens around Alarm 24 Hours"
        />

        <div className="w-[90%] min-h-[200px] flex flex-wrap justify-center gap-4">
          {blogDetails.slice(0, 6).map((blog, index) => (
            <div key={index} className="w-[450px]">
              <div className="flex flex-col justify-center md:p-8 p-2">
                <NavLink to={`/blogs/${blog._id}`}>
                  <img src={blog.imageUrl} className="" />
                </NavLink>
                <p>{blog.blogTitle}</p>
                <NavLink
                  to={`/blogs/${blog._id}`}
                  className="flex items-center gap-1"
                >
                  Read More <FaLongArrowAltRight />{" "}
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        <NavLink to="/resources/blog" className="m-4">
          <Button text="Explore More"></Button>
        </NavLink>
      </div>
    </div>
  );
};

export default BlogHome;
