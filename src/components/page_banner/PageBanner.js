import React from "react";
import './PageBanner.css';

class PageBanner extends React.Component {
   render() {
      let pageTitle;
      let pageDescription;
      switch (this.props.page) {
         case 'sermon':
            pageTitle = 'SERMON';
            pageDescription = 'TAKE PART IN OUR SERMON';
            break;
         default:
            pageTitle = 'ABOUT US';
            pageDescription = 'SERVING THE WORLD AROUND US';
            break;
      }
      return (
         <div className="pageBanner">
            <div className="pageBannerBgImg">
               <div className="pageBannerText">
                  <h5>{pageTitle}</h5>
                  <h2>{pageDescription}</h2>
               </div>
            </div>
         </div>
      )
   }
}

export default PageBanner;