import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const UserBooked = () => {
  const handleJoinNow = (type) => {
      console.log("handleJoinNow", type);
      
  };
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const trainerId = searchParams.get("trainer");
  const day = searchParams.get("day");
  const time = searchParams.get("time");
  console.log(trainerId, day, time);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 px-8">
        <div className="w-full border-4 px-8 py-8 text-center bg-slate-500">
          <h3 className="text-white py-8 text-2xl font-bold ">Silver</h3>
          <p className="text-white font-serif text-xl mb-6">
            The Silver Class is a fundamental fitness program designed for
            beginners focusing on cardio, strength, and flexibility exercises.
          </p>
          <FontAwesomeIcon
            icon={faHeartPulse}
            color="red"
            size="2xl"
            className="mt-4 absolute"
          ></FontAwesomeIcon>
          <div className="py-8">
            <img src="https://i.ibb.co/Jp3Zb2h/class-thumbnail-2.jpg" alt="" />
          </div>
          <h4 className="text-white py-4">Trainer: Trainer Name</h4>
          <p className="text-white">Start Date: {day}</p>
          <p className="text-white py-4">Time: {time}</p>
          <p className="text-white font-bold text-lg py-4">Montly Fee: $50</p>

          <button
            onClick={() => handleJoinNow("silver")}
            className="btn btn-outline text-white w-full hover:bg-orange-600 border-white border-1"
          >
            JOIN NOW
          </button>
        </div>
        <div className="w-full border-4 px-8 py-8 text-center bg-yellow-400 text-[rgb(41,39,40)]">
          <h3 className="text-[rgb(41,39,40)] py-8 text-2xl font-bold ">
            Gold
          </h3>
          <p className="text-[rgb(41,39,40)] font-serif text-xl ">
            The Gold Class is an intermediate-level fitness program that
            combines various workout techniques, including high-intensity
            training, resistance training, and core exercises.
          </p>
          <FontAwesomeIcon
            icon={faHeartPulse}
            color="red"
            size="2xl"
            className="mt-4 absolute"
          ></FontAwesomeIcon>
          <div className="py-8 ">
            <img src="https://i.ibb.co/Jp3Zb2h/class-thumbnail-2.jpg" alt="" />
          </div>
          <h4 className=" py-4">Trainer: Trainer Name</h4>
          <p className="">Start Date: {day}</p>
          <p className=" py-4">Time: {time}</p>
          <p className=" py-4 font-bold text-lg">Montly Fee: $75</p>

          <button
            onClick={() => handleJoinNow("gold")}
            className="btn btn-outline text-white w-full hover:bg-orange-600 border-white border-1"
          >
            JOIN NOW
          </button>
        </div>
        <div className="w-full border-4 px-8 py-8 text-center bg-green-500 text-black">
          <h3 className="text-black py-8 text-2xl font-bold ">Diamond</h3>
          <p className="text-black font-serif text-xl ">
            The Diamond Class is an advanced fitness program tailored for
            experienced individuals seeking a comprehensive workout regimen,
            including personalized coaching.
          </p>
          <FontAwesomeIcon
            icon={faHeartPulse}
            color="red"
            size="2xl"
            className="mt-4 absolute"
          ></FontAwesomeIcon>
          <div className="py-8">
            <img src="https://i.ibb.co/Jp3Zb2h/class-thumbnail-2.jpg" alt="" />
          </div>
          <h4 className=" py-4">Trainer: Trainer Name</h4>
          <p className="">Start Date: {day}</p>
          <p className=" py-4">Time: {time}</p>
          <p className="font-bold text-lg py-4">Montly Fee: $100</p>

          <button
            onClick={() => handleJoinNow("diamond")}
            className="btn btn-outline text-white w-full hover:bg-orange-600 border-white border-1"
          >
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserBooked;
