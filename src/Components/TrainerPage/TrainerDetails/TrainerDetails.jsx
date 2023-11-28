import { useParams } from "react-router-dom";

const TrainerDetails = () => {
  const id = useParams();
  return <div>Trainer Details {id}</div>;
};

export default TrainerDetails;
