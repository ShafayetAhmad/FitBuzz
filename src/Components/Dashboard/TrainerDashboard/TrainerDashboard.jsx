/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import AddNewForum from "../AddNewForum/AddNewForum";

const TrainerDashboard = ({ user }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "SaturDay",
  ];
  const [slotsDetails, setSlotsDetails] = useState(null);
  const [bookedUsers, setBookedUsers] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/get-slots-for-trainer?email=${user.userEmail}`)
      .then((res) => {
        setSlotsDetails(res.data.allSlots);
        setBookedUsers(res.data.bookedUsers);
      });
  }, [setSlotsDetails, user]);
  // console.log(bookedUsers[0]?.userName);
  return (
    <div>
      <h3 className="font-bold text-3xl py-8 text-center">Trainer Dashboard</h3>
      <h3 className="font-bold text-3xl py-8 text-center">
        Hey, Trainer{" "}
        <span className="text-4xl text-orange-500">{user.userName}</span>
      </h3>
      <p className="text-center font-bold text-3xl pb-10">
        Have a look at All your Slots
      </p>
      <div className="grid grid-cols-3 gap-4 mx-10">
        {slotsDetails?.map((slot, index) => (
          <div
            key={index}
            className="border border-black rounded-lg overflow-hidden"
          >
            <div className="p-4 flex flex-col items-center justify-center">
              <div className="font-bold mb-2">{slot.slotName}</div>
              <div className="text-gray-600 mb-2">{days[slot.day]}</div>
              <div className="text-lg font-semibold mb-2">{slot.time}</div>
              <div className="text-sm">
                {slot.bookedUserEmail ? (
                  <div className="text-green-600 text-lg">{`Enrolled User: ${slot.bookedUserEmail}`}</div>
                ) : (
                  <div className="text-red-600 text-lg">
                    No One Enrolled Yet
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-center text-4xl font-bold py-10">
          All Students Enrolled under you:{" "}
        </h3>
        <div>
          {bookedUsers.length > 0 &&
            bookedUsers.map((user) => (
              <div key={user.userId}>
                <div className="grid lg:grid-cols-3 gap-4 grid-cols-1">
                  <div className="mx-8 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={user.photoURL}
                        alt=""
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-xl font-semibold">
                        Name: {user.userName}
                      </p>
                      <p className="text-gray-600">Email: {user.userEmail}</p>
                      <button className="btn btn-error mt-4 transition duration-300 ease-in-out transform hover:scale-105 text-white">
                        Send Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {bookedUsers.length === 0 && (
            <p className="text-center font-bold text-xl">
              No students enrolled yet.
            </p>
          )}
        </div>
        <AddNewForum userType={"trainer"}></AddNewForum>
      </div>
    </div>
  );
};

export default TrainerDashboard;
