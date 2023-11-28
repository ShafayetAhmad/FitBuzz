/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogBody = ({blog}) => {
  const { _id, title, thumbnail, author, published_date, content } = blog;

  return (
    <div className="max-h-fit my-10 flex rounded overflow-hidden shadow-lg hover:bg-gray-200">
      <img className="lg:w-1/4 w-1/2" src={thumbnail} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {author} | {published_date}
        </p>
        <p className="text-gray-700 text-base">
          {content.substring(0, 150)}...
        </p>
        <div className=" pt-4 pb-2 ">
          <Link to={`/blogs/${_id}`}>
            {" "}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;