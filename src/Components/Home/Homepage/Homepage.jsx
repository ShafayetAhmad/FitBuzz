import Banner from "../Banner/Banner";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import WhoAreWe from "./WhoAreWe/WhoAreWe";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <WhoAreWe></WhoAreWe>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Homepage;