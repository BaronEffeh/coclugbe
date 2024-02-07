import ChurchBenefits from "./ChurchBenefits";
import ChurchRelevant from "./ChurchRelevant";
import Intro from "./Intro";
import LoveAndCompassion from "./LoveAndCompassion";
import UpcomingSermons from "./UpcomingSermons";

export default function HomeRoot() {
    return (
        <div className="home">
            <Intro />

            <ChurchRelevant />

            <LoveAndCompassion />

            <ChurchBenefits />

            <UpcomingSermons />
        </div>
    );
}