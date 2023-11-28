import Banner from "../Banner/Banner";
import ClassesForYou from "./ClassesForYou/ClassesForYou";
import Featured from "./Featured/Featured";
import Newsletter from "./Newsletter/Newsletter";
import OurTrainers from "./OurTrainers/OurTrainers";
import Testimonials from "./Testimonials/Testimonials";
import WhoAreWe from "./WhoAreWe/WhoAreWe";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <WhoAreWe></WhoAreWe>
            <ClassesForYou></ClassesForYou>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
            <OurTrainers></OurTrainers>
        </div>
    );
};

export default Homepage;