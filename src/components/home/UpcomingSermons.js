import "./upcomingEvents.css";
import eventImg from "../../assets/a-man-and-woman-wearing-angel-costumes-8513040.png";

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
                    <h6 className="upcomingEventTitle">UPCOMING EVENT</h6>
                    <h3 className="upcomingEventDesc">WATCH AND LISTEN TO UOR SERMONS</h3>
                    <p className="upcomingEventpara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, aperiam?</p>
                    <p>Friday 23:39 IST <br />Saturday 11:20 ISD</p>
                    <p>Along Airport Road, Lugbe, <br />FCT - Abuja</p>
                    <button className="secondaryBtn">REGISTER</button>
                </div>
                <div className="upcomingEventImg">
                    <img src={eventImg} alt="EventImg" />
                </div>
            </div>
        </div>
    );
}