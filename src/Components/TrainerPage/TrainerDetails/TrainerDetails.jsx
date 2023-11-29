import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import timeGridPlugin from "@fullcalendar/timegrid";

import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FullCalendar from "@fullcalendar/react";

const TrainerDetails = () => {
  const id = useParams().id;
  const [trainerDetails, setTrainerDetails] = useState({});

  useEffect(() => {
    axiosSecure.get(`/getTrainerDetails?id=${id}`).then((data) => {
      console.log(data.data[0]);
      setTrainerDetails(data.data[0]);
    });
  }, [id]);
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
      <div className="text-white mx-8 text-2xl">
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          weekends={true}
          eventMinHeight={100}
          events={[
            { title: "event 1", date: "2023-11-29" },
            { title: "event 2", date: "2019-04-02" },
          ]}
        />
      </div>
    </div>
  );
};

export default TrainerDetails;
