import React from "react";
import './viewAllEvents.css';
import { Link } from "react-router-dom";

const ViewAllEvents = () => {
   return (
      <div className="viewAllEvents">
         <h2>VIEW ALL EVENTS</h2>

         <div className="eventCards">

            <div className="eventCard">
               <div className="eventCardDate">
                  <h4>20</h4>
                  <p>July</p>
               </div>
               <div className="eventCardDetails">
                  <h6>UPCOMING EVENT</h6>
                  <h3>100 RANDOM ACTS OF KINDNESS</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Friday 23:39 IST Saturday 11:20 ISD</p>
                  <p>Along Airport Road, Lugbe, FCT - Abuja</p>
               </div>
            </div>

            <div className="eventCard">
               <div className="eventCardDate">
                  <h4>20</h4>
                  <p>July</p>
               </div>
               <div className="eventCardDetails">
                  <h6>UPCOMING EVENT</h6>
                  <h3>FAITH IS A PROCESS, NOT A DESTINATION</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Friday 23:39 IST Saturday 11:20 ISD</p>
                  <p>Along Airport Road, Lugbe, FCT - Abuja</p>
               </div>
            </div>

            <div className="eventCard">
               <div className="eventCardDate">
                  <h4>20</h4>
                  <p>July</p>
               </div>
               <div className="eventCardDetails">
                  <h6>UPCOMING EVENT</h6>
                  <h3>THERE IS NOTHING IMPOSSIBLE</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Friday 23:39 IST Saturday 11:20 ISD</p>
                  <p>Along Airport Road, Lugbe, FCT - Abuja</p>
               </div>
            </div>

            <div className="eventCard">
               <div className="eventCardDate">
                  <h4>20</h4>
                  <p>July</p>
               </div>
               <div className="eventCardDetails">
                  <h6>UPCOMING EVENT</h6>
                  <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Friday 23:39 IST Saturday 11:20 ISD</p>
                  <p>Along Airport Road, Lugbe, FCT - Abuja</p>
               </div>
            </div>
            <Link to="sermon-events">View all Sermon</Link>

         </div>
      </div>
   );
}

export default ViewAllEvents;