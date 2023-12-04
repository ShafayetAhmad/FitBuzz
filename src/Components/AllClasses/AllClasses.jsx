import { useContext, useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faLinesLeaning,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const result = {};
  let classIndex = 0;

  allClasses.forEach((item) => {
    const day = item?.day?.toString();
    if (!result[day]) {
      result[day] = [item];
    } else if (result[day].length < 3) {
      result[day].push(item);
    }
  });
  const weeklyData = Object.values(result).flat();
  console.log(weeklyData);
  const { user } = useContext(AuthContext);
  // const [selectedClass, setSelectedClass] = useState(null);
  const handleEnrollNow = (classItem) => {
    console.log("handle now clicked");
    console.log(classItem);
    const bookSlot = { slotId: classItem._id, userEmail: user.email };
    axiosSecure.post("/bookSlot", bookSlot).then((res) => {
      console.log(res.data);
    });
    Swal.fire("Booked Successfully");
    axiosSecure.get("/getAllClasses").then((data) => {
      setAllClasses(data.data);
      console.log(data.data);
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
    <div className="bg-[rgb(48,37,44)] py-16">
      <h2 className="text-center font-bold text-4xl text-white py-10">
        Weekly Schedules/Daily Activities
      </h2>
      <div>
        {days?.map((day, index) => (
          <div
            key={index}
            className="grid h-48 grid-cols-10 w-full text-white rounded-3xl"
          >
            <div className="grid col-span-2 border-4 border-white justify-center items-center bg-slate-900">
              <div className="text-center">
                <p className="text-2xl">{days[index++]}</p>
              </div>
            </div>
            <div className="col-span-2 border-y-4 border-white  pl-10 pr-2  text-left  bg-[rgb(34,32,34)]  pt-10">
              <p className="font-bold text-sm text-[rgb(154,154,154)]">
                <FontAwesomeIcon
                  icon={faLinesLeaning}
                  size="xl"
                  color="red"
                  className="pr-3"
                ></FontAwesomeIcon>
                CLASS NAME
              </p>
              <h3 className="font-bold text-3xl">
                {weeklyData[classIndex]?.slotName}
              </h3>
              <p className="font-bold text-md">
                Time: {weeklyData[classIndex]?.time}
              </p>
              <p className="font-bold text-xl">
                Trainer: {weeklyData[classIndex++]?.trainerName}
              </p>
            </div>
            <div className="col-span-2 border-y-4 border-white  pl-10 pr-2  text-left  bg-[rgb(34,32,34)]  pt-10">
              <p className="font-bold text-sm text-[rgb(154,154,154)]">
                <FontAwesomeIcon
                  icon={faLinesLeaning}
                  size="xl"
                  color="red"
                  className="pr-3"
                ></FontAwesomeIcon>
                CLASS NAME
              </p>
              <h3 className="font-bold text-3xl">
                {weeklyData[classIndex]?.slotName}
              </h3>
              <p className="font-bold text-md">
                Time: {weeklyData[classIndex]?.time}
              </p>
              <p className="font-bold text-xl">
                Trainer: {weeklyData[classIndex++]?.trainerName}
              </p>
            </div>{" "}
            <div className="col-span-2 border-y-4 border-white  pl-10 pr-2  text-left  bg-[rgb(34,32,34)]  pt-10">
              <p className="font-bold text-sm text-[rgb(154,154,154)]">
                <FontAwesomeIcon
                  icon={faLinesLeaning}
                  size="xl"
                  color="red"
                  className="pr-3"
                ></FontAwesomeIcon>
                CLASS NAME
              </p>
              <h3 className="font-bold text-3xl">
                {weeklyData[classIndex]?.slotName}
              </h3>
              <p className="font-bold text-md">
                Time: {weeklyData[classIndex]?.time}
              </p>
              <p className="font-bold text-xl">
                Trainer: {weeklyData[classIndex++]?.trainerName}
              </p>
            </div>
            <div className="flex col-span-2 border-y-4 border-white bg-[rgb(34,32,34)]">
              <button className="btn bg-[rgb(70,70,70)] rounded-none w-32 text-white border-x-4 border-y-0 border-orange-600 hover:bg-orange-600 m-auto">
                Join Class
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center font-bold text-4xl text-white py-10">
        All Classes
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-28 ">
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
    </div>
  );
};

export default AllClasses;
