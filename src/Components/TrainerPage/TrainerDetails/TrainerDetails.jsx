import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

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
    <>
      <div>hello</div>
    </>
  );
};

export default TrainerDetails;
