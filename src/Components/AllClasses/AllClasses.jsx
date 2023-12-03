import { useContext, useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const AllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const { user } = useContext(AuthContext);
  // const [selectedClass, setSelectedClass] = useState(null);
  const handleEnrollNow = (classItem) => {
    console.log("handle now clicked");
    console.log(classItem);
    const bookSlot = { slotId: classItem._id, userEmail: user.email };
    axiosSecure.post("/bookSlot", bookSlot).then((res) => {
      console.log(res.data);
    });
  };
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // useEffect(() => {
  //   axiosSecure.get("/getAllTrainerClasses").then((data) => {
  //     setTrainerClasses(data.data);
  //     console.log(data.data);
  //   });
  // }, []);
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
              {classItem.slotName}
            </h3>
            <FontAwesomeIcon
              icon={faHeartPulse}
              color="red"
              size="2xl"
              className="mt-4 absolute"
            ></FontAwesomeIcon>
            <div className="py-8">
              <img src={classItem.thumbnail} alt="" />
            </div>
            <h4 className="text-white py-4">
              Weekly Classes on Every:{" "}
              <span className="text-green-300 text-xl">
                {days[classItem.day]}
              </span>
            </h4>

            <p className="text-white py-4">
              Time:{" "}
              <span className="text-green-300 text-xl">{classItem.time}</span>
            </p>
            <p className="text-white pb-4">
              Trainer:{" "}
              <span className="font-bold text-2xl">
                {classItem.trainerName}
              </span>
            </p>
            {classItem.bookedUserEmail ? (
              <button className="btn btn-outline text-white w-full hover:bg-orange-600 border-white border-1">
                Aleady Booked
              </button>
            ) : (
              <button
                onClick={() => handleEnrollNow(classItem)}
                className="btn btn-outline text-white w-full hover:bg-orange-600 border-white border-1"
              >
                ENROLL NOW
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AllClasses;
