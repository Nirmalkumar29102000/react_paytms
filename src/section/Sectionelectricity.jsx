import "./Sectionelectricity.css";
import prepaid from "../assets/prepaid.png";
import electricity from "../assets/electricity.png";
import dth from "../assets/dth.png";
import metro from "../assets/metro.png";
import broadband from "../assets/broadband.png";
import education from "../assets/education.png";
import payloan from "../assets/payloan.png";
import bookacylinder from "../assets/bookacylinder.png";
import paytmfirst from "../assets/paytmfirst.png";
import investstock from "../assets/investstock.png";


function Sectionelectricity() {
  return (
    <>
    <div className="body">
      <div className="rechargetypes">
        <div>
          <img src={prepaid} alt="" />
          <p>Prepaid/Postpaid</p>
        </div>

        <div>
          <img src={electricity} alt="" />
          <p>Electricity</p>
        </div>

        <div>
          <img src={dth} alt="" />
          <p>DTH</p>
        </div>

        <div>
          <img src={metro} alt="" />
          <p>Metro</p>
        </div>

        <div>
          <img src={broadband} alt="" />
          <p>Broadband/Landline</p>
        </div>

        <div>
          <img src={education} alt="" />
          <p>Education</p>
        </div>

        <div>
          <img src={payloan} alt="" />
          <p>Pay Loan</p>
        </div>

        <div>
          <img src={bookacylinder} alt="" />
          <p>Book a Cylinder</p>
        </div>

        <div>
          <img src={paytmfirst} alt="" />
          <p>Paytm First</p>
        </div>

        <div>
          <img src={investstock} alt="" />
          <p>Invest in Stocks</p>
        </div>
      </div>

      <div className="inputbox3">
        <h5>Pay Electricity Bill</h5>

        <div>
          <form action="#">
            <input type="radio" name="payment" />
            <label htmlFor="Prepaid">Electricity Boards</label>

            <input type="radio" name="payment" />
            <label htmlFor="Postpaid">Apartments</label>

            <br />

            <select name="operator" id="operator">
              <option value="andhra">Andhra Pradesh</option>
              <option value="tamilnadu">Tamil Nadu</option>
              <option value="kerala">Kerala</option>
              <option value="maharashtra">Maharashtra</option>
            </select>

            <br />

            <button>Proceed</button>
          </form>
        </div>
      </div>

      <div className="dummydiv3"></div>

      <div className="operators3">
        <h6>State</h6>

        <div className="operators3-img">
          <div>
            <p>Andhra Pradesh Bill Payment</p>
            <p>Arunachal Pradesh Bill Payment</p>
            <p>Assam Bill Payment</p>
            <p>Bihar Bill Payment</p>
            <p>Chandigarh Bill Payment</p>
            <p>Chhattisgarh Bill Payment</p>
            <p> Daman & Diu Bill Payment</p>
          </div>

          <div>
            <p>Goa Bill Payment</p>
            <p>Gujarat Bill Payment</p>
            <p>Haryana Bill Payment</p>
            <p>Himachal Pradesh Bill Payment</p>
            <p>Jammu & Kashmir Bill Payment</p>
            <p>Jharkhand Bill Payment</p>
            <p>Karnataka Bill Payment</p>
          </div>

          <div>
            <p>Kerala Bill Payment</p>
            <p>Lakshadweep Bill Payment</p>
            <p>Madhya Pradesh Bill Payment</p>
            <p>Maharashtra Bill Payment</p>
            <p>Manipur Bill Payment</p>
            <p>Meghalaya Bill Payment</p>
            <p>Mizoram Bill Payment</p>
          </div>

          <div>
            <p>Tamil Nadu Bill Payment</p>
            <p>Telangana Bill Payment</p>
            <p>Tripura Bill Payment</p>
            <p>Uttar Pradesh Bill Payment</p>
            <p>Uttarakhand Bill Payment</p>
            <p>West Bengal Bill Payment</p>
            <p>Rajasthan Bill Payment</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Sectionelectricity;