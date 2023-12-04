import { useEffect, useState } from "react";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodePullRequest,
  faExclamationCircle,
  faGears,
  faHatCowboy,
  faLinesLeaning,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import AddNewForum from "../AddNewForum/AddNewForum";

/* eslint-disable react/prop-types */
const AdminDashboard = ({ user }) => {
  const [subsData, setSubsData] = useState(null);
  const [trainersData, setTrainersData] = useState(null);
  const [trainerRequests, settrainerRequests] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState({});
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const acceptTrainerRequest = () => {
    const trainerEmail = selectedRequest.email;
    axiosSecure
      .post("/accept-trainer", { email: trainerEmail })
      .then((data) => {
        console.log(data.data);
        axiosSecure.get("/getTrainerRequests").then((data) => {
          settrainerRequests(data.data);
        });
      });
  };
  const rejectTrainerRequest = () => {
    const trainerEmail = selectedRequest.email;
    axiosSecure
      .post("/reject-trainer", { email: trainerEmail })
      .then((data) => {
        console.log(data.data);
        axiosSecure.get("/getTrainerRequests").then((data) => {
          settrainerRequests(data.data);
        });
      });
  };

  useEffect(() => {
    axiosSecure.get("get-subs-data").then((data) => {
      setSubsData(data.data);
    });
    axiosSecure.get("/getTrainersData").then((data) => {
      setTrainersData(data.data);
    });
    axiosSecure.get("/getTrainerRequests").then((data) => {
      settrainerRequests(data.data);
    });
  }, [setSubsData, setTrainersData]);
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl py-10 text-center">
          Howdy, Admin{" "}
          <span className="text-4xl text-green-600"> {user.userName}</span>
        </h1>
        <p className="font-bold text-3xl py-10 text-center">
          List Of Subscribers
        </p>
        <table className="border-collapse  w-fit mx-auto my-10">
          <thead className="">
            <tr className="border-b-2 border-gray-400">
              <th className="py-3 px-6 bg-gray-200">SL</th>
              <th className="py-3 px-6 bg-gray-200">Name</th>
              <th className="py-3 px-6 bg-gray-200">Email</th>
            </tr>
          </thead>
          <tbody>
            {subsData?.map((data, index) => (
              <tr
                key={data._id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{data.name}</td>
                <td className="py-3 px-6">{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="my-8 ">
          <div className="pb-8 text-black w-full text-center">
            <h1 className="text-4xl  font-bold text-center mt-16">
              <FontAwesomeIcon icon={faHatCowboy}></FontAwesomeIcon>
              <span className="mx-8"> All Trainers</span>
              <FontAwesomeIcon icon={faHatCowboy}></FontAwesomeIcon>
            </h1>
          </div>
          {trainersData?.map((trainer, index) => (
            <div
              key={index}
              className="grid h-40 grid-cols-10 w-full text-white rounded-3xl"
            >
              <div className="grid col-span-2 border-4 border-white justify-center items-center bg-slate-900">
                <div className="text-center">
                  <p className="text-xl">Trainer</p>
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
                  TRAINER NAME
                </p>
                <h3 className="font-bold text-3xl">{trainer.full_name}</h3>
              </div>
              <div className="col-span-3 px-3 border-y-4 border-white  bg-[rgb(34,32,34)] text-left pt-10">
                <p className="font-bold text-sm text-[rgb(154,154,154)]">
                  <FontAwesomeIcon
                    icon={faGears}
                    size="xl"
                    color="red"
                    className="pr-3"
                  ></FontAwesomeIcon>
                  SKILLS
                </p>
                <ul className="font-bold text-md">
                  {Array.isArray(trainer.skills) &&
                    trainer.skills?.map((skill, index) => (
                      <li key={index}>- {skill}</li>
                    ))}
                </ul>
              </div>
              <div className="col-span-2 px-3 border-y-4 border-white  bg-[rgb(34,32,34)] text-left pt-10 w-full">
                <p className="font-bold text-sm text-[rgb(154,154,154)]">
                  <FontAwesomeIcon
                    icon={faLinesLeaning}
                    size="xl"
                    color="red"
                    className="pr-3"
                  ></FontAwesomeIcon>
                  SCHEDULE
                </p>
                <h3 className="font-bold text-md">
                  {trainer.available_days_in_week &&
                    trainer.available_days_in_week.map((index, day) => (
                      <span key={index} className="mx-2">
                        {days[day]}
                      </span>
                    ))}
                </h3>
                <h3 className="font-bold text-md mx-2">
                  {trainer.startTime} - {trainer.endTime}
                </h3>
              </div>

              <div className="flex col-span-1 border-y-4 border-white bg-[rgb(34,32,34)]">
                {parseInt(moment().diff(trainer.joinDate, "months")) > 0 ? (
                  <button className="btn bg-[rgb(70,70,70)] rounded-none w-32 text-white border-x-4 border-y-0 border-orange-600 hover:bg-orange-600 m-auto">
                    Pay Salary
                  </button>
                ) : (
                  <button className="btn bg-[rgb(70,70,70)] rounded-none w-32 text-white border-x-4 border-y-0 border-orange-600 hover:bg-orange-600 m-auto">
                    Payment Clear
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="my-8 ">
          <div className="pb-8 text-black w-full text-center">
            <h1 className="text-4xl  font-bold text-center mt-16">
              <FontAwesomeIcon icon={faCodePullRequest}></FontAwesomeIcon>
              <span className="mx-8"> Trainer Requests</span>
              <FontAwesomeIcon icon={faCodePullRequest}></FontAwesomeIcon>
            </h1>
          </div>
          {trainerRequests?.length == 0 && (
            <div className="font-bold text-5xl text-center">
              No Requests For Now
            </div>
          )}
          {trainerRequests?.map((request, index) => (
            <div
              key={index}
              className="grid h-40 grid-cols-10 w-full text-white rounded-3xl"
            >
              <div className="grid col-span-2 border-4 border-white justify-center items-center bg-slate-900">
                <div className="text-center">
                  <p className="text-xl">Request</p>
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
                  Trainer Name
                </p>
                <h3 className="font-bold text-3xl">{request.full_name}</h3>
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
                  {request.time_start} - {request.time_end}
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
                <h3 className="font-bold text-3xl">{request.trainer}</h3>
              </div>

              <div className="flex col-span-1 border-y-4 border-white bg-[rgb(34,32,34)]">
                <div className="flex justify-center items-center">
                  <button
                    className="btn"
                    onClick={() => {
                      setSelectedRequest(request);
                      document.getElementById("trainer-modal").showModal();
                    }}
                  >
                    <FontAwesomeIcon
                      size="2xl"
                      icon={faExclamationCircle}
                    ></FontAwesomeIcon>
                  </button>
                  <dialog
                    id="trainer-modal"
                    className="modal modal-bottom sm:modal-middle text-black"
                  >
                    <div className="modal-box">
                      <div>
                        <div className="">
                          <div className="w-40 h-60 mx-auto">
                            <img src={selectedRequest.image} alt="" />
                          </div>
                        </div>
                        <p className="text-center font-bold text-3xl">
                          {selectedRequest.full_name}
                        </p>
                        <p className="text-center font-bold text-xl">
                          {selectedRequest.email}
                        </p>
                        <div className="flex">
                          <div className="border-2 mx-2 px-2 border-black">
                            <p className="font-bold text-xl ">Skills</p>
                            <ul>
                              {selectedRequest?.skills?.map((skill, index) => (
                                <li key={index}>{skill}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="border-2 mx-2 px-2 border-black">
                            <p className="font-bold text-xl">Available Days</p>
                            {selectedRequest?.available_days_in_week?.map(
                              (day) => (
                                <ul key={day}>
                                  <li>{days[day]}</li>
                                </ul>
                              )
                            )}
                          </div>
                          <div className="border-2 mx-2 px-2 border-black">
                            <p className="font-bold text-xl">Available Time</p>
                            {selectedRequest?.available_time_in_day?.map(
                              (time) => (
                                <ul key={time}>
                                  <li>{time}</li>
                                </ul>
                              )
                            )}
                          </div>
                        </div>
                        <p className="py-4">
                          Would you want to add him As a TRAINER?
                        </p>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          <div className="flex gap-4">
                            {" "}
                            <button
                              className="btn"
                              onClick={rejectTrainerRequest}
                            >
                              Reject
                            </button>
                            <button
                              className="btn"
                              onClick={acceptTrainerRequest}
                            >
                              Accept
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              <AddNewForum userType={"admin"}></AddNewForum>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
