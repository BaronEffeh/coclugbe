import React from "react";
import "./error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
   return (
      <div className="error404">
         <div className="error404Content">
            <div className="oops">
               <h1><em>Oops!</em></h1>
            </div>
            <h3>ERROR 404 - PAGE NOT FOUND</h3>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link to="/"> <button>GO TO HOMEPAGE</button></Link>
         </div>
      </div>
   );
}

export default Error404;