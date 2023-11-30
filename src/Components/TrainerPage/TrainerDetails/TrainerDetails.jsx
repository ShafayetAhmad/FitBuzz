import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TrainerDetails = () => {
  const id = useParams().id;
  const [trainerDetails, setTrainerDetails] = useState({});
  const [trainerAvailability, setTrainerAvailability] = useState(null);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "SaturDay",
  ];

  useEffect(() => {
    axiosSecure.get(`/getTrainerDetails?id=${id}`).then((data) => {
      console.log(data.data[0]);
      setTrainerDetails(data.data[0]);
      setTrainerAvailability(trainerDetails.availability);
    });
  }, [id, trainerDetails]);
  console.log(trainerDetails);
  return (
    <div className="bg-gray-700 py-20">
      <div className="font-bold text-6xl text-center text-orange-500 my-10">
        Meet Your Coach
      </div>
      <div className="flex">
        <div className="flex-1 flex items-center justify-center">
          <img src={trainerDetails.image} alt="" />
        </div>
        <div className="border-l-4 pl-8 flex-1 text-white justify-start">
          <h3 className="font-bold text-5xl my-4">
            Name: {trainerDetails.full_name}
          </h3>
          <h4 className="text-4xl ">
            Years of Experience:
            <span className="text-5xl text-orange-500">
              {" "}
              {trainerDetails.years_of_experience}
            </span>
          </h4>
          <div className=" py-4 flex">
            <h4 className="font-bold text-3xl">Connect with Him on On : </h4>
            <div className="flex gap-4 ml-8">
              <FontAwesomeIcon
                icon={faFacebook}
                color="yellow"
                size="2xl"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faTwitter}
                size="2xl"
                color="yellow"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faLinkedin}
                color="yellow"
                size="2xl"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="availability-table text-white ">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {trainerAvailability?.map((item, index) => (
                <tr key={index}>
                  <td>{days[index]}</td>
                  <td>
                    <ul className="flex flex-row gap-16">
                      {Object.entries(item).map(([timeSlot, available]) => (
                        <li key={timeSlot} className="flex gap-8">
                          {timeSlot}:{" "}
                          {available ? (
                            <div>
                              <button className="btn btn-error">
                                Enrole Now
                              </button>
                            </div>
                          ) : (
                            "Already Booked"
                          )}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
