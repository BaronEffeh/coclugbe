import { NavLink } from "react-router-dom";
import "./upcomingEvents.css";
import EventImg from "../../../assets/a-man-and-woman-wearing-angel-costumes-8513040.png";
import ClockIcon from "../../../assets/clock-icon.svg";
import LocationIcon from "../../../assets/location-icon.svg";
import Arrow from "../../../assets/Shape.png";

export default function UpcomingSermons() {
    return (
        <div className="upcomingSermons">
            <h5 className="upcomingSermonsTitle">UPCOMING SERMONS</h5>
            <h2 className="upcomingSermonsDesc">JOIN US AND BECOME A PART OF SOMETHING GREAT</h2>
            <div className="upcomingEventContent">
                <div className="upcomingEventTextContent">
                    <span className="upcomingEventDate">
                        <h3>20</h3>
                        <p>JULY</p>
                    </span>
                    <div className="upcomingEventTextDetails">
                        <h6 className="upcomingEventTitle">UPCOMING EVENT</h6>
                        <h3 className="upcomingEventDesc">WATCH AND LISTEN TO OUR SERMONS</h3>
                        <p className="upcomingEventpara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, aperiam?</p>
                        <div className="sermonDateLocation">
                            <img src={ClockIcon} alt="" />
                            <p className="sermonDate"> Friday 23:39 IST Saturday 11:20 ISD</p>
                        </div>
                        <div className="sermonDateLocation">
                            <img src={LocationIcon} alt="" />
                            <p className="sermonVenu"> Along Airport Road, Lugbe, FCT - Abuja</p>
                        </div>
                        <button className="secondaryBtn">REGISTER</button>
                    </div>
                </div>
                <div className="upcomingEventImg">
                    <img src={EventImg} alt="EventImg" />
                </div>
            </div>
            <NavLink to="demo">View all Sermons<img src={Arrow} alt="Read More Arrow" className="readMoreArrow" /> </NavLink>
        </div>
    );
}