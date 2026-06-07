import './Sectionmain.css';
import mobilerecharge from "../assets/mobilerecharge.png";
import dthrecharge from "../assets/dthrecharge.png";
import fastag from "../assets/fastag.png";
import electricitybill from "../assets/electricitybill.png";
import loanemi from "../assets/loanemi.png";
import viewall from "../assets/viewall.png";
import sbi from "../assets/sbi.png";
import hdfc from "../assets/hdfc.png";
import kotak from "../assets/kotak.png";
import paytm from "../assets/paytmimg.png";
import { Link } from 'react-router-dom';

function Sectionmain(){
     return(
    <>
<div className="body">
<div className="wholepage">
   <div className="upistatement">
      <div>
        <div>
          <h1>Get UPI Statement in Excel/PDF</h1>
          <p>Track all your expenses.Only on Paytm App</p>
        </div>
        <div>
            <div>Download Paytm App</div>
        </div>
      </div>
    </div>
      <div className="recharge-bill-payment">
        <div className="recharge-bill-payment1">
          <h3>Recharges & Bill Payments</h3>
          <div>
            <Link to="recharge"><div>
              <img src={mobilerecharge} alt=""/>
              <p>Mobile<br/>Recharge</p>
            </div></Link>
            <Link to="dth"><div>
              <img src={dthrecharge} alt=""/>
              <p>DTH<br/>Recharge</p>
            </div></Link>
            <Link to="fastag"><div>
              <img src={fastag} alt=""/>
              <p>FasTag<br/>Recharge</p>
            </div></Link>
            <Link to="electricity"><div>
              <img src={electricitybill} alt=""/>
              <p>Electricity<br/>Bill</p>
            </div></Link>
            <Link to="loan"><div>
              <img src={loanemi} alt=""/>
              <p>Loan EMI<br/>Payment</p>
            </div></Link>
            <div>
              <img src={viewall} alt=""/>
              <p>View All<br/>Products</p>
            </div>

          </div>
        </div>
        <div className="recharge-bill-payment2">
          <h2>Get Detailed Spend<br/>Summary</h2>
          <p>Now check your<br/>spends in a tap.<br/>Only on Payment.</p>
          <div>Download Paytm App</div>
          <div className="separate-div1">
            <div>
              <p>09:51</p>
              <p>.!! .!!</p>
            </div>
            <h6>Monthly Spend<br/>Summary</h6>
          </div>
          <div className="separate-div2">
              <div>
                <p>Food(12)</p>
                <p>$12,400</p>
              </div>
              <div>
                <p>Commute(32)</p>
                <p>$12,400</p>
              </div>
              <div>
                <p>WeeklyGrocery(24)</p>
                <p>$26,200</p>
              </div>
          </div>
        </div>
     </div>
     <div className="cashback">
      <div>
        <div>CASH<br/>BACK</div>
        <h2>Do Mobile Recharge and Win $100<br/>cashback.Promo: TAKEITALL</h2>
        <div>Recharge Now <i className="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i></div>
      </div>
      <div>
        <div></div>
        <h2>Broadband Recharge<br/><span>Bill due?Pay now and get rewarded</span></h2>
        <div>Pay Now <i className="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i></div>
      </div>
     </div>
     <div className="swipe">
      <div>
        <h2>Swipe left<br/>to keep it hush</h2>
        <p>Hide your past payment<br/>with a left swipe</p>
        <div>Download App Now Brag Later </div>
        <div className="swipe-separate1">
          <div>Paytm</div>
          <p>Payment History</p>
        </div>
        <div className="swipe-separate2">
          <div>RD</div>
          <p>Surprise Gift  Wife</p>
          <div>Hide</div>
        </div>
      </div>
      <div>
         <h2>Expense Tracking<br/>made smarter!</h2>
        <p>Now download statement<br/>in Excel/PDF mat</p>
        <div>Download App Now Brag Later </div>
        <div className="swipe-separate1">
          <div>Paytm</div>
          <p>Payment History</p>
        </div>
        <div className="swipe-separate2">
          <div>RD</div>
          <p>Surprise Gift  Wife</p>
          <div>Hide</div>
        </div>
      </div>
      <div>
         <h2>We do the math<br/>You do the spending</h2>
        <p>Check total balance  all<br/>linked bank accounts</p>
        <div>Download App Now Brag Later </div>
        <div className="swipe-separate1">
          <div>Paytm</div>
          <p>Payment History</p>
        </div>
        <div className="swipe-separate2">
          <div>RD</div>
          <p>Surprise Gift  Wife</p>
          <div>Hide</div>
        </div>
      </div>
     </div>
 </div>
 <div className="ticket-booking">
   <div className="ticket-booking-center">
    <div className="ticket-booking-center1">
      <div>
        <div className="ticket-booking-center1-flex">
          <div className="flight imgbox"></div>
          <p>Flights</p>
        </div>
        <div className="ticket-booking-center1-flex">
          <div className="bus imgbox"></div>
          <p>Bus</p>
        </div>
        <div className="ticket-booking-center1-flex">
          <div className="train imgbox"></div>
          <p>Trains</p>
        </div>
        <div className="ticket-booking-center1-flex">
          <div className="intlflight imgbox"></div>
          <p>Intl.Flights</p>
        </div>
      </div>
      <h2>Pay<span className="blue">tm</span><span className="black">travel</span></h2>
    </div>
    <div className="ticketbooking-content">
      <div className="radio1">
        <input type ="radio" name="onewayorroundtrip"/>
        <label htmlFor="oneway">One Way</label>
        <input type ="radio" name="onewayorroundtrip"/>
        <label htmlFor="roundtrip">Round Trip</label>
      </div>
      <form action="">
      <div className="about-flight">
        <div className="from">
          <label htmlFor="from">From</label>
          <select name="from" id="from">
            <option value="chennai">Chennai</option>
            <option value="chennai">Mumbai</option>
            <option value="chennai">Delhi</option>
            <option value="chennai">Hyderabad</option>
            <option value="chennai">Goa</option>
          </select>
        </div>
        <div className="to">
          <label htmlFor="to">To</label>
          <select name="to" id="to">
            <option value="chennai">chennai</option>
            <option value="chennai">Mumbai</option>
            <option value="chennai">Delhi</option>
            <option value="chennai">Hyderabad</option>
            <option value="chennai">Goa</option>  
          </select>
        </div>
        <div className="depart">
          <label htmlFor="date">Depart</label>
          <input id="date" type="date" name="depart"/>
        </div>
        <div className="economy">
          <label htmlFor="economy">Economy</label>
          <select name="economy" id="economy">
            <option value="economy">Economy</option>
            <option value="premiumeconomy">Premium Economy</option>
            <option value="business">Business</option>
          </select>
        </div>
        <button>Search Flight</button>
      </div>
      </form>
      <div className="about-fares">
        <div>
          <h4>Special Fares (optional)</h4>
          <h5>Extra Savings</h5>
        </div>
        <div>
          <h6>Armed Forces</h6>
          <p>Upto $600 off</p>
        </div>
        <div>
          <h6>Student</h6>
          <p>Extra Baggage</p>
        </div>
        <div>
          <h6>Senior Citizen</h6>
          <p>Upto $600 off</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="wholepage1">
  <div className="bankaccount">
    <div>
      <h4>Pay<span className="blue">tm</span><i className="fa-solid fa-heart" style={{color: "#ff0000"}}></i></h4>
      <h2>Pay anyone directly<br/>from your <span className="blue">bank<br/>account</span></h2>
      <p>Pay anyone, everywhere. Make contactless & secure<br/>payments in-stores or online using Paytm UPI or<br/>
      Directly from your Bank Account. Plus, send &<br/>receive money from anyone.</p>
      <div className="butmain">
      <div>
        <h6>Download on the</h6>
        <h3>App Store<i className="fa-brands fa-apple" style={{color: "#ffffff"}}></i></h3>
      </div>
      <div>
        <h6>GET ON IT</h6>
        <h3>Google Play<i className="fa-solid fa-gamepad" style={{color: "#028812"}}></i></h3>
      </div>
      </div>
    </div>
    <div className="paid-img">
      <div className="paid-sucess">
        <div className="paid-sucess1">
          <h2>$250</h2>
          <h5><i className="fa-regular fa-money-bill-1" style={{color: "#008009"}}></i>Paid Sucessfully</h5>
        </div>
        <h6>To Ajay Gupta</h6>
        <h5>03 feb,10:10AM</h5>
        <h5>UPI Ref No.1034483121328</h5>
        <p style={{color: "blue", fontSize: "17px", fontWeight: "bold", marginTop: "10px"}} >Send Money to your Contacts</p>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <div className="hours">
    <div>
    <div></div>
    <h2>24/7 Trusted customer support to assist and help you in every step of your journey</h2>
    <button>Learn more</button>
    </div>
  </div>
  <div className="creditcards">
    <div className="creditcards1 div">
      <h6>Credit Cards</h6>
      <h2>One destination for<br/><span>Credit Cards</span></h2>
      <p>Paytm HDFC, SBI Card & Axis Bank Credit Card with<br/>assured Cashback and incredible offers.</p>
      <button>Apply Now</button>
      <img src={sbi} alt=""/>
      <img src={hdfc} alt=""/>
      <img src={kotak} alt=""/>
      <div className="cardposition">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div className="creditcards2 div">
      <h4><i className="fa-solid fa-umbrella"></i>Pay<span>tm</span></h4>
      <h2>Insurance Ka<br/><span>Super Market</span></h2>
      <p>A Smart, Simple & Transparent Platform to Explore &<br/>Purchase Insurance.</p>
      <button>Get It Now   <i className="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i></button>
      <div className="family-img"></div>
    </div>
  </div>
  <div className="paytm-money">
    <div>
      <div className="paytm-moneylogo">
        <div></div>
        <div></div>
        <h5>Paytm<br/>Money</h5>
      </div>
      <h5>Switch to Paytm Money.<br/>Pay Less, Trade More.</h5>
      <h3>Margin Trading Facility<br/>(MTF) at 7.99%* p.a.</h3>
      <p>Get up to 4X Buying Power on 1200+ Stocks at Low<br/>
        Interest Rates with Margin Trading Facility by Paytm<br/>
        Money.</p>
      <button>Invest with MTF  <i className="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i></button>
      <p>Investment in securities market are subject to market risks, read all the related documents carefully<br/>
         bee investing. The securities are quoted as an example and not as a recommendation. Margin Funding<br/>
         as subject to the provisions of SEBI Circular CIR/MRD/DP/54/2017 dated June 13, 2017, and the terms and<br/>
         conditions mentioned in rights and obligations statement issued by the Paytm Money Limited.  detailed<br/>
         disclaimer please visit: https://www.paytmmoney.com</p>
    </div>
    <div>
      <div className="mobile-div">
        <div className="nav-mobile">
          <div className="paytm-moneylogo">
            <div></div>
            <div></div>
            <h5>Pay<span>tm</span> Money</h5>
          </div>
        </div>
        <div className="footer-mobile">
          <h6>Home</h6>
          <h6>Watchlist</h6>
          <h6>Portfolio</h6>
          <h6>Orders</h6>
        </div>
      </div>
      <div className='ptm' style={{backgroundImage:`url(${paytm})`  }}></div>
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default Sectionmain ;