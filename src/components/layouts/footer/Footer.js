import React from "react";
import './footer.css';
import { Link } from "react-router-dom";
import FacebookIcon from '../../../assets/facebook-icon.png';
import Twitter from '../../../assets/twitter-icon.png';
import LinkedInIcon from '../../../assets/linked-in-icon.png';

export default function Footer() {
   return (
      <div className="footer">
         <div className="footerContainer">
            <div className="footerLeft">
               <h4>The Church of Christ Lugbe - Abuja</h4>
               <p className="copyRight">&copy; The Church of Christ, Lugbe 2024</p>
               <p className="footerPone"><a href="tel:+2347012928822">07012928822</a></p>
               <p className="footerAddress">Bergger Yard, Lugbe, FCT - Abuja</p>
               <p className="footerEmail"><a href="mailto:info@coclugbe.com">info@coclugbe.com</a></p>
            </div>
            <div className="footerLinks">
               <div className="quickLinks">
                  <h4>Quicklinks</h4>
                  <p><Link to='about-us' >ABOUT US</Link></p>
                  <p><Link to='sermons' >SERMONS</Link></p>
                  <p><Link to='events' >EVENTS</Link></p>
                  <p><Link to='blog' >BLOG</Link></p>
               </div>
               <div className="connect">
                  <h4>Connect</h4>
                  <div className="socialConnects">
                     <Link><img src={FacebookIcon} alt="" /></Link>
                     <Link><img src={Twitter} alt="" /></Link>
                     <Link><img src={LinkedInIcon} alt="" /></Link>
                  </div>
               </div>
            </div>
            <div className="footerSubscribe">
               <h4>SUBSCRIBE TO GET LATEST UPDATES AND NEWS</h4>
               <div className="footerSubscribeInput">
                  <input type="email" placeholder="Yourmail@email.com" />
                  <button>SUBSCRIBE</button>
               </div>
            </div>
         </div>
      </div>
   )
}