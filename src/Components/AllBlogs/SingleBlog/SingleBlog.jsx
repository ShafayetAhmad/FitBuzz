import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faTurnDown, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const SingleBlog = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleUpVote = () => {
    if (user) {
      axiosSecure.post(`/upvotePost?postId=${id}`).then((res) => {
        console.log(res.data);
        axiosSecure(`/getSingleBlog?id=${id}`).then((data) => {
          setBlogsData(data.data[0]);
          console.log(data.data[0]);
        });
      });
    } else {
      navigate("/login");
    }
  };
  const handleDownVote = () => {
    if (user) {
      axiosSecure.post(`/downvotePost?postId=${id}`).then((res) => {
        console.log(res.data);
      });
      axiosSecure(`/getSingleBlog?id=${id}`).then((data) => {
        setBlogsData(data.data[0]);
        console.log(data.data[0]);
      });
    } else {
      navigate("/login");
    }
  };
  const [blogData, setBlogsData] = useState({});
  useEffect(() => {
    console.log(id);
    axiosSecure(`/getSingleBlog?id=${id}`).then((data) => {
      setBlogsData(data.data[0]);
      console.log(data.data[0]);
    });
  }, [id]);
  return (
    <div className="container mx-auto mt-8">
      <div className="flex lg:flex-row md:flex-row flex-col">
        <div className="w-1/2">
          <img
            src={blogData.thumbnail}
            alt={blogData.title}
            className="rounded-lg w-10/12 pl-8"
          />
        </div>
        <div className="w-1/2 pl-8">
          <div className="font-bold mb-2  text-6xl">{blogData.title}</div>
          <p className="text-gray-700 text-4xl pt-8">
            {blogData.author}({blogData.userType}) | {blogData.published_date}
          </p>
        </div>
      </div>
      <div>
        <div className=" pl-8 pt-8">
          <p className="text-gray-700 text-xl">{blogData?.content}</p>
        </div>
        <div className="my-10 ml-10 flex  gap-7 ">
          <button className="btn bg-black h-20" onClick={handleUpVote}>
            <div>
              <FontAwesomeIcon
                icon={faTurnUp}
                color="white"
                size="2xl"
              ></FontAwesomeIcon>
              <p className="text-xl text-white">{blogData.upvote}</p>
            </div>
          </button>
          <button className="btn bg-black h-20" onClick={handleDownVote}>
            <div>
              <FontAwesomeIcon
                icon={faTurnDown}
                color="white"
                size="2xl"
              ></FontAwesomeIcon>
              <p className="text-xl text-white">{blogData.downvote}</p>
            </div>
          </button>
        </div>
        <div className="px-8 py-8 flex">
          <h4 className="font-bold text-3xl">Share This Blog On : </h4>
          <div className="flex gap-4 ml-8">
            <FontAwesomeIcon
              icon={faFacebook}
              color="blue"
              size="2xl"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faTwitter}
              size="2xl"
              color="black"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faLinkedin}
              color="blue"
              size="2xl"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
