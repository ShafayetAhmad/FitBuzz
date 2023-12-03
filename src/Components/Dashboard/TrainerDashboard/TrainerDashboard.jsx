/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

const TrainerDashboard = ({ trainerEmail }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "SaturDay",
  ];
  const [slotsDetails, setSlotsDetails] = useState(null);
  useEffect(() => {
    axiosSecure
      .get(`/get-slots-for-trainer?email=${trainerEmail}`)
      .then((res) => setSlotsDetails(res.data));
  }, [setSlotsDetails, trainerEmail]);
  console.log(slotsDetails);
  return (
    <div>
      trainer dashboard
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-10 ">
        {slotsDetails?.map((slot, index) => (
          <div key={index}>
            <div className="flex flex-col items-center justify-center border-2 border-black">
              <div>{slot.slotName}</div>
              <div>{days[slot.day]}</div>
              <div>{slot.time}</div>
              <div>{slot.slotName}</div>
              <div>
                {slot.bookedUserEmail ? (
                  <div>{`Enrolled User: ${slot.bookedUserEmail}`}</div>
                ) : (
                  <div>No One Enrolled Yet</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerDashboard;
