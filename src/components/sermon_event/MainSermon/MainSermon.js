import React from "react";
import MainSermonImg from "../../../assets/sermonEvents/main-sermon-event.png";
import AddressIcon from "../../../assets/sermonEvents/address-icon.png";
import DateIcon from "../../../assets/sermonEvents/time-icon.png";

const MainSermon = () => {
   return (
      <div className="mainSermon">
         <div className="mainSermonEventContent">
            <div className="sermon">
               <img src={MainSermonImg} alt="Main sermon" />
               <div className="sermonText">
                  <h6>UPCOMING EVENT</h6>
                  <h2>HOW TO TRULY TRUST SOMEONE</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi vitae modi necessitatibus iure repudiandae quas eius atque tenetur consectetur corrupti itaque deserunt, esse voluptatem incidunt, a est ex adipisci.</p>
                  <div className="sermonQuote">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eos inventore deserunt quisquam quia quos veritatis consequuntur atque, consequatur nostrum temporibus nisi, quis quas accusantium. Praesentium quos natus saepe iure.
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius neque nihil quae, ducimus nemo at quos. Libero quod harum nostrum, nisi sed id laudantium temporibus expedita cum officia itaque?</p>
               </div>
            </div>
            <div className="register">
               <h3>REGISTER NOW</h3>
               <div className="addressAndDate">
                  <div className="address">
                     <img src={AddressIcon} alt="Address icon" />
                     <p>Begger Yard, Lugbe, FCT - Abuja</p>
                  </div>
                  <div className="date">
                     <img src={DateIcon} alt="Date icon" />
                  </div>
               </div>
               <div className="formInput">
                  <form action="">
                     <label htmlFor="fullName">
                        Full Name
                        <input type="text" placeholder="Enter your full name" />
                     </label>
                     <label htmlFor="email">
                        Email
                        <input type="email" placeholder="Enter your e-mail address" />
                     </label>
                     <button>REGISTER NOW</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MainSermon;