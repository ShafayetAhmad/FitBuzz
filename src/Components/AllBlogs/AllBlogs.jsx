import { useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import BlogBody from "./BlogBody/BlogBody";

const AllBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    axiosSecure.get("/getAllBlogs").then((data) => {
      setBlogsData(data.data);
      console.log(data.data);
    });
  }, []);
  return (
    <div>
      <section className="events-section py-4 bg-gray-100 mx-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-orange-500 py-4 rounded-full">
            Latest Blogs
          </h2>

          <div className="">
            {blogsData.map((blog, index) => (
              <BlogBody blog={blog} key={index}></BlogBody>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;
