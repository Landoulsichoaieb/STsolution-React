import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
function FooterIndex(){

    return(
    <Fragment>
<footer className="page-footer bg-image" style={{backgroundImage: "url(/assets/img/world_pattern.svg)"}}>
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-4 py-3">
          <h3>ST.SOLUTION.</h3>
          <p>Our mission is to link between employees, students and companys that search for new employees.</p>

        </div>
        <div className="col-lg-4 py-3">
          <h5>Company</h5>
          <ul className="footer-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><Link to="/Login"><a href="#">Login</a></Link></li>
            <li><Link to="/Register"><a href="#">Create an Account</a></Link></li>
          </ul>
        </div>
        <div className="col-lg-4 py-3">
          <h5>Contact Us</h5>
          <p>PB 129, pôle technologique Ghazala Ariana, 2083</p>
          <a href="#" className="footer-link">+216 36 365 558</a>
          <br/><a href="#" className="footer-link">contact@tac-tic.net</a>
        </div>
      </div>

      <p className="text-center" id="copyright">Copyright &copy; 2023 Created by tac-tic</p>
    </div>
  </footer>

  </Fragment>
  )
}
export default FooterIndex;