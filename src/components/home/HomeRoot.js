import ChurchRelevant from "./ChurchRelevant";
import Intro from "./Intro";
import LoveAndCompassion from "./LoveAndCompassion";

export default function HomeRoot() {
    return (
        <div className="home">
            <Intro />

            <ChurchRelevant />

            <LoveAndCompassion />
        </div>
    );
}