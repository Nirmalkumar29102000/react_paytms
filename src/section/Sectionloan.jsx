import "./Sectionloan.css";
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
import bajaj_finance from "../assets/bajaj finance.jpg";
import tvs_credit from "../assets/tvs finance.jpg";
import ujjivan_finance from "../assets/ujjivan finance.jpg";
import muthoot_finance from "../assets/muthoot finance.jpg";
function Sectionloan() {
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

      <div className="inputbox4">
        <h5>Pay Loan EMI</h5>

        <div>
          <form action="#">
            <select name="operator" id="operator">
              <option value="bajaj">Bajaj Finance</option>
              <option value="ujjivan">Ujjivan Finance</option>
              <option value="tvs">TVS Credit</option>
              <option value="muthoot">Muthoot Finance</option>
            </select>

            <br />

            <button>Proceed To Recharge</button>
          </form>
        </div>
      </div>

      <div className="dummydiv4"></div>

      <div className="operators4">
        <h6>Lender</h6>

        <div className="operators-img">
          <div>
            <img src={bajaj_finance} alt="" />
            <p>
              Bajaj Finance Limited
              <br />
              EMI Payment
            </p>
          </div>

          <div>
            <img src={tvs_credit} alt="" />
            <p>
              TVS Credit Services Limited
              <br />
              EMI Payment
            </p>
          </div>

          <div>
            <img src={ujjivan_finance} alt="" />
            <p>
              Ujjivan Small Finance Bank
              <br />
              EMI Payment
            </p>
          </div>

          <div>
            <img src={muthoot_finance} alt="" />
            <p>
              Muthoot Finance EMI
              <br />
              Payment
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionloan;