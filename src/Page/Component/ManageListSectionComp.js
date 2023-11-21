import React from "react";
import { Link } from "react-router-dom";
function ManageListSectionComp(){
return(
    <div class="unlimited-access hide-menu bg-light-primary position-relative mb-3 rounded">
              <div class="d-flex">
                <div class="unlimited-access-title me-5">
                  <h6 class="fw-semibold fs-4 mb-6 text-dark w-85" style={{textAlign:"left"}}>Interrested List</h6>
                  <Link to="/ListInterrested">
                    <a href="#"style={{float:"left"}} target="_blank" class="btn btn-primary fs-2 fw-semibold lh-sm">Manage</a>
                  </Link>
                </div>
                <div class="unlimited-access-img">
                  <img src="../assets/images/backgrounds/list.png" alt="" style={{width:100,height:"auto"}} class="img-fluid ml-4 mt-2 d-none d-lg-block"/>
                </div>
              </div>
            </div>
)
} export default ManageListSectionComp;
