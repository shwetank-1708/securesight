// import about from "../assets/about.jpg";
// import BlogItem from "../Components/BlogItem";
// import { blog_data } from "../assets/Assets/assets";

// const Blog = () => {
//   return (
//     <div>
//       <div
//         style={{ backgroundImage: `url(${about})` }}
//         className="h-[20vh] bg-center-top flex items-center justify-center"
//       >
//         <div className="w-[70%]">
//           <h1 className="text-white text-4xl">Our Blogs</h1>
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-around gap-1 gap-y-10 my-16 xl:mx-24 ">
//         {blog_data.map((item, index) => {
//           return (
//             <BlogItem
//               key={index}
//               id={item.id}
//               image={item.image}
//               title={item.title}
//               description={item.description}
//               category={item.category}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Blog;

import { useEffect, useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import config from "../../config";

interface BlogProps {
  // blogCategory: string;
  blogTitle: string;
  // blogContent: string;
  // blogURL: string;
  imageUrl: string;
  _id: string;
}

const Blog = () => {
  const [blogDetails, setBlogDetails] = useState<BlogProps[]>([]);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await axios.get(
          // "http://localhost:8000/blog/getBlogDetails"
          `${config.BASE_URL}/blog/getBlogDetails`
          // "https://alarm24hours-backend.onrender.com/blog/getBlogDetails"
        );
        setBlogDetails(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error Fetching Blog Data", error);
      }
    };
    fetchBlogDetails();
  }, []);

  return (
    <div>
      <div className="h-[20vh] bg-center-top flex items-center justify-center bg-title">
        <div className="w-[70%]">
          <h1 className="text-white text-4xl">Our Blogs</h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center p-11">
        {blogDetails.map((blog, index) => (
          <div
            key={index}
            className="mb-4 p-4 border-b border-gray-300 max-w-[400px]"
          >
            <NavLink to={`/blogs/${blog._id}`}>
              {" "}
              <img src={blog.imageUrl} />
            </NavLink>
            {/* <p>{blog.blogCategory}</p> */}
            <p className="font-bold">{blog.blogTitle}</p>
            {/* <p className="text-gray-700">{blog.blogContent}</p> */}
            {/* <p>{blog.blogURL}</p> */}
            {/* <p>{blog._id}</p> */}
            <NavLink
              to={`/blogs/${blog._id}`}
              className="flex items-center gap-1"
            >
              Read More <FaLongArrowAltRight />{" "}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
