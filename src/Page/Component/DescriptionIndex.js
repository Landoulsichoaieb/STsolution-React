import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
function DescriptionIndex(){

    return(
    <Fragment>
<div className="page-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="card wow py-5 px-5 fadeInUp">
            <div className="header">
              <img src="../assets/img/services/student.png" className="img img-thumbnail border-0 shadow-none" style={{width:100,height:"auto"}} alt=""/>
            </div>
            <div className="body">
              <h5 className="text-secondary">Search for oppotunities</h5>
              <p>Discover an organization that is capable of providing assistance in the development of your final project for your studies.</p>
              <Link to="/Register"><button className="btn btn-primary">Create an account</button></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card wow py-5 px-5 fadeInUp">
            <div className="header">
              <img src="../assets/img/services/company.png" className="img img-thumbnail border-0 shadow-none" style={{width:100,height:"auto"}} alt=""/>
            </div>
            <div className="body">
              <h5 className="text-secondary">seach for employees</h5>
              <p>Seek out freshly graduated individuals who are highly motivated to support the growth of your startup or established company.</p>
              <Link to="/Register"><button className="btn btn-primary">Create an account</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Fragment>
    )
}
export default DescriptionIndex;