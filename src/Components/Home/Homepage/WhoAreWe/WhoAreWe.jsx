import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useContext } from "react";
const WhoAreWe = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="hero bg-gray-900 text-white">
        <div className="flex hero-content flex-col lg:flex-row">
          <div className="flex-1">
            <img
              src="https://i.ibb.co/RgcFjJ2/whoarewe-img.jpg"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-center">Who Are We?</h1>
            <p className="py-6 px-6 text-xl text-justify ">
              We are FitBuzz, your ultimate destination for a transformative
              fitness experience. At FitBuzz, we are more than just a gym – we
              are your partners in wellness. Our state-of-the-art facilities
              offer a holistic approach to health, combining cutting-edge
              equipment with expert guidance. Embark on a journey towards a
              healthier you, supported by our passionate team of trainers and
              coaches. Discover personalized workout routines tailored to your
              unique goals, whether its building strength, boosting endurance,
              or achieving mental balance. Join our vibrant community that
              fosters motivation and encouragement, where every step forward is
              celebrated. At FitBuzz, we believe in empowering you to push your
              limits and unleash your full potential. Step into a world of
              fitness excellence, where your fitness aspirations become a
              reality. Lets embark on this inspiring fitness journey together at
              FitBuzz!
            </p>
            <p className="text-center">
              <Link to={user ? "/all-classes" : "/login"}>
                <button className="btn btn-primary w-40 text-xl">
                  Join Us
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
