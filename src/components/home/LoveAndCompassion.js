import { NavLink } from "react-router-dom";
import "./loveAndCompassion.css";
import manPraying from "../../assets/a-bearded-man-praying-5206040.png";
import readingBook from "../../assets/man-and-woman-reading-book-while-sitting-on-pews-8468470.png";
import peopleOnSeat from "../../assets/people-sitting-on-brown-pews-8674151.png";
import arrow from "../../assets/Shape.png";

export default function LoveAndCompassion() {
    return (
        <div className="loveAndCompassion">
            <h5 className="loveAndCompassionTitle">SUB-HEADLINE</h5>
            <h2 className="loveAndCompassionDesc">LOVE AND COMPASSION</h2>
            <p className="loveAndCompassionPara">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quaerat nemo laudantium libero cum! Explicabo aperiam exercitationem, ipsum ipsa laborum natus culpa alias unde velit delectus itaque inventore eaque nihil?</p>
            <button className="loveAndCompassionBtn">READ MORE</button>
            <div className="loveAndCompassionImgs">
                <img src={manPraying} alt="Man Praying" className="loveAndCompassionImg" />
                <img src={readingBook} alt="People Reading" className="loveAndCompassionImg" />
                <img src={peopleOnSeat} alt="People Sitting" className="loveAndCompassionImg" />
            </div>
            <div className="missionAndVision">
                <h5 className="missionAndVisionTitle">OUR MISSION & VISION</h5>
                <h3 className="missionAndVisionDesc">CELEBRATE WITH US</h3>
                <p className="missionAndVisionPara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum dolores rem nobis non quisquam iusto et placeat alias iure.</p>
                <NavLink to="demo">Read More <img src={arrow} alt="Read More Arrow" className="readMoreArrow" /> </NavLink>
            </div>
        </div>
    );
}