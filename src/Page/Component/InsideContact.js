import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
function InsideAbout(){

    return(
    <Fragment>
        <div className="page-section">
    <div class="container">
      <div class="row text-center align-items-center">
        <div class="col-lg-4 py-3">
          <div class="display-4 text-center text-primary"><span class="mai-pin"></span></div>
          <p class="mb-3 font-weight-medium text-lg">Address</p>
          <p class="mb-0 text-secondary">PB 129, pôle technologique Ghazala Ariana, 2083, Tunisie</p>
        </div>
        <div class="col-lg-4 py-3">
          <div class="display-4 text-center text-primary"><span class="mai-call"></span></div>
          <p class="mb-3 font-weight-medium text-lg">Phone</p>
          <p class="mb-0"><a href="#" class="text-secondary">+216 36 365 558</a></p>
        </div>  
        <div class="col-lg-4 py-3">
          <div class="display-4 text-center text-primary"><span class="mai-mail"></span></div>
          <p class="mb-3 font-weight-medium text-lg">Email Address</p>
          <p class="mb-0"><a href="#" class="text-secondary">contact@tac-tic.net</a></p>
        </div>
      </div>
    </div>

    <div className="container-fluid mt-4">
        
    <div class="col-lg-12 px-0">
        <center>    
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1595.4089579655695!2d10.185287!3d36.894704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb7176d60617%3A0x652ff8347014f39d!2sTAC-TIC!5e0!3m2!1sfr!2sus!4v1695649410551!5m2!1sfr!2sus" className="col-10 col-md-8 col-lg-6" height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </center>
    </div>


    </div>
    </div>
    </Fragment>
    )
}
export default InsideAbout;