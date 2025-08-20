// interface BlogItemProps {
//   title: string;
//   description: string;
//   category: string;
//   image: string;
//   id: number;
// }

// import { FaLongArrowAltRight } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const BlogItem: React.FC<BlogItemProps> = ({
//   title,
//   description,
//   category,
//   image,
//   id,
// }) => {
//   return (
//     <div>
//       <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#434343]">
//         <NavLink to={`/blogs/${id}`}>
//           <img
//             src={image}
//             alt=""
//             width={400}
//             height={400}
//             className="border-b border-black"
//           />
//         </NavLink>
//         <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
//           {category}
//         </p>
//         <div className="p-5">
//           <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
//             {title}
//           </h5>
//           <p>{id}</p>
//           <p className="mb-3 text-sm tracking-tight text-gray-700">
//             {description}
//           </p>
//           <NavLink to={`/blogs/${id}`} className="flex items-center gap-1">
//             Read More <FaLongArrowAltRight />
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogItem;

interface BlogItemProps {
  blogTitle: string;
  blogContent: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ blogTitle, blogContent }) => {
  return (
    <div>
      <p>{blogTitle}</p>
      <p>{blogContent}</p>
    </div>
  );
};

export default BlogItem;
