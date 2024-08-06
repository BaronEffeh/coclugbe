import React from "react";
import PageBanner from "../components/page_banner/PageBanner";
import AboutIntro from "../components/about_us/AboutIntro";
import VisionAndMission from "../components/about_us/VisionAndMission/VisionAndMission";
import Benefits from "../components/about_us/Benefits/Benefits";
import ChurchMembers from "../components/about_us/ChurchMembers/ChurchMembers";

const AboutUs = () => {
   return (
      <div className="aboutUs">
         <PageBanner page='about-us' />

         <AboutIntro />

         <VisionAndMission />

         <Benefits />

         <ChurchMembers />
      </div>
   );
}

export default AboutUs;