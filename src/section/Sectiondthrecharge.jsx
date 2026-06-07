import "./Sectiondtnrecharge.css";
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
import tataplay from "../assets/tataplay.jpg";
import airteldigital from "../assets/airteldigital.jpg";
import sundirect from "../assets/sundirect.jpg";
import dishtv from "../assets/dishtv.jpg";

function Sectiondthrecharge() {
  return (
    <>
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

      <div className="inputbox1">
        <h5>Recharge DTH or TV</h5>

        <div>
          <form action="#">
            <input type="text" placeholder="DTH Operator" />
            <br />
            <button>Proceed To Recharge</button>
          </form>
        </div>
      </div>

      <div className="dummydiv1"></div>

      <div className="operators1">
        <h6>DTH Operator</h6>

        <div className="operators-img">
          <div>
            <img src={tataplay} alt="" />
            <p>
              Tata Play (Formerly
              <br />
              Tata Sky) Recharge
            </p>
          </div>

          <div>
            <img src={airteldigital} alt="" />
            <p>
              Airtel Digital TV
              <br />
              Recharge
            </p>
          </div>

          <div>
            <img src={sundirect} alt="" />
            <p>Sun Direct Recharge</p>
          </div>

          <div>
            <img src={dishtv} alt="" />
            <p>Dish TV Recharge</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectiondthrecharge;