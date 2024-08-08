import React from "react";
import './recentPost.css';
import MainPostImg from "../../../assets/blogImgs/EMZxDosijJ4.png";

const RecentPost = () => {
   return (
      <div className="recentPost">
         <div className="recentPostHead">
            <h6>OUR BLOG</h6>
            <h2>MOST RECENT POST</h2>
         </div>
         <div className="mainPost">
            <div className="mainPostImg">
               <img src={MainPostImg} alt="Main post" />
            </div>
            <div className="mainPostInfo">
               <div className="dateAuthor">
                  <p>Tuesday 06 August, 2024</p>
                  <p>By Matthew Okoro</p>
               </div>
               <h3>CHURCH WAS DOING WHAT HE OFTEN DID WHEN DROPPED AN ORACLE</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse id molestias, pariatur dolore dolorum, suscipit quisquam tenetur nostrum, rerum velit eligendi. Assumenda quasi voluptatibus qui officia. Quam modi veniam alias?</p>
               <button>READ MORE</button>
            </div>
         </div>
      </div>
   );
}

export default RecentPost;