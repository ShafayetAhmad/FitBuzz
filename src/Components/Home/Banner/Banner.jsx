import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Banner = () => {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  const imageUrls = [
    "https://i.ibb.co/cJ55QKK/slider-image-3.jpg",
    "https://i.ibb.co/LxFryGP/slider-image-2.jpg",
    "https://i.ibb.co/jGVfDG5/slider-image-1.jpg",
  ];

  return (
    <div className="w-full relative">
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
                    <button className='btn btn-info w-48 mt-8 text-xl'>See All Classes</button>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
