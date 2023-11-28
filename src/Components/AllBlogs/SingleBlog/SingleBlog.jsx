import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

const SingleBlog = () => {
  const { id } = useParams();
  const [blogData, setBlogsData] = useState({});
  useEffect(() => {
    axiosSecure(`/getSingleBlog?id=${id}`).then((data) => {
      setBlogsData(data.data);
      console.log(data.data);
    });
  }, [id]);
  return (
    <div className="container mx-auto mt-8">
      <div className="flex lg:flex-row md:flex-row flex-col">
        <div className="w-1/2">
          <img
            src={blogData.image}
            alt={blogData.title}
            className="rounded-lg w-10/12 pl-8"
          />
        </div>
        <div className="w-1/2 pl-8">
          <div className="font-bold mb-2  text-6xl">{blogData.title}</div>
          <p className="text-gray-700 text-4xl pt-8">
            {blogData.author} | {blogData.date}
          </p>
        </div>
      </div>
      <div>
        <div className=" pl-8 pt-8">
          <p className="text-gray-700 text-xl">{blogData?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
