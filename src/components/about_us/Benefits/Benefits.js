import './benefits.css';
import FindFullfilment from '../../../assets/aboutImgs/3MWdi5_6Hrc.png';
import SharedValues from '../../../assets/aboutImgs/3Xmcv5MjZpw.png';
import CharityEvents from '../../../assets/aboutImgs/3MWdi7_6Hrc.png';
import AllAreWelcome from '../../../assets/aboutImgs/3Xmcv6MjZpw.png'

const Benefits = () => {
   return (
      <div className="benefits">
         <div className="benefitsHead">
            <h6>BEBEFITS</h6>
            <h2>THE BENEFITS OF BEING A PART OF THE CHURCH</h2>
         </div>

         <div className="benefitsDetails">
            <div className="benefitsDetailsCard"><h3>FIND FUFILLMENT AND JOY</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt, fugit aperiam earum quis vero numquam quas aliquam praesentium sit qui nisi asperiores cupiditate eum dolores, blanditiis vitae maiores eveniet!</p>
            </div>
            <div className="benefitsDetailsCard"><img src={FindFullfilment} alt="" />
            </div>

            <div className="benefitsDetailsCard"><img src={SharedValues} alt="" />
            </div>
            <div className="benefitsDetailsCard"><h3>SHARED VALUES</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt, fugit aperiam earum quis vero numquam quas aliquam praesentium sit qui nisi asperiores cupiditate eum dolores, blanditiis vitae maiores eveniet!</p>
            </div>

            <div className="benefitsDetailsCard"><h3>CHARITY EVENTS</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt, fugit aperiam earum quis vero numquam quas aliquam praesentium sit qui nisi asperiores cupiditate eum dolores, blanditiis vitae maiores eveniet!</p>
            </div>
            <div className="benefitsDetailsCard"><img src={CharityEvents} alt="" />
            </div>

            <div className="benefitsDetailsCard"><img src={AllAreWelcome} alt="" />
            </div>
            <div className="benefitsDetailsCard"><h3>ALL ARE WELCOME</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt, fugit aperiam earum quis vero numquam quas aliquam praesentium sit qui nisi asperiores cupiditate eum dolores, blanditiis vitae maiores eveniet!</p>
            </div>

         </div>
      </div>
   );
}

export default Benefits;