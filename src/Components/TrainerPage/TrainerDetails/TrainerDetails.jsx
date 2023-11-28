import { useParams } from "react-router-dom";

const TrainerDetails = () => {
  const id = useParams();
  console.log(id);
  return <div>Trainer Details {id}</div>;
};

export default TrainerDetails;
