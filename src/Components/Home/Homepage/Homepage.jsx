import Banner from "../Banner/Banner";
import Featured from "./Featured/Featured";
import WhoAreWe from "./WhoAreWe/WhoAreWe";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <WhoAreWe></WhoAreWe>
        </div>
    );
};

export default Homepage;