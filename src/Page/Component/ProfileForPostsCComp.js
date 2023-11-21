import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostsCompanyForComp from "./PostsCompanyForComp";
import WhatidoForComp from "./WhatidoForComp";
import VisitCvSectionComp from "./VisitCvSectionComp";
import axios from "axios";

function ProfileForPostsCComp() {
  const user = JSON.parse(localStorage.getItem('user-info'));
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const [phoneNbr, setPhoneNbr] = useState(null);
  const [isSoloCompany, setIsSoloCompany] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const phoneRes = await axios.get(`http://localhost:8000/api/getphone/${id}`);
        const roleRes = await axios.get(`http://localhost:8000/api/getcompanysolo/${id}`);

        setPhoneNbr(phoneRes.data);
        setIsSoloCompany(roleRes.data !== "false");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="row">
      <PostsCompanyForComp />
      <div className="col-lg-3 align-items-stretch">
        <div className="unlimited-access hide-menu bg-light-primary position-relative mb-3 rounded">
          <div className="card bg-transparent shadow-none p-0 m-0">
            <div className="d-flex">
              <div className="card-body p-0">
                <h5 className="card-title col-12 p-0" style={{ float: "left", textAlign: "left" }}>Phone number</h5>
                <p className="card-text col-12 p-0" style={{ float: "left", textAlign: "left" }}>
                  {phoneNbr || <i>No Phone number</i>}
                </p>
              </div>
              <div className="">
                <img src="../assets/images/backgrounds/phone.png" alt="" style={{ width: 140, height: "auto" }} className="img-fluid mt-2 d-none d-lg-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForPostsCComp;
