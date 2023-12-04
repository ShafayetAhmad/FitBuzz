/* eslint-disable react/prop-types */
import { useRef } from "react";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

const AddNewForum = ({ userType }) => {
  const formRef = useRef(null);
  const handleAddForum = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const forumTitle = formData.get("title");
    const forumThumbnail = formData.get("thumbnail");
    const forumContent = formData.get("content");
    const forumData = {
      title: forumTitle,
      thumbnail: forumThumbnail,
      content: forumContent,
      userType: userType,
    };
    axiosSecure.post("/add-forum", { forumData: forumData }).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <div>
        <h3 className="py-10 font-bold text-3xl text-center">Add New Forum</h3>
        <div>
          <form className="card-body" ref={formRef}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Full Name</span>
              </label>
              <input
                type="title"
                placeholder="Title of The Forum"
                name="title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Thumbnail</span>
              </label>
              <input
                type="url"
                placeholder="Image Link"
                name="thumbnail"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Content</span>
              </label>
              <textarea
                placeholder="Content"
                name="content"
                className="input input-bordered h-48"
                required
              />
            </div>
            <button
              onClick={handleAddForum}
              className="btn btn-error text-white text-2xl my-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewForum;
