import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useState, useEffect } from "react";
import { faClock, faHatCowboy, faLinesLeaning } from "@fortawesome/free-solid-svg-icons";

const ClassesForYou = () => {
  const [classesData, setClassesData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/getFeaturedClasses").then((data) => {
      setClassesData(data.data);
      console.log(data.data);
    });
  }, [axiosSecure]);

  return (
    <div className="my-8 ">
      <div className="pb-8 text-black w-full text-center">
        <h1 className="text-4xl  font-bold text-center mt-16">
          <FontAwesomeIcon icon={faHatCowboy}></FontAwesomeIcon>
          <span className="mx-8"> Our Top Classes For You</span>
          <FontAwesomeIcon icon={faHatCowboy}></FontAwesomeIcon>
        </h1>
        <h5 className="font-bold text-3xl mt-4">
          <FontAwesomeIcon icon={faClock} color="red"></FontAwesomeIcon> Join
          Now <FontAwesomeIcon icon={faClock} color="red"></FontAwesomeIcon>
        </h5>
      </div>
      {classesData.map((classItem, index) => (
        <div
          key={index}
          className="grid h-40 grid-cols-10 w-full text-white rounded-3xl"
        >
          <div className="grid col-span-2 border-4 border-white justify-center items-center bg-slate-900">
            <div className="text-center">
              <p className="text-xl">Class</p>
              <h3 className="text-5xl">{++index}</h3>
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
            <h3 className="font-bold text-3xl">{classItem.class_name}</h3>
          </div>
          <div className="col-span-3 px-3 border-y-4 border-white  bg-[rgb(34,32,34)] text-left pt-10">
            <p className="font-bold text-sm text-[rgb(154,154,154)]">
              <FontAwesomeIcon
                icon={faLinesLeaning}
                size="xl"
                color="red"
                className="pr-3"
              ></FontAwesomeIcon>
              CLASS TIME
            </p>
            <h3 className="font-bold text-3xl">
              {classItem.time_start} - {classItem.time_end}
            </h3>
          </div>
          <div className="col-span-2 px-3 border-y-4 border-white  bg-[rgb(34,32,34)] text-left pt-10 w-full">
            <p className="font-bold text-sm text-[rgb(154,154,154)]">
              <FontAwesomeIcon
                icon={faLinesLeaning}
                size="xl"
                color="red"
                className="pr-3"
              ></FontAwesomeIcon>
              INSTRUCTOR
            </p>
            <h3 className="font-bold text-3xl">{classItem.trainer}</h3>
          </div>

          <div className="flex col-span-1 border-y-4 border-white bg-[rgb(34,32,34)]">
            <button className="btn bg-[rgb(70,70,70)] rounded-none w-32 text-white border-x-4 border-y-0 border-orange-600 hover:bg-orange-600 m-auto">
              Join Class
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassesForYou;
