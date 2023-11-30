import { useRef, useState } from "react";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

const BeATrainer = () => {
  const [img, setImg] = useState({});
  const formRef = useRef(null);

  const handleImageLink = async (e) => {
    const image = e?.target?.files?.[0];
    setImg({ image: image });
    console.log(image);
  };
  const [skills, setSkills] = useState({
    Weightlifting: false,
    Cardio: false,
    Nutrition: false,
    Yoga: false,
    Pilates: false,
    Running: false,
    Swimming: false,
    Cycling: false,
    MartialArts: false,
    Dance: false,
    Hiking: false,
    Meditation: false,
    Other: false,
  });
  const [days, setDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    SaturDay: false,
  });
  const handleSkillsChange = (e) => {
    const { name, checked } = e.target;
    setSkills({ ...skills, [name]: checked });
  };
  const handleDaysChange = (e) => {
    const { name, checked } = e.target;
    setDays({ ...days, [name]: checked });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosSecure.post(
        "https://api.imgbb.com/1/upload?key=00ec1d814cd1395015cc3d3f30d0f4da",
        img,
        { headers: { "content-type": "multipart/form-data" } }
      );
      console.log("Image uploaded:", response.data.data.display_url);
      const formData = new FormData(formRef.current);
      const fullName = formData.get("fullName");
      const DOB = formData.get("dob");
      const age = calculateAge(DOB);
      const profilePicture = response.data.data.display_url;
      const trainerSkills = skills;
      const startHour = formData.get("startHour");
      const startampm = formData.get("startampm");
      const startTime = `${startHour}:00${startampm}`;
      const endHour = formData.get("endHour");
      const endampm = formData.get("endampm");
      const endTime = `${endHour}:00${endampm}`;

      const trainingDays = days;
      const hourSlots = convertToHourSlots(startTime, endTime);
      const trainerStatus = "pending";

      const trainerFolio = {
        fullName: fullName,
        age: age,
        profilePicture: profilePicture,
        trainerSkills: trainerSkills,
        startTime: startTime,
        endTime: endTime,
        trainingDays: trainingDays,
        hourSlots: hourSlots,
        trainerStatus: trainerStatus,
      };
      axiosSecure
        .post("/add-trainer", { trainerFolio: trainerFolio })
        .then((res) => console.log(res));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const convertToHourSlots = (startTime, endTime) => {
    const slots = [];
    const [startHour, startMinute] = startTime.split(/:|(?=[apAP][mM])/);
    const [endHour, endMinute] = endTime.split(/:|(?=[apAP][mM])/);

    const start = new Date(
      2000,
      0,
      1,
      (startHour % 12) +
        (startTime.includes("pm") || startTime.includes("PM") ? 12 : 0),
      startMinute || 0
    );
    const end = new Date(
      2000,
      0,
      1,
      (endHour % 12) +
        (endTime.includes("pm") || endTime.includes("PM") ? 12 : 0),
      endMinute || 0
    );

    while (start < end) {
      const slotStart = start.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      start.setHours(start.getHours() + 1);
      const slotEnd = start.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      slots.push({ [`${slotStart}-${slotEnd}`]: false });
    }

    return slots;
  };
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const startTime = "7:00AM";
  const endTime = "10:00AM";

  const hourSlots = convertToHourSlots(startTime, endTime);
  console.log(hourSlots);

  return (
    <div>
      <form className="card-body" ref={formRef}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Full Name</span>
          </label>
          <input
            type="name"
            placeholder="Full Name"
            name="fullName"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email: dummy@mail.com</span>
          </label>
        </div>
        <div className="flex">
          <label className="label">
            <span className="label-text text-lg">Profile Picture</span>
          </label>
          <input
            type="file"
            className="border-2 p-2 border-black"
            onChange={handleImageLink}
            alt=""
          />
          <label className="label">
            <span className="label-text text-lg">Date Of Birth</span>
          </label>
          <input
            type="date"
            name="dob"
            className="border-black p-2 border-2 w-max-sm"
            alt=""
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Your Fitness Skills</span>
          </label>
          <div>
            {Object.entries(skills).map(([interest, isChecked]) => (
              <label key={interest} className="mx-1">
                <input
                  type="checkbox"
                  name={interest}
                  checked={isChecked}
                  onChange={handleSkillsChange}
                  className="mx-1"
                />
                {interest}
              </label>
            ))}
          </div>

          <div className="text-2xl my-4 ">
            <p className="inline mr-4">Available Time in A Days : (Select) </p>
            From:
            <select id="startHour" name="startHour">
              <option value="null">Hour</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select name="" id="">
              <option value="null">Minute</option>
              <option value="00">00</option>
            </select>
            <select name="startampm" id="ampm">
              <option value="null">select</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
            To:
            <select id="endHour" name="endHour">
              <option value="null">Hour</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select name="" id="">
              <option value="null">Minute</option>
              <option value="00">00</option>
            </select>
            <select name="endampm" id="endampm">
              <option value="null">select</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
        <div className="text-2xl">
          <p className="inline mr-4">Available Days in A Week: (Select) </p>
          {Object.entries(days).map(([days, isChecked]) => (
            <label key={days} className="mx-1">
              <input
                type="checkbox"
                name={days}
                checked={isChecked}
                onChange={handleDaysChange}
                className="mx-1"
              />
              {days}
            </label>
          ))}
        </div>
        <div className="form-control mt-6">
          <button
            className="btn btn-primary bg-orange-500 border-none text-2xl font-bold text-black"
            onClick={handleSubmit}
            type="submit"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default BeATrainer;
