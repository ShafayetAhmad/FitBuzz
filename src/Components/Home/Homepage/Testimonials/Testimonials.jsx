import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h2 className="mb-8 text-center text-3xl font-bold md:mb-14 md:text-5xl">
            What our clients are saying
          </h2>
          <ul className="mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:mb-16">
            <li className="grid gap-8 bg-[#1f1f1f] p-8 md:p-10">
              <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
              <p>
                I have discovered my true strength at this fitness center. The
                trainers are incredibly motivating, pushing me beyond my limits.
                It is not just a gym; it is a community of support and progress.
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png"
                  alt=""
                  className="mr-4 h-16 w-16"
                />
                <div className="flex flex-col">
                  <h6 className="font-bold">Sarah Johnson</h6>
                  <p className="text-sm">Fitness Enthusiast</p>
                </div>
              </div>
            </li>
            <li className="grid gap-8 bg-[#1f1f1f] p-8 md:p-10">
              <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
              <p>
                Joining this fitness center has transformed my lifestyle. The
                facilities are top-notch, and the trainers are dedicated to
                helping me achieve my fitness goals. It is more than a gym; it
                is a place for personal growth.
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb5e3ea08ab4c244194a_Ellipse%205-4.png"
                  alt=""
                  className="mr-4 h-16 w-16"
                />
                <div className="flex flex-col">
                  <h6 className="font-bold">Alexandra Brown</h6>
                  <p className="text-sm">Fitness Enthusiast</p>
                </div>
              </div>
            </li>
            <li className="grid gap-8 bg-[#1f1f1f] p-8 md:p-10">
              <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
              <p>
                This fitness center has redefined my fitness journey. The
                environment is invigorating, and the trainers are always
                motivating. I have achieved results I never thought possible.
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb614a296368b383467c_Ellipse%205-3.png"
                  alt=""
                  className="mr-4 h-16 w-16"
                />
                <div className="flex flex-col">
                  <h6 className="font-bold">Michael Adams</h6>
                  <p className="text-sm">Fitness Enthusiast</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex justify-center flex-col sm:flex-row">
            <a
              href="#"
              className="flex items-center justify-center border-[1.5px] border-solid border-white py-4 text-center font-semibold px-8 mr-5 lg:mr-8 mb-4 sm:mb-0"
            >
              <p className="mr-6 font-bold">Get Started</p>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Arrow Right</title>
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
