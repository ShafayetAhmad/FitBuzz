import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const UserLogin = () => {
  useEffect(() => {
    document.title = "GigRapid | Login";
  }, []);
  const { userLogin, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState(null);
  const handleGoogleSignIn = async () => {
    googleLogin()
      .then((userCredentials) => {
        console.log(userCredentials);
        const name = userCredentials.user.displayName;
        const email = userCredentials.user.email;
        const photoUrl = userCredentials.user.photoURL;
        const userDetails = {
          userName: name,
          userEmail: email,
          photoURL: photoUrl,
        };
        axios
          .post(" ", {
            userDetails,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(`Invalid Email/Password. Please Enter Correctly. `);
      });
  };
  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    userLogin(email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(
          `Invalid Email/Password. Please enter correct credentials. ${error.message}`
        );
      });
  };

  return (
    <div className="lg:flex ">
      <section className="flex-1">
        <div className="py-4">
          <div className="rounded-lg mx-auto max-w-xl bg-[#f2f2f7] dark:bg-gray-800 px-5 py-12 text-center md:px-10">
            <h2 className="text-3xl font-bold mb-4 md:text-5xl">Login Now</h2>

            <button
              onClick={handleGoogleSignIn}
              href="#"
              className="mx-auto flex max-w-sm justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] w-full"
            >
              <FontAwesomeIcon icon={faGoogle} size="xl" className="mr-2" />
              <p className="font-bold">Log in with Google</p>
            </button>
            <div className="mx-auto mb-8 mt-8 flex max-w-sm justify-around">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg"
                alt=""
                className="inline-block"
              />
              <p className="text-sm text-[#647084] dark:text-white">
                or Login with email
              </p>
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg"
                alt=""
                className="inline-block"
              />
            </div>
            {loginError && (
              <div className="form-control mb-4">
                <p className="text-lg text-red-500">{loginError}</p>
              </div>
            )}
            <form
              onSubmit={handleUserLogin}
              className="mx-auto mb-4 max-w-sm pb-4"
              name="wf-form-password"
              method="get"
            >
              <div className="relative">
                <FontAwesomeIcon
                  className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  icon={faEnvelope}
                />
                <input
                  type="email"
                  className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
                  maxLength="256"
                  name="email"
                  placeholder="Email Address"
                  required=""
                />
              </div>

              <div className="relative mb-4 pb-2">
                <FontAwesomeIcon
                  className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                  icon={faLock}
                />
                <input
                  type="password"
                  className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
                  name="password"
                  placeholder="Password "
                  required=""
                />
              </div>

              <button
                type="submit"
                href="#"
                className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] w-full"
              >
                <p className="mr-6 font-bold">Login To GigRapid</p>
                <div className="h-4 w-4 flex-none">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </button>
            </form>
            <p className=" text-[#636262] dark:text-white">
              Do not have an account?{" "}
              <Link
                to={"/register"}
                className="font-[Montserrat,_sans-serif] text-sm font-bold text-black dark:text-yellow-300 "
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default UserLogin;