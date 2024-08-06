import "./intro.css";
import bgImg from "../../../assets/woman-in-orange-coat-with-black-and-brown-scarf-5418305.jpg";

export default function Intro() {
    return (
        <div id="intro">
            <div className="introContent">
                <span className="introTitle">WELCOME TO THE CHURCH OF CHRIST</span>
                <span className="introLarge"><h1>BECOME A PART OF <br />OUR COMMUNITY</h1></span>
                <button className="introBtn">LEARN MORE</button>
                <div className="introPara">
                    <span className="hLine"><hr className="hrLine" /></span><p className="introParaText">Lorem ipsum dolor sit, amet consectetur adipisicing <br />elit. Maiores, debitis.</p>
                </div>
            </div>
            <img src={bgImg} alt="Intro" className="bgImg" />
        </div>
    );
}