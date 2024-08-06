import './worldAroundUs.css';
import QuoteIcon from '../../../assets/quote-icon.png';

export default function WorldAroundUs() {
   return (
      <div className="worldAroundUs">
         <div className="worldAroundUsInner">
            <div className="worldAroundUsText">
               <h2>WE WANT TO SERVE THE WORLD AROUND US</h2>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum labore.</p>
               <button>VISIT</button>
            </div>
            <div className="quoteIcon"><img src={QuoteIcon} alt="" /></div>

         </div>
      </div>
   );
}