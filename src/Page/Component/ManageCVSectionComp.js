import React from "react";
import { Link } from "react-router-dom";
function ManageCvSectionComp(){
return(
    <div class="unlimited-access hide-menu bg-light-primary position-relative mb-3 rounded">
              <div class="d-flex">
                <div class="unlimited-access-title me-5">
                  <h6 class="fw-semibold fs-4 mb-6 text-dark w-85" style={{textAlign:"left"}}>curriculum vitae</h6>
                  <Link to="/EditCv">
                    <a href="#"style={{float:"left"}} target="_blank" class="btn btn-primary fs-2 fw-semibold lh-sm">Manage</a>
                  </Link>
                </div>
                <div class="unlimited-access-img">
                  <img src="../assets/images/backgrounds/cv.png" alt="" style={{width:120,height:"auto"}} class="img-fluid"/>
                </div>
              </div>
            </div>
)
} export default ManageCvSectionComp;
