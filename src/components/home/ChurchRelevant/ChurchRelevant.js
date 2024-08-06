import "./churchrelevant.css";
import aboutIcon from "../../../assets/about_us_icon.png";
import getInvolvedIcon from "../../../assets/get_involved_icon.png";
import givingBack from "../../../assets/giving_back_icon.png";

export default function ChurchRelevant() {
    return (
        <div className="churchRelevant">
            <h5 className="churchRelevantTitle">SUB-HEADLINE</h5>
            <h2 className="churchRelevantDesc">A CHURCH THAT'S RELEVANT</h2>
            <div className="relevantBoxes">
                <div className="relevantBox">
                    <img src={aboutIcon} alt="About Icon" className="relevantBoxImg" />
                    <div className="relevantBoxText">
                        <h3 className="relevantBoxTextTitle">ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum nihil at nesciunt recusandae omnis enim beatae reiciendis rerum unde?</p>
                    </div>
                </div>
                <div className="relevantBox">
                    <img src={getInvolvedIcon} alt="Get Involved Icon" className="relevantBoxImg" />
                    <div className="relevantBoxText">
                        <h3 className="relevantBoxTextTitle">GET INVOLVED</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem maiores qui? Totam, eaque voluptatibus natus eos odit cupiditate optio.</p>
                    </div>
                </div>
                <div className="relevantBox">
                    <img src={givingBack} alt="Giving Back" className="relevantBoxImg" />
                    <div className="relevantBoxText">
                        <h3 className="relevantBoxTextTitle">GIVING BACK</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore pariatur, voluptates delectus nihil corporis porro earum quis assumenda maiores.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}