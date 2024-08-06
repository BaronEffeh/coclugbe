import "../home/LoveAndCompassion/loveAndCompassion.css";
import manPraying from "../../assets/a-bearded-man-praying-5206040.png"
import readingBook from "../../assets/man-and-woman-reading-book-while-sitting-on-pews-8468470.png";
import peopleOnSeat from "../../assets/people-sitting-on-brown-pews-8674151.png";

export default function LoveAndCompassion() {
   return (
      <div className="loveAndCompassion">
         <h5 className="loveAndCompassionTitle">WELCOME TO THE CHURCH</h5>
         <h2 className="loveAndCompassionDesc">LOVE AND COMPASSION</h2>
         <p className="loveAndCompassionPara">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quaerat nemo laudantium libero cum! Explicabo aperiam exercitationem, ipsum ipsa laborum natus culpa alias unde velit delectus itaque inventore eaque nihil?</p>
         <div className="loveAndCompassionImgs">
            <img src={manPraying} alt="Man Praying" className="loveAndCompassionImg" />
            <img src={readingBook} alt="People Reading" className="loveAndCompassionImg" />
            <img src={peopleOnSeat} alt="People Sitting" className="loveAndCompassionImg" />
         </div>
      </div>
   );
}