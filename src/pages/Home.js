import React from "react";
import ChurchBenefits from "../components/home/ChurchBenefits/ChurchBenefits";
import ChurchRelevant from "../components/home/ChurchRelevant/ChurchRelevant";
import Intro from "../components/home/Intro/Intro";
import LoveAndCompassion from "../components/home/LoveAndCompassion/LoveAndCompassion";
import UpcomingSermons from "../components/home/UpcomingSermons/UpcomingSermons";
import WorldAroundUs from "../components/home/WorldAroundUs/WorldAroundUs";
import HomeBlog from "../components/home/HomeBlog/HomeBlog";

export default function Home() {
    return (
        <div className="home">
            <Intro />

            <ChurchRelevant />

            <LoveAndCompassion />

            <ChurchBenefits />

            <UpcomingSermons />

            <WorldAroundUs />

            <HomeBlog />
        </div>
    );
}