import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function VisitCvSectionComp(){
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    const [cv,setCv]= useState("")

  useEffect(()=>{
    axios.get("http://localhost:8000/api/getcv/"+id)
    .then(result => {setCv(result.data)})
    .catch(error => console.log(error))
  },[])

return(
    <div class="unlimited-access hide-menu bg-light-primary position-relative mb-3 rounded">
              <div class="d-flex">
                <div class="unlimited-access-title me-5">
                  <h6 class="fw-semibold fs-4 mb-6 text-dark w-85" style={{textAlign:"left"}}>curriculum vitae</h6>
                  
                  {
                          cv ?  <a href={`http://localhost:8000/${cv}`} style={{float:"left"}} target="_blank" class="btn btn-primary fs-2 fw-semibold lh-sm">Open Cv</a> : <i>No cv available</i>
                  }
                </div>
                <div class="unlimited-access-img">
                  <img src="../assets/images/backgrounds/cv.png" alt="" style={{width:120,height:"auto"}} class="img-fluid"/>
                </div>
              </div>
            </div>
)
} export default VisitCvSectionComp;
