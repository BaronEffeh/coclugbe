import React from "react";
import FacebookIcon from "../../../assets/aboutImgs/facebook-icon.png";
import TwitterIcon from "../../../assets/aboutImgs/twitter-icon.png";
import LinkedinIcon from "../../../assets/aboutImgs/linkedin-icon.png";
import "./contactBody.css";

const ContactBody = () => {
   return (
      <div className="contactBody">
         <div className="contactBodyContent">
            <div className="contactForm">
               <h3>CONTACT FORM:</h3>
               <form action="">
                  <input type="text" placeholder="Your full Name" />
                  <input type="email" placeholder="Your Email" />
                  <input type="text" placeholder="Query Related" />
                  <textarea name="message" id="message" cols="30" rows="5" placeholder="Message"></textarea>
                  <button>SEND MESSAGE</button>
               </form>
            </div>
            <div className="contactInfo">

               <p>Address</p>
               <h3 className="address">Begger Yard, Lugbe, FCT - Abuja</h3>

               <p>Contact Details</p>
               <h3 className="phone">(+234) 701-292-8822</h3>
               <h3 className="email">INFO@COCLUGBE.ORG</h3>

               <p>Find us here</p>
               <div className="socialLinks">
                  <img src={FacebookIcon} alt="Facebook icon" />
                  <img src={TwitterIcon} alt="Twitter icon" />
                  <img src={LinkedinIcon} alt="Linkedin icon" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default ContactBody;