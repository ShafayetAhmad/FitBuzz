import { useContext, useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const PaymentPage = () => {
  const { user } = useContext(AuthContext);
  const [premiumMemberData, setPremiumMemberData] = useState(null);
  const [trainerName, setTrainerName] = useState(null);

  useEffect(() => {
    axiosSecure
      .get(`/get-premium-member-payment-data?email=${user.email}`)
      .then((res) => {
        setPremiumMemberData(res.data);
        axiosSecure
          .get(`/getTrainerEmail?id=${res.data.trainerId}`)
          .then((res) => {
            setTrainerName(res.data);
          })
          .catch((error) => {
            console.error("Error fetching trainer name:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching premium member data:", error);
      });
  }, [user]);

  const handleConfirmPayment = () => {
    console.log("Payment confirmed!");
    const paymentData = {
      trainerName: trainerName,
      memberName: user.displayName,
      memberEmail: user.email,
      membershipType: premiumMemberData.memberType,
      slot: premiumMemberData.memberType,
      price: premiumMemberData.price,
    };
    axiosSecure
      .post("/payment-from-booked-user", { paymentData: paymentData })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="container mx-auto py-8 max-w-sm">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Payment Details
      </h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">
          Trainer Name: {trainerName}
        </h3>
        <p className="mb-2">Slot: {premiumMemberData?.slot}</p>
        <p className="mb-2">Package: {premiumMemberData?.type}</p>
        <p className="mb-2">Price: ${premiumMemberData?.price}</p>
        <p className="mb-2">
          Your Name: {user.displayName && user.displayName}
        </p>
        <p className="mb-4">Your Email: {user.email}</p>

        <button
          onClick={handleConfirmPayment}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
