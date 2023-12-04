import { useEffect, useState } from "react";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import ClassesForYou from "../../Home/Homepage/ClassesForYou/ClassesForYou";

/* eslint-disable react/prop-types */
const UserDashboard = ({ user }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [userActivity, setUserActivity] = useState(null);
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/get-user-activity?email=${user.userEmail}`)
      .then((res) => {
        setUserActivity(res.data);

        const trainers = res.data?.allSlots.map(
          (element) => element.trainerName
        );

        if (trainers) {
          setTrainers((prevTrainers) => [
            ...new Set([...prevTrainers, ...trainers]),
          ]);
        }
      });
  }, [user, setTrainers]);

  return (
    <div>
      <div>
        <h3 className="text-center font-bold text-3xl ">
          Hey, <span className="text-4xl text-orange-500">{user.userName}</span>
          <div className="py-10">
            <p>
              Your Trainer(s):{" "}
              {trainers.map((trainer) => (
                <span className="font-bold text-4xl" key={trainer.Id}>
                  {trainer},
                </span>
              ))}
            </p>
          </div>
          <h3 className=" py-10 text-4xl text-orange-500">
            Your Todays Activities!
          </h3>
        </h3>
        {
          <div>
            {userActivity?.filteredSlots?.length > 0 ? (
              userActivity.filteredSlots.map((slot, index) => (
                <div key={index}>
                  {console.log(slot)}
                  {slot.slotName}
                </div>
              ))
            ) : (
              <div>
                <p className="font-bold text-2xl text-center">
                  Hey You Have No Activity Today! Its A Holiday For You
                </p>
              </div>
            )}
          </div>
        }
        {
          <div className="py-20">
            <h3 className="font-bold text-4xl text-center py-10">
              All Classes That You Enrolled
            </h3>
            <div className="grid  lg:grid-cols-3 grid-cols-2 gap-4 px-10">
              {userActivity?.allSlots?.length > 0 ? (
                userActivity.allSlots.map((slot, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <img
                      className="w-full"
                      src={slot.thumbnail}
                      alt="Slot Thumbnail"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-xl mb-2">
                        {slot.slotName}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Weekly Training Day: {days[slot.day]}
                      </p>
                      <p className="text-gray-600 mb-2">Time: {slot.time}</p>
                      <p className="text-gray-600 mb-2">
                        Trainer: {slot.trainerName}
                      </p>
                      <p className="text-gray-600 mb-2">
                        Trainer Email: {slot.trainerEmail}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <p className="font-bold text-2xl text-center">
                    Hey, you have no activity today! Its a holiday for you.
                  </p>
                </div>
              )}
            </div>
          </div>
        }
      </div>
      <ClassesForYou></ClassesForYou>
    </div>
  );
};

export default UserDashboard;
