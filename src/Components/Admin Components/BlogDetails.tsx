import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import config from "../../config";

interface BlogProps {
  blogCategory: string;
  blogTitle: string;
  blogContent: string;
  blogURL: string;
  imageUrl: string;
  _id: string;
}

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get the dynamic "id" from the URL
  const [blog, setBlog] = useState<BlogProps | null>(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await axios.get(
          // `http://localhost:8000/getBlogDetails/${id}`
          `${config.BASE_URL}/getBlogDetails/${id}`
        );
        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching blog details", error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <p className="font-bold">{blog.blogTitle}</p>
      <p>{blog.blogCategory}</p>
      <img className="w-[500px]" src={blog.imageUrl} alt={blog.blogTitle} />
      <div
        className="text-gray-700"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(blog.blogContent), // Sanitize HTML before rendering
        }}
      />
    </div>
  );
};

export default BlogDetails;
