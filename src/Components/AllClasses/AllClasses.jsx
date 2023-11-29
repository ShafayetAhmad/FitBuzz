import { useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";

const AllClasses = () => {
  const [allClasses, setAllClasses] = useState(null);
  useEffect(() => {
    axiosSecure.get("/getAllClasses").then((data) => {
      setAllClasses(data.data);
      console.log(data.data);
    });
  }, []);
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-28 bg-[rgb(48,37,44)] py-16">
        {allClasses.map((classItem, index) => (
          <div
            key={index}
            className="w-full border-4 px-8 py-8 text-center bg-[rgb(41,39,40)]"
          >
            <h3 className="text-white py-8 text-2xl font-bold ">
              {classItem.class_name}
            </h3>
            <p className="text-[rgb(82,120,150)]">{classItem.description}</p>
            <FontAwesomeIcon
              icon={faHeartPulse}
              color="red"
              size="2xl"
              className="mt-4 absolute"
            ></FontAwesomeIcon>
            <div className="py-8">
              <img src={classItem.thumbnail} alt="" />
            </div>
            <h4 className="text-white py-4">Trainer: {classItem.trainer}</h4>
            <p className="text-white">Start Date: {classItem.date}</p>
            <p className="text-white py-4">
              Time: {classItem.time_start} - {classItem.time_end}
            </p>
            <p className="text-white pb-4">
              Total Enrolled: {classItem.enrolled}/{classItem.max_capacity}
            </p>
            <button className="btn btn-outline text-white w-full hover:bg-orange-600 border-white border-1">
              ENROLL NOW
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllClasses;
