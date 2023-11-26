import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Banner = () => {
  AOS.init();

  AOS.init({
    disable: false, 
    startEvent: "DOMContentLoaded", 
    initClassName: "aos-init", 
    animatedClassName: "aos-animate", 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
    offset: 120,
    delay: 0, 
    duration: 400,
    easing: "ease", 
    once: false, 
    mirror: false, 
    anchorPlacement: "top-bottom", 
  });
  const imageUrls = [
    "https://i.ibb.co/cJ55QKK/slider-image-3.jpg",
    "https://i.ibb.co/LxFryGP/slider-image-2.jpg",
    "https://i.ibb.co/jGVfDG5/slider-image-1.jpg",
  ];

  return (
    <div className="w-full relative mb-10">
      <AwesomeSlider className="rounded-3xl">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="relative rounded-3xl">
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start pl-24 justify-center">
              <div data-aos="fade-down">
                <p className="text-white font-bold text-2xl mb-8">
                  BEST GYM OF THE CITY FOR FITNESS
                </p>
              </div>
              <div data-aos="fade-left">
                <h1 className="text-white text-7xl font-bold">
                  TRAIN WITH BEST
                </h1>
              </div>
              <div data-aos="fade-right">
                <h1 className="text-orange-600 text-9xl font-bold">
                  GYM EXPERIENCE{" "}
                </h1>
              </div>
              <div data-aos="fade-left">
                <h1 className="text-white text-7xl font-bold">IN FITBUZZ</h1>
              </div>
              <a href="/all-classes">
                <button className="btn btn-info w-64 h-16 mt-16 text-xl hover:bg-orange-600 hover:text-white">
                  See All Classes
                </button>
              </a>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
