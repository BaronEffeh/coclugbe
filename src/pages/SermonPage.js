import React from "react";
import UpcomingSermons from '../components/home/UpcomingSermons/UpcomingSermons';
import PageBanner from "../components/page_banner/PageBanner";

const SermonPage = () => {
   return (
      <div className="sermonPage">
         <PageBanner page="sermon" />
         <UpcomingSermons />
      </div>
   );
}

export default SermonPage;