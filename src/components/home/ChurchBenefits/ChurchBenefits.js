import "./churchBenefits.css";
import watchAndListen1 from "../../../assets/fashion-man-love-people-5875438.png";
import watchAndListen2 from "../../../assets/a-statue-holding-a-holy-book-5613134.png";
import watchAndListen3 from "../../../assets/man-people-woman-connection-6276711.png";
import watchAndListen4 from "../../../assets/woman-in-blue-tank-top-and-man-in-red-shirt-painting-3795022.png";

export default function ChurchBenefits() {
    return (
        <div className="churchBenefits">
            <h5 className="churchBenefitsTitle">WATCH AND LISTEN</h5>
            <h2 className="churchBenefitsDesc">BENEFITS OF BEING A MEMBER OF THE CHURCH</h2>
            <div className="churchBenefitsImgs">
                <img src={watchAndListen1} alt="Watch And Listen" className="churchBenefitsImg" />
                <img src={watchAndListen2} alt="Watch And Listen" className="churchBenefitsImg" />
                <img src={watchAndListen3} alt="Watch And Listen" className="churchBenefitsImg" />
                <img src={watchAndListen4} alt="Watch And Listen" className="churchBenefitsImg" />
            </div>
        </div>
    );
}