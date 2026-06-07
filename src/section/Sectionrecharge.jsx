import "./Sectionrecharge.css";
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
import airtel from "../assets/airtel.jpg";
import bsnl from "../assets/bsnl.jpg";
import jio from "../assets/jio.jpg";
import vi from "../assets/vi.jpg";

function Sectionrecharge() {
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

        <div className="inputbox">
          <h5>Recharge or Pay Mobile Bill</h5>

          <div>
            <form action="#">
              <input type="radio" name="payment" />
              <label htmlFor="Prepaid">Prepaid</label>

              <input type="radio" name="payment" />
              <label htmlFor="Postpaid">Postpaid</label>

              <br />

              <input type="text" placeholder="Mobile Number" />

              <br />

              <select name="operator" id="operator">
                <option value="airtel">Airtel</option>
                <option value="bsnl">BSNL</option>
                <option value="jio">Jio</option>
                <option value="vi">Vi</option>
              </select>

              <br />

              <input type="text" placeholder="Amount" />

              <br />

              <button>Proceed To Recharge</button>
            </form>
          </div>
        </div>

        <div className="dummydiv"></div>

        <div className="operators">
          <h6>Select an Operator</h6>

          <div className="operators-img">
            <div>
              <img src={airtel} alt="" />
              <p>Airtel Recharge</p>
            </div>

            <div>
              <img src={bsnl} alt="" />
              <p>BSNL Recharge</p>
            </div>

            <div>
              <img src={jio} alt="" />
              <p>Jio Recharge</p>
            </div>

            <div>
              <img src={vi} alt="" />
              <p>Vi Recharge</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionrecharge;
