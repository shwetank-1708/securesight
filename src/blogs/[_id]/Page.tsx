import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../../assets/Assets/assets";

interface BlogData {
  id: number;
  title: string;
  description: string;
  image: string;
  date: number;
  category: string;
  author: string;
  author_img: string;
}

const Page: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract "id" from the URL

  const [data, setData] = useState<BlogData | null>(null);

  const fetchData = () => {
    console.log("Data Fetched");
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <img className="w-[500px]" src={data.image} />
          <p>{data.category}</p>
          <p>{data.author}</p>
          <img src={data.author_img} />

          <h3 className="text-4xl font-bold m-10">Heading</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus ipsa porro asperiores cum amet, nulla sint aliquam vitae
            nobis ipsum laboriosam quis molestias, quibusdam totam et
            exercitationem qui rem nostrum!
          </p>
        </>
      ) : (
        <p>Loading...</p> // Show loading or fallback UI when data is null
      )}
    </div>
  );
};

export default Page;
