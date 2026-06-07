import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
          <h4>
            pay<span>tm</span>
            <i
              className="fa-solid fa-heart"
              style={{ color: "#ff0000" }}
            ></i>
          </h4>
          </Link>

          <div className="letter-box">
            <Link to="/recharge">
              <h5 className="letter">Recharge & Bills</h5>
            </Link>
          </div>

          <div className="letter-box">
            <Link to="/electricity">
              <h5 className="letter">Electricity Payment</h5>
            </Link>
          </div>

          <div className="letter-box">
            <Link to="/loan">
              <h5 className="letter">Loan Services</h5>
            </Link>
          </div>

          <div className="letter-box">
            <Link to="/dth">
              <h5 className="letter">DTH Recharge</h5>
            </Link>
          </div>

          <div className="letter-box">
            <Link to="/fastag">
              <h5 className="letter">Fastag Company</h5>
            </Link>
          </div>

          <div className="sign-in">
            <div>
              <i
                className="fa-solid fa-address-book"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <Link to="/signin">
              <h6  style={{ color: "#ffffff" }}>Sign In</h6>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;