import React from "react";
import UpcomingSermons from '../components/home/UpcomingSermons/UpcomingSermons';
import PageBanner from "../components/page_banner/PageBanner";
import ViewAllEvents from "../components/sermons/ViewAllEvents/ViewAllEvents";

const SermonPage = () => {
   return (
      <div className="sermonPage">
         <PageBanner page="sermons" />
         <UpcomingSermons />
         <ViewAllEvents />
      </div>
   );
}

export default SermonPage;