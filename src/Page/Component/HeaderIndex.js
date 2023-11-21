import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function HeaderIndex(){

    return(
    <Fragment>
         <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
      <div className="container">
        <a href="#" className="navbar-brand"><span className="fw-bold">ST</span><span className="text-primary">Solution.</span></a>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/"><a className="nav-link" href="index.html">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/About"><a className="nav-link" href="about.html">About</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact"><a className="nav-link" href="contact.html">Contact</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/Login"><a className="nav-link" href="contact.html">Login</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/Register"><a className="btn btn-primary ml-lg-2" href="#">Register</a></Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <div className="container">
      <div className="page-banner home-banner">
        <div className="row align-items-center flex-wrap-reverse h-100">
          <div className="col-md-6 py-5 wow fadeInLeft">
            <h1 className="mb-4">Find a company for your end of studies project</h1>
            <p className="text-lg text-grey mb-5">it's as easy as 1,2,3 to find a good company where you can make a project.</p>
              <Link to="/Register">
                <button className="btn btn-primary btn-split">Create an Account <div className="fab"><span className="mai-play"></span></div></button>
              </Link>
          </div>
          <div className="col-md-6 py-5 wow zoomIn">
            <div className="img-fluid text-center">
              <img src="../assets/img/header.gif" style={{height:225,width:"auto"}} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>   
    </Fragment>
    )
}
export default HeaderIndex;