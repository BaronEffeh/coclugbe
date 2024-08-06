import React from "react";
import { Link } from "react-router-dom";
import './churchMembers.css';
import MemberImg from '../../../assets/aboutImgs/Ellipse.png';
import Member1Img from '../../../assets/aboutImgs/member1.jpg';
import Member2Img from '../../../assets/aboutImgs/member2.jpg';
import Member3Img from '../../../assets/aboutImgs/member3.jpg';
import FacebookIcon from '../../../assets/aboutImgs/facebook-icon.png';
import TwitterIcon from '../../../assets/aboutImgs/twitter-icon.png';
import LinkedinIcon from '../../../assets/aboutImgs/linkedin-icon.png';

const ChurchMembers = () => {
   return (
      <div className="churchMembers">
         <div className="churchMembersHead">
            <h6>CHURCH MEMBERS</h6>
            <h2>MEET OUR INSIRATIONAL TEAM</h2>
         </div>

         <div className="churchMembersCards">
            <div className="churchMembersCard">
               <img src={Member3Img} alt="" className="memberImg" />
               <h3>Rupert Kukwa</h3>
               <p>Preacher, COC Lugbe</p>
               <div className="churchMembersSocials">
                  <Link to="demo-link" ><img src={FacebookIcon} alt="" /></Link>
                  <Link to="demo-link" ><img src={TwitterIcon} alt="" /></Link>
                  <Link to="demo-link" ><img src={LinkedinIcon} alt="" /></Link>
               </div>
            </div>

            <div className="churchMembersCard">
               <img src={Member2Img} alt="" className="memberImg" />
               <h3>Ikechukwa Michael</h3>
               <p>Member, COC Lugbe</p>
               <div className="churchMembersSocials">
                  <Link to="demo-link" ><img src={FacebookIcon} alt="" /></Link>
                  <Link to="demo-link" ><img src={TwitterIcon} alt="" /></Link>
                  <Link to="demo-link" ><img src={LinkedinIcon} alt="" /></Link>
               </div>
            </div>

            <div className="churchMembersCard">
               <img src={Member1Img} alt="" className="memberImg" />
               <h3>Ifiok Emmanuel</h3>
               <p>Youth Leader, COC Lugbe</p>
               <div className="churchMembersSocials">
                  <Link to="demo-link" ><img src={FacebookIcon} alt="" /></Link>
                  <Link to="demo-link" ><img src={TwitterIcon} alt="" /></Link>
                  <Link to="demo-link" ><img src={LinkedinIcon} alt="" /></Link>
               </div>
            </div>

            <div className="churchMembersCard">
               <img src={MemberImg} alt="" className="memberImg" />
               <h3>Mfon Bassey</h3>
               <p>Member, COC Lugbe</p>
               <div className="churchMembersSocials">
                  <Link to="demo-link" ><img src={FacebookIcon} alt="" /></Link>
                  <Link to="demo-link" ><img src={TwitterIcon} alt="" /></Link>
                  <Link to="demo-link" ><img src={LinkedinIcon} alt="" /></Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ChurchMembers;